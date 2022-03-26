// Obtain dir name(dir path)
//validate if this is dir
// return all file names in this dir

const fs = require('fs');
const path = require('path');

function evalFilesInDir(dirPath) {

    if(fs.lstatSync(dirPath).isDirectory()){
    console.log('It is directory')
    }else {
        console.log('error you used the file')
        return;
    }
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            console.log(err);
            return;
        }
        for (i = 0; i < files.length; i++) {
            console.log(files[i]);
        }
	});
}
evalFilesInDir('/home/gen/projects/testfile/src/files/files.js');

