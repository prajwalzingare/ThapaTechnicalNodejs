//links for more detail-https://www.geeksforgeeks.org/node-js-fs-appendfilesync-function/

//REPL
//1-js expression
//2-use variables
//3-Multiline code / loops
//4-use(_)to get the last result
//5-we can use editor mode
// const name = "prajwal";
// console.log(name);

//import the file system module
const fs = require("fs");
//creating a new file
// fs.writeFileSync("read.txt", "i am prajwal zingare"); //isme pahle file nahi hogi to file create hogi uske bad jo data humne likha hai oo us file me add ho jayega.
//and second time jub wahi name se file create karoge to fir usmeka data replace hoga sirf.
// fs.writeFileSync(
//   "read.txt",
//   "i am prajwal zingare i am satvic lifestyle follower"
// );

//if you want to console the data in txt file type this command.
// console.log(
//   "File Contents of file before append:",
//   fs.readFileSync("read.txt", "utf8")
// );

//now i want to append some data in given file so how can i append this data.for this we have command in node js.
//W flag replace the all data from the file and add new one
// fs.appendFileSync("read.txt", "Do you wana follow the same", {
//   encoding: "utf8",
//   flag: "w",
// });
//Agin console for new data
// console.log(
//   "\nFile Contents of file before append:",
//   fs.readFileSync("read.txt", "utf8")
// );
const prajwal = fs.readFileSync("readwrite.txt", "utf-8");

//node.js includes an aditional data type called Buffer
//(not availaible in browesers js)
//Buffer is mainly used to store binary data.
//while reading from a file or recieving packets over the networks.
console.log(prajwal);

//how to rename the file using command in node js.
// fs.renameSync("read.txt", "readwrite.txt");
