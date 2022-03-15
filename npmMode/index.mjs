//npm i chalk it will install all packages or dependacies form chalk module to your project
// const chalk = require("chalk");//domt use this because typescript is now outdated so now everyone should use this and you have to change the name from index.js to index.mjs
//link to visit-https://www.npmjs.com/package/chalk
import chalk from "chalk";
console.log(chalk.blue.italic("hello world"));
console.log(chalk.blue.underline("hello world"));
console.log(chalk.blue.inverse("hello world"));
console.log(chalk.blue("Hello") + " World" + chalk.red("!"));
console.log(chalk.blue.bgRed.bold("Hello world!"));
console.log(`
CPU: ${chalk.red("90%")}
RAM: ${chalk.green("40%")}
DISK: ${chalk.yellow("70%")}
`);
//in es6 we import validator like this so import it and use it properly.
import validator from "validator";
const res = validator.isEmail("prajwal@gmail.com");
//true hoga to green colour hoga isliye humne chalk ka use karke usko green me print kavaya
//we use hear conditional operator if email raha to green me true print karega nahi to red me false print karega.
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
