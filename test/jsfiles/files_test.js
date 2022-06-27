import {sortFilesInDir} from "../../src/jsfiles/sort.mjs";
import {evalFilesInDir} from "../../src/jsfiles/files.mjs";

const dirForTest = "/home/gen/projects/testfile";
const sorted = sortFilesInDir(evalFilesInDir(dirForTest));

console.log(sorted);