const fs = require("fs");

const dirP = "/home/gen/projects/testfile";

function pathCheck(dirPath) {
  let fileInfo = [];
  if (fs.lstatSync(dirPath).isDirectory()) {
    const fileList = fs.readdirSync(dirPath);
    fileList.forEach((item) => {
      fileInfo.push(item + ": " + dirP);
    });

    console.log(JSON.stringify(fileInfo));
  }
}

pathCheck(dirP);



