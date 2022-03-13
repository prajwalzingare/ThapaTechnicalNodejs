//1.create folder name name it thapa. we created it using mkdir thapa and create index.js in it

const fs = require("fs");
// fs.mkdir("thapa", (err) => {
//   console.log("folder created");
// });
//2.create file in it named bio.txt and data into it.
// fs.writeFile("bio.txt", "I am Thapa technical", (e) => {
//   console.log("file is created succesfully");
// });
//3.Add more data into the file at the end of the existing data
// fs.appendFile("bio.txt", "Today is nice day", (e) => {
//   //it is nescessry to pass parameter in arrow function with out it it is not going to work.
//   console.log("successfully append the data in file");
// });
//4.read the data without getting the buffer data at first .
//file encoding.
// fs.readFile("bio.txt", "utf-8", (err, data) => {
//   console.log("read successfully " + data);
// });
//5. Rename the file name to mybio.txt
// fs.rename("bio.txt", "mybio.txt", (err) => {
//   console.log("renamed");
// });
//6.delete the file and folder
// fs.unlink("mybio.txt", (err) => {
//   console.log("deleted");
// });

// fs.rmdir("thapa", (err) => {
//   console.log("deleted");
// });
