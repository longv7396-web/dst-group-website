$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$distPath = Join-Path $root "dist"
$outPath = Join-Path $root "hosting-packages"

if (!(Test-Path $distPath)) {
  throw "Missing dist folder. Run npm run build first."
}

if (Test-Path $outPath) {
  Remove-Item -Recurse -Force $outPath
}
New-Item -ItemType Directory -Path $outPath | Out-Null

$targets = @(
  @{ name = "dstbarclub"; zip = "dstbarclub-latest.zip" },
  @{ name = "dsthotel"; zip = "dsthotel-latest.zip" },
  @{ name = "dstservice"; zip = "dstservice-latest.zip" }
)

foreach ($target in $targets) {
  $folderPath = Join-Path $outPath $target.name
  New-Item -ItemType Directory -Path $folderPath | Out-Null

  Copy-Item -Path (Join-Path $distPath "*") -Destination $folderPath -Recurse -Force

  # ZIP root must contain index.html + assets/, not nested dist folder
  $zipPath = Join-Path $outPath $target.zip
  Compress-Archive -Path (Join-Path $folderPath "*") -DestinationPath $zipPath -Force
}

Write-Host "Created hosting package zips in: $outPath"
Write-Host "- dstbarclub-latest.zip"
Write-Host "- dsthotel-latest.zip"
Write-Host "- dstservice-latest.zip"
