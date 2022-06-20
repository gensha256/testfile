import fs from "fs";

import { evalFilesInDir, TYPE_DIR, TYPE_FILE } from "../src/jsfiles/index.mjs";

const dirForTest = "/home/gen/projects/testfile/tmp/";

if (fs.existsSync(dirForTest)) {
  fs.rmSync(dirForTest, { recursive: true, force: true });
}

if (fs.existsSync(dirForTest)) {
  throw new Error("tmp dir not deleted.")
}

fs.mkdir(dirForTest, (err) => {
  if (err) {
    throw err;
  } else
    console.log("Directory  created");
});

fs.writeFileSync(dirForTest + "file1.txt", "Testing new function ", (err) => {
  if (err) {
    throw err;
  }
  console.log("File created successfully");
});

fs.writeFileSync(dirForTest + "file2.txt", "Hello", (err) => {
  if (err) {
    throw err;
  }
  console.log("File created successfully");
});

fs.writeFileSync(dirForTest + "file3.txt", "Created object", (err) => {
  if (err) {
    throw err;
  }
  console.log("File created successfully");
});

fs.mkdir(dirForTest + "dir1", (err) => {
  if (err) {
    throw err;
  } else {
    console.log("New directory created");
  }
});

const files = evalFilesInDir(dirForTest);

console.log(files)