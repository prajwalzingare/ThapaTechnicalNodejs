const fs = require("fs");
//what we have to do for creating new file not new folder we have to follow the fs command.

//In node there is two type to do task async or sync.
//So Now we will learn async type to create each and everything.
//When you create file using async you have to use callback function otherwise it is not goindg to create file.
//When you work on Async program you should call callback function.
//What is callback when you pass functionas argument is called callback function.
// fs.writeFile("read.txt", "Today is awesome day", (err) => {
//   console.log("Files is created");
//   console.log(err);
// });

//we pass them a function as an argument -a callback -
//that gets called when that task completes.
//The callback has anargument that tells you whether
//the operation completed sucessfully.
//Now we need to say what to do when fs.writefile
//has completed (even if it is nothing),and start
//checking the errors.

//now we have to add data in existing file.
// fs.appendFile(
//   "read.txt",
//   "Dont you think so that today is awsome day.",
//   (err) => {
//     console.log("sucesfully add the data");
//     console.log(err);
//   }
// );
//Now we will read the data in async.
//During read we have to pass "Two" Argument to read data.

fs.readFile("read.txt", "utf-8", (err, data) => {
  console.log("sucesfully read the data" + data);
});
