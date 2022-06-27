import {evalFilesInDir, TYPE_DIR, TYPE_FILE} from "../src/jsfiles/files.mjs";

const dirForTest = "/home/gen/projects/testgit";

const dirInfo = evalFilesInDir(dirForTest);

export {dirInfo}

console.log(dirInfo)

const mapExample = {
    "name":"Max",
    "age":20
}

console.log(mapExample);

const objectExample = new Object({
    name : "Anna",
    age : 30
})

console.log(objectExample);