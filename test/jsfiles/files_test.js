import {sortFilesInDir} from "../../src/jsfiles/sort.mjs";
import {evalFilesInDir} from "../../src/jsfiles/files.mjs";

const dirForTest = "/home/gen/projects/testfile";
const dirObject = evalFilesInDir(dirForTest);
sortFilesInDir(dirObject);

console.log(dirObject);