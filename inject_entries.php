<?php
/**
 * Inject missing product entries into product-data.js
 * Reads the current file, finds the closing backtick, and inserts new entries before it
 */

$jsFile = __DIR__ . '/assets/js/product-data.js';
$jsContent = file_get_contents($jsFile);

// Extract CSV portion
preg_match('/`([\s\S]*?)`/', $jsContent, $matches);
$csvData = trim($matches[1]);
$csvLines = explode("\n", $csvData);
$header = array_shift($csvLines);

// Build set of existing image paths
$existingImages = [];
foreach ($csvLines as $line) {
    $line = trim($line);
    if (empty($line)) continue;
    $parts = str_getcsv($line);
    if (count($parts) >= 6) {
        $existingImages[trim($parts[5])] = true;
    }
}

// Category detection
function detectCategory($filename) {
    $fn = strtolower($filename);
    if (strpos($fn, 'tablet') !== false || strpos($fn, 'tabletes') !== false) return 'Tablet';
    if (strpos($fn, 'capsule') !== false || strpos($fn, 'caps') !== false) return 'Capsule';
    if (strpos($fn, 'softgel') !== false) return 'Softgel';
    if (strpos($fn, 'injection') !== false || strpos($fn, 'injecton') !== false) return 'Injection';
    if (strpos($fn, 'dry syrup') !== false) return 'Dry Syrup';
    if (strpos($fn, 'syrup') !== false || strpos($fn, 'suspension') !== false) return 'Syrup';
    if (strpos($fn, 'cream') !== false || strpos($fn, 'ointment') !== false) return 'Ointement';
    if (strpos($fn, 'respule') !== false) return 'Respules';
    if (strpos($fn, 'drop') !== false || strpos($fn, 'droper') !== false) return 'Drop';
    if (strpos($fn, 'spray') !== false || strpos($fn, 'spary') !== false) return 'Nasal Spray';
    if (strpos($fn, 'sachet') !== false) return 'Sachet';
    if (strpos($fn, 'soap') !== false) return 'Soap';
    if (strpos($fn, 'shampoo') !== false) return 'Shampoo';
    if (strpos($fn, 'toothpaste') !== false) return 'Toothpaste';
    if (strpos($fn, 'mouthwash') !== false) return 'Mouthwash';
    if (strpos($fn, 'lozenges') !== false || strpos($fn, 'lozenge') !== false) return 'Lozenges';
    if (strpos($fn, 'powder') !== false) return 'Powder';
    if (strpos($fn, 'facewash') !== false) return 'Facewash';
    if (strpos($fn, 'condom') !== false) return 'Condom';
    if (strpos($fn, 'gel') !== false) return 'Gel';
    if (strpos($fn, 'oral solution') !== false) return 'Oral Solution';
    if (strpos($fn, 'v-wash') !== false) return 'V-wash';
    if (strpos($fn, 'rub') !== false) return 'Ointement';
    if (strpos($fn, 'solution') !== false || strpos($fn, 'gargle') !== false) return 'Solution';
    if (strpos($fn, 'oil') !== false) return 'Pain Oil';
    if (strpos($fn, 'general') !== false) return 'Tablet'; // Acipox-800 General
    return 'Other';
}

function extractPackSize($filename) {
    $fn = basename($filename, '.webp');
    if (preg_match('/(\d+x\d+(?:x\d+)?)\s/i', $fn, $m)) return $m[1];
    if (preg_match('/(\d+(?:\.\d+)?\s*(?:ml|gm|g|mg|mcg|N))\b/i', $fn, $m)) return trim($m[1]);
    if (preg_match('/(\d+x\d+(?:x\d+)?)/i', $fn, $m)) return $m[1];
    return '-';
}

function extractBrandName($filename) {
    $fn = basename($filename, '.webp');
    $name = $fn;
    $name = preg_replace('/\s+\d+x\d+(x\d+)?\s+.*$/i', '', $name);
    $name = preg_replace('/\s+\d+(?:\.\d+)?\s*(?:ml|gm|g|mg|mcg)\s+.*$/i', '', $name);
    $name = preg_replace('/\s+(Tablets?|Capsules?|Injection|Softgel|Cream|Syrup|Dry Syrup|Drop|Drops?|Spray|Soap|Shampoo|Toothpaste|Mouthwash|Lozenges|Powder|Facewash|Condom|Gel|Respules?|Solution|Ointment|Suspension|Injecton|V-Wash|Pain-Gel|Pain Oil|Oral Solution|Rub|Tabletes|Bottal|single|for Inhalation)\s*.*$/i', '', $name);
    $name = preg_replace('/\s+\d+(?:\.\d+)?\s*(?:percent|%).*$/i', '', $name);
    // Clean trailing "General"
    $name = preg_replace('/\s+General$/i', '', $name);
    return trim($name);
}

// Scan directories
$dirs = [
    'assets/img/Ultima' => 'Ultima',
    'assets/img/Innoventis' => 'Innoventis'
];

$newLines = [];
foreach ($dirs as $relDir => $division) {
    $absDir = __DIR__ . '/' . $relDir;
    if (!is_dir($absDir)) continue;
    
    foreach (glob($absDir . '/*.webp') as $file) {
        $relPath = $relDir . '/' . basename($file);
        if (isset($existingImages[$relPath])) continue;
        
        $filename = basename($file);
        $brand = extractBrandName($filename);
        $category = detectCategory($filename);
        $packSize = extractPackSize($filename);
        
        $newLines[] = "$brand,$category,$packSize,0.00,$division,$relPath";
    }
}

sort($newLines);

if (empty($newLines)) {
    echo "No new entries to add.\n";
    exit;
}

// Find the backtick closing the CSV template literal and insert before it
$newCsvBlock = "\n" . implode("\n", $newLines);

// Find position of the closing backtick
$backtickPos = strpos($jsContent, '`;');
if ($backtickPos === false) {
    // Try just backtick
    $backtickPos = strpos($jsContent, '`', strpos($jsContent, '`') + 1);
}

// Insert new lines before closing backtick
$newContent = substr($jsContent, 0, $backtickPos) . $newCsvBlock . "\n" . substr($jsContent, $backtickPos);

file_put_contents($jsFile, $newContent);

echo "SUCCESS: Added " . count($newLines) . " new product entries to product-data.js\n";
echo "NOTE: All new entries have MRP=0.00 - update with actual prices.\n";
