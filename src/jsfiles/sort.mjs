import {FILETYPE} from "./files.mjs";

function isSorted(dirObject) {

    for (let pointer = 1; pointer < dirObject.files.length - 1; pointer++) {

        let element = dirObject.files[pointer];
        let previous = dirObject.files[pointer - 1];
        let next = dirObject.files[pointer + 1];

        if (element.size < previous.size || element.size > next.size) {
            return false;
        }
    }

    return true;
}


function sortFilesInDir(dirObject) {


    let sort = isSorted(dirObject);

    while (!sort) {

        for (let pointer = 0; pointer < dirObject.files.length - 1; pointer++) {

            let current = dirObject.files[pointer];
            let next = dirObject.files[pointer + 1];

            if (current.size > next.size) {

                dirObject.files[pointer] = next;
                dirObject.files[pointer + 1] = current;
            }
        }
        sort = isSorted(dirObject);
    }

    for (let pointer = 0; pointer < dirObject.files.length; pointer++) {

        if (dirObject.files[pointer].type === FILETYPE.DIR && dirObject.files[pointer].files.length > 1) {

            sortFilesInDir(dirObject.files[pointer]);
        }
    }


    for (let point = 0; point < dirObject.files.length; point++) {

        for (let pointer = 0; pointer < dirObject.files.length - 1 - point; pointer++) {

            let curr = dirObject.files[pointer];
            let next = dirObject.files[pointer + 1];

            if (curr.type > next.type) {

                dirObject.files[pointer] = next;
                dirObject.files[pointer + 1] = curr;
            }
        }
    }
}

export {sortFilesInDir};
