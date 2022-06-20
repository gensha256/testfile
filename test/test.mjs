import { evalFilesInDir} from "../src/jsfiles/index.mjs";

const dirForTest = "/home/gen/projects/testfile";

const files = evalFilesInDir(dirForTest);

console.log(files)