const fs = require("fs");

const { evalFilesInDir } = require("../files/file");

const dirForTest = "/home/gen/projects/testfile/tmp";

if (fs.existsSync(dirForTest)) {

  fs.rmdir(dirForTest, (err) => {
    if (err) {
      throw err;
    }
  });
}


fs.mkdir("/home/gen/projects/testfile/test", (err) => {
  if (err) {
    throw err;
  } else
    console.log("Directory  created");
});

fs.writeFileSync("testing.txt", "", (err) => {
  if (err) {
    throw err;
  }
  console.log("File created successfully");
});

fs.writeFileSync("main.js", "", (err) => {
  if (err) {
    throw err;
  }
  console.log("File created successfully");
});

fs.writeFileSync("app.css", "", (err) => {
  if (err) {
    throw err;
  }
  console.log("File created successfully");
});

fs.writeFileSync("index.html", "", (err) => {
  if (err) {
    throw err;
  }
  console.log("File created successfully");
});

fs.mkdir("Files", (err) => {
  if (err) {
    throw err;
  } else {
    console.log("New directory created");
  }
});

evalFilesInDir(dirForTest);