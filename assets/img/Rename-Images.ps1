$ErrorActionPreference = "Stop"

# Paths
$csvPath = "f:\Web Data\Backup UML 2025\Back\Catalogue Pdf\UML Price List.csv"
$imgDir = "f:\Web Data\Backup UML 2025\Back\assets\img\WEBP"

if (-not (Test-Path $csvPath)) {
    Write-Host "CSV file not found: $csvPath" -ForegroundColor Red
    Pause
    exit
}

$csv = Import-Csv $csvPath

Write-Host "Reading existing images..."
$existingFiles = Get-ChildItem -Path $imgDir -Filter "*.webp" | Select-Object -ExpandProperty Name

$renamedCount = 0
$notFoundCount = 0

foreach ($row in $csv) {
    $rawBrand = $row."BRAND NAME"
    if ([string]::IsNullOrWhiteSpace($rawBrand)) { continue }
    
    $brand = $rawBrand.Trim()
    $pack = $row."PACK SIZE ".Trim()
    $cat = $row." CATEGORY"
    if ($null -eq $cat) { $cat = "General" } else { $cat = $cat.Trim() }

    # Capitalize Brand
    $textInfo = (Get-Culture).TextInfo
    $capitalizedBrand = $textInfo.ToTitleCase($brand.ToLower())

    # Map Category
    $lowerCat = $cat.ToLower()
    $mappedCat = $textInfo.ToTitleCase($lowerCat)
    if ($lowerCat -eq "tablet") { $mappedCat = "Tablets" }
    elseif ($lowerCat -eq "capsule") { $mappedCat = "Capsules" }
    elseif ($lowerCat -eq "ointement" -or $lowerCat -eq "ointment") { $mappedCat = "Cream" }
    elseif ($lowerCat -eq "dry syrup") { $mappedCat = "Dry Syrup" }
    elseif ($lowerCat -eq "softgel") { $mappedCat = "Softgel Capsules" }

    $targetName = "$capitalizedBrand $pack $mappedCat.webp"

    # Try to find a match if the file doesn't already exist with the target name
    $targetPath = Join-Path $imgDir $targetName
    if (Test-Path $targetPath) {
        # Already correct
        continue
    }

    # Fuzzy match: Look for a file that contains the brand name (ignoring case/spaces)
    $searchString = $brand -replace '\s+', '*'
    $match = $existingFiles | Where-Object { $_ -match $searchString -or $_ -match ($brand -replace '-', '*') } | Select-Object -First 1

    if ($match) {
        $sourcePath = Join-Path $imgDir $match
        Write-Host "Renaming: $match  ->  $targetName" -ForegroundColor Green
        Rename-Item -Path $sourcePath -NewName $targetName -ErrorAction SilentlyContinue
        $renamedCount++
        
        # Update existing files list to prevent renaming same file twice
        $existingFiles = $existingFiles | Where-Object { $_ -ne $match }
    } else {
        Write-Host "No matching image found for: $brand" -ForegroundColor Yellow
        $notFoundCount++
    }
}

Write-Host ""
Write-Host "Done! Successfully renamed $renamedCount files." -ForegroundColor Cyan
Write-Host "Could not find matches for $notFoundCount products." -ForegroundColor Yellow
Pause
