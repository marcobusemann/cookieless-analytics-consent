const fs = require('fs');
const path = require('path');
const FileHound = require('filehound');
 
const sourcePath = path.join(__dirname, '../src');
const files = FileHound.create()
  .paths(sourcePath)
  .ext('css')
  .findSync();

const targetPath = path.join(__dirname, '../dist');
for (const file of files)
{
    const targetFile = path.join(targetPath, path.relative(sourcePath, file));
    fs.copyFileSync(file, targetFile);
}
 