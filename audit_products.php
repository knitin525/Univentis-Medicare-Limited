<?php
/**
 * Product Audit Script
 * Cross-references product-data.js entries with actual image files
 */

// 1. Read product-data.js and extract all image paths
$jsContent = file_get_contents(__DIR__ . '/assets/js/product-data.js');

// Extract the CSV portion between backticks
preg_match('/`([\s\S]*?)`/', $jsContent, $matches);
$csvData = trim($matches[1]);
$lines = explode("\n", $csvData);

$productImages = [];
$productEntries = [];
$header = array_shift($lines); // Remove header

foreach ($lines as $lineNum => $line) {
    $line = trim($line);
    if (empty($line)) continue;
    
    $parts = str_getcsv($line);
    if (count($parts) >= 6) {
        $imagePath = trim($parts[5]);
        $productImages[$imagePath] = trim($parts[0]);
        $productEntries[] = [
            'name' => trim($parts[0]),
            'category' => trim($parts[1]),
            'packSize' => trim($parts[2]),
            'mrp' => trim($parts[3]),
            'division' => trim($parts[4]),
            'image' => $imagePath,
            'line' => $lineNum + 2
        ];
    }
}

// 2. Scan actual image directories
$ultimaDir = __DIR__ . '/assets/img/Ultima';
$innoventisDir = __DIR__ . '/assets/img/Innoventis';

$actualImages = [];

if (is_dir($ultimaDir)) {
    foreach (glob($ultimaDir . '/*.webp') as $file) {
        $relPath = 'assets/img/Ultima/' . basename($file);
        $actualImages[$relPath] = basename($file);
    }
}

if (is_dir($innoventisDir)) {
    foreach (glob($innoventisDir . '/*.webp') as $file) {
        $relPath = 'assets/img/Innoventis/' . basename($file);
        $actualImages[$relPath] = basename($file);
    }
}

// 3. Find mismatches
echo "=== PRODUCT AUDIT REPORT ===\n\n";

// A) Images that exist on disk but have NO product entry
echo "--- IMAGES WITH NO PRODUCT ENTRY (have image, missing from product-data.js) ---\n";
$missingEntries = [];
foreach ($actualImages as $relPath => $filename) {
    if (!isset($productImages[$relPath])) {
        $missingEntries[] = $relPath;
    }
}
sort($missingEntries);
echo "Count: " . count($missingEntries) . "\n";
foreach ($missingEntries as $path) {
    echo "  [NO ENTRY] $path\n";
}

echo "\n--- PRODUCT ENTRIES WITH MISSING IMAGES (in product-data.js but no image file) ---\n";
$missingImages = [];
foreach ($productEntries as $entry) {
    $fullPath = __DIR__ . '/' . $entry['image'];
    if (!file_exists($fullPath)) {
        $missingImages[] = $entry;
    }
}
echo "Count: " . count($missingImages) . "\n";
foreach ($missingImages as $entry) {
    echo "  [NO IMAGE] Line {$entry['line']}: {$entry['name']} | {$entry['category']} | {$entry['division']} | {$entry['image']}\n";
}

echo "\n--- SUMMARY ---\n";
echo "Total product entries: " . count($productEntries) . "\n";
echo "Total image files (Ultima+Innoventis): " . count($actualImages) . "\n";
echo "Images without product entry: " . count($missingEntries) . "\n";
echo "Product entries without image: " . count($missingImages) . "\n";
