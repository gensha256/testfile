import {evalFilesInDir, TYPE_DIR, TYPE_FILE} from "../src/jsfiles/index.mjs";
import {request} from "express";

const dirForTest = "/home/gen/projects";

const dirInfo = evalFilesInDir(dirForTest);

export {dirInfo}

console.log(dirInfo)

