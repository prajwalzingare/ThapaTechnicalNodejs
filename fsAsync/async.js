const fs = require("fs");
//sync me kya hpga step eise exicution 1st data execute hoga than clg hoga kuki synchronus hai isliye
// const data = fs.readFileSync("read.txt", "utf-8");
// console.log(data);
//async me kya hoga pahle bahar ka data execute hoga fir andr ka kuki oo waiting par hai isliye.
fs.readFile("read.txt", "utf-8", (err, data) => {
  console.log(data);
});
console.log("Sucesfully read the data");
