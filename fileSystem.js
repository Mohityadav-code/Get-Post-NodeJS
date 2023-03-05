const fs = require("fs");

fs.open("file name", "w", (err, file) => {
  console.log(file);
});
fs.readFile("fileName", (err, data) => {
  if (err) {
    console.log("There is an error");
  } else {
    console.log(data);
  }
});

fs.appendFile("filename", "content", (err) => {
  if (err) {
    console.log("There is an error");
  }
});

fs.writeFile("filename", "content", (err) => {
  if (err) {
    console.log("There is an error");
  }
});
