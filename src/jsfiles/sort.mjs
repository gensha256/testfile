import {dirInfo} from "../../test/test.mjs";
import fs from 'fs'

function isSorted( dir ) {
    for (let pointer = 1; pointer < dir.length - 1; pointer++) {

        let element = dir.files[pointer];
        let previous = dir.files[pointer - 1];
        let next = dir.files[pointer + 1];

        if (element < previous && element > next) {
            return false;
        }
    }

    return true;
}


function sortFilesInDir(dir) {

    let sort = isSorted(dir);

    while (!sort) {

        for (let pointer = 0; pointer < dir.files.length; pointer++) {

            let current = dir.files[pointer];
            let next = dir.files[pointer + 1];

            if (current.size > next.size) {
                dir.files[pointer] = next;
                dir.files[pointer + 1] = current;
            }
        }
        sort = isSorted(dir);
    }
}

sortFilesInDir(dirInfo);
