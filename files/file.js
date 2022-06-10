const fs = require("fs");

module.exports.evalFilesInDir = function evalFilesInDir(dirPath) {

  let fileNames = [];

  if (fs.lstatSync(dirPath).isFile()) {
    throw new Error("This file no directory");
  }

  fs.readdir(dirPath, (err, files) => {
    if (err) {
      throw err;
    }
    fileNames = files;
  });
  return fileNames;
};


