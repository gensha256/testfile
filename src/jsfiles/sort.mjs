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
    return dirObject.files;
}

export {sortFilesInDir};
