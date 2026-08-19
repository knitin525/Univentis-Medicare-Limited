<?php
/**
 * Auto-generate product-data.js CSV entries from image filenames
 * Image naming convention: "ProductName PackSize Category.webp"
 */

// Category detection from filename
function detectCategory($filename) {
    $fn = strtolower($filename);
    if (strpos($fn, 'tablet') !== false || strpos($fn, 'tab ') !== false) return 'Tablet';
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
    return 'OTHER';
}

// Extract pack size from filename
function extractPackSize($filename) {
    $fn = basename($filename, '.webp');
    // Match patterns like "20x10", "10x1x10", "200ml", "15gm", "75g", "100 ml", "5ml", etc.
    if (preg_match('/(\d+x\d+(?:x\d+)?)\s/i', $fn, $m)) return $m[1];
    if (preg_match('/(\d+(?:\.\d+)?\s*(?:ml|gm|g|mg|mcg|N))\b/i', $fn, $m)) return trim($m[1]);
    if (preg_match('/(\d+x\d+(?:x\d+)?)/i', $fn, $m)) return $m[1];
    return 'UNKNOWN';
}

// Extract brand name from filename
function extractBrandName($filename) {
    $fn = basename($filename, '.webp');
    // Remove common suffixes: pack size patterns, category words
    $name = $fn;
    // Remove trailing category/size info
    $name = preg_replace('/\s+\d+x\d+(x\d+)?\s+.*$/i', '', $name);
    $name = preg_replace('/\s+\d+(?:\.\d+)?\s*(?:ml|gm|g|mg|mcg)\s+.*$/i', '', $name);
    $name = preg_replace('/\s+(Tablets?|Capsules?|Injection|Softgel|Cream|Syrup|Dry Syrup|Drop|Spray|Soap|Shampoo|Toothpaste|Mouthwash|Lozenges|Powder|Facewash|Condom|Gel|Respules?|Solution|Ointment|Suspension|Injecton|V-Wash|Pain-Gel|Pain Oil|Oral Solution|Rub|Tabletes|Bottal|single)\s*.*$/i', '', $name);
    $name = preg_replace('/\s+\d+(?:\.\d+)?\s*(?:percent|%).*$/i', '', $name);
    return trim($name);
}

// Read existing product entries to avoid duplicates
$jsContent = file_get_contents(__DIR__ . '/assets/js/product-data.js');
preg_match('/`([\s\S]*?)`/', $jsContent, $matches);
$csvData = trim($matches[1]);
$lines = explode("\n", $csvData);
array_shift($lines);

$existingImages = [];
foreach ($lines as $line) {
    $line = trim($line);
    if (empty($line)) continue;
    $parts = str_getcsv($line);
    if (count($parts) >= 6) {
        $existingImages[trim($parts[5])] = true;
    }
}

// Process missing images
$dirs = [
    'assets/img/Ultima' => 'Ultima',
    'assets/img/Innoventis' => 'Innoventis'
];

// Map division based on folder
$divisionMap = [
    'Ultima' => 'Ultima',
    'Innoventis' => 'Innoventis'
];

$newEntries = [];
foreach ($dirs as $relDir => $folder) {
    $absDir = __DIR__ . '/' . $relDir;
    if (!is_dir($absDir)) continue;
    
    foreach (glob($absDir . '/*.webp') as $file) {
        $relPath = $relDir . '/' . basename($file);
        if (isset($existingImages[$relPath])) continue;
        
        $filename = basename($file);
        $brandName = extractBrandName($filename);
        $category = detectCategory($filename);
        $packSize = extractPackSize($filename);
        $division = $divisionMap[$folder];
        
        $newEntries[] = [
            'brand' => $brandName,
            'category' => $category,
            'packSize' => $packSize,
            'mrp' => '0.00',
            'division' => $division,
            'image' => $relPath,
            'filename' => $filename
        ];
    }
}

// Sort by division then brand
usort($newEntries, function($a, $b) {
    $cmp = strcmp($a['division'], $b['division']);
    if ($cmp !== 0) return $cmp;
    return strcasecmp($a['brand'], $b['brand']);
});

echo "=== NEW PRODUCT ENTRIES TO ADD ===\n";
echo "Count: " . count($newEntries) . "\n\n";

// Output CSV lines ready to paste
echo "--- CSV LINES (ready to add to product-data.js) ---\n";
foreach ($newEntries as $entry) {
    echo "{$entry['brand']},{$entry['category']},{$entry['packSize']},{$entry['mrp']},{$entry['division']},{$entry['image']}\n";
}

echo "\n--- ENTRIES NEEDING MANUAL REVIEW (MRP=0.00 or category=OTHER or packSize=UNKNOWN) ---\n";
foreach ($newEntries as $i => $entry) {
    $issues = [];
    if ($entry['mrp'] === '0.00') $issues[] = 'MRP missing';
    if ($entry['category'] === 'OTHER') $issues[] = 'Category unknown';
    if ($entry['packSize'] === 'UNKNOWN') $issues[] = 'Pack size unknown';
    if (!empty($issues)) {
        echo "  [{$entry['brand']}] " . implode(', ', $issues) . " | File: {$entry['filename']}\n";
    }
}
