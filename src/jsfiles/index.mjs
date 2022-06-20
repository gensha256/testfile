import fs from 'fs'

function evalFilesInDir(dirPath) {

  if (fs.lstatSync(dirPath).isFile()) {
    throw new Error("dirPath param is not directory.");
  }

  fs.readdir(dirPath, (err, files) => {
    if (err) {
      throw err;
    }

    return files;
  });
}

export {evalFilesInDir};



