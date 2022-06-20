import fs from "fs";

const TYPE_FILE = "file";
const TYPE_DIR = "dir";

function evalFilesInDir(dirPath) {

  if (fs.lstatSync(dirPath).isFile()) {
    throw new Error("dirPath param is not directory.");
  }

  const files = fs.readdirSync(dirPath);

  const resulList = [];
  files.forEach((item) => {

    const info = {
      name: item,
      path: dirPath + item
    };

    if (fs.lstatSync(info.path).isFile()) {
      info.type = TYPE_FILE;
    } else {
      info.type = TYPE_DIR;
    }

    resulList.push(info);
  });

  return resulList;
}

export { evalFilesInDir, TYPE_DIR, TYPE_FILE };



