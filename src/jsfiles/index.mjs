import fs from "fs";
import path from "path";

const TYPE_FILE = "file";
const TYPE_DIR = "dir";

function evalFilesInDir(dirPath) {

    if (fs.lstatSync(dirPath).isFile()) {
        throw new Error("dirPath param is not directory.");
    }

    let resultFile = {
        name: path.basename(dirPath),
        path: dirPath,
        type: TYPE_DIR,
        size: 0,
        sySize: fs.statSync(dirPath).size,
        files: []
    };

    const files = fs.readdirSync(dirPath);

    for (let i = 0; i < files.length; i++) {


        let itemFile = {
            name: files[i],
            path: dirPath + '/' + files[i],
        };

        if (fs.lstatSync(itemFile.path).isFile() || fs.lstatSync(itemFile.path).isSymbolicLink()) {
            itemFile.type = TYPE_FILE;
            itemFile.size = fs.statSync(itemFile.path).size;
        } else {
            itemFile = evalFilesInDir(itemFile.path)
        }
        resultFile.size += itemFile.size;

        resultFile.files.push(itemFile);
    }

    return resultFile;
}

export {evalFilesInDir, TYPE_DIR, TYPE_FILE};
