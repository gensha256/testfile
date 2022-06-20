const fs = require('fs')
const path = require("path");

const dirP = "/home/gen/projects/testfile";



function pathCheck(dirPath) {
  const fileInfo = [];

  if (fs.lstatSync(dirPath).isDirectory()) {

    const fileList = fs.readdirSync(dirPath);

    fileList.forEach((item) => {

      if (path.extname(item)) {

        fileInfo.push("TypeFile ");

      } else {

        fileInfo.push("TypeDirectory");
      }

      // const stats = fs.statSync(item)
      // const sizeMb = stats.size / 1000000

      fileInfo.push(`Size:Mb  path:${dirPath}`);
    });
  }
  return JSON.stringify(fileInfo);
}

// const dirData = pathCheck(dirP);

// console.log(dirData);

const nm = fs.readdirSync(dirP)

nm.forEach((items)=>{

  fs.lstat(   items,(err, stats)=>{
    if(err){
      console.log(err)
    }else{
      console.log('Name,'+ items + ' size  '+ stats.size)
    }
  })
})

