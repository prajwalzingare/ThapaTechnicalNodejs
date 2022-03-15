//() This is called grouping operator
//to learn more about iife in modern javascript go to link-https://www.youtube.com/watch?v=V9sKRD5V1As
//To learn module export from documentation-https://nodejs.org/api/modules.html#modules_the_module_wrapper

//iife ke andar likha hua code hamesh private rahta hai uska global scope nahi rahta.
//iife is made only for making data private writing data into paranthisis
//node js me jo bhi data likhte hai oo private hota hai.because of paranthisis i.e iife(imediatly invoked function expression)
//importing the chalk
// import chalk from "chalk";//why it is not executing because we have to install node module for execution so do npm i
// const chalk = require("chalk");
// (function () {
//   const name = "'prajwal";
//   console.log(name);
// });
//Basically kya hota hai jo bhi run hoyega is fromat me run hoega jo niche diya hua hai.
(function (exports, require, module, __filename, __dirname) {
  // Module code actually lives in here
});

//bonus
//node me jitna bhi data hai oo private hai naki global scope hota hai lets understand more about it.

(name = () => {
  var name = "sami";
  console.log(name);
})();
// console.log(chalk.blue("Hello world!"));
// console.log(chalk.blue("name"));
console.log(__dirname);
