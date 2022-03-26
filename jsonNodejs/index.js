const { json } = require("stream/consumers");
const fs = require("fs");
const bioData = {
  name: "prajwal",
  age: 23,
  channal: "satvic life",
};
// console.log(bioData);
// const myjson = JSON.stringify(bioData); //jub object ko stringify me convert karna hai tub json. stringify use karna hai.
// console.log(myjson); //object to json
// const myparse = JSON.parse(myjson);
// console.log(myparse); //json to object this method is use for this.
// console.log(myparse.name);
// 1.convert to json
const jsonData = JSON.stringify(bioData);
// 2.dusere file me add karna hai. kaise karenge yadd hai writefile mehtod which add new file and data in it we learn this in file module system.
// fs.writeFile("json1.json", jsonData, () => {
//   console.log("done");
// });
// 3. readfile
fs.readFile("json1.json", "utf-8", (err, data) => {
  console.log("Sucesssfullly read the data");
  console.log(data);
  const original = JSON.parse(data);
  console.log(original);
});
// 4. Again convert back to js obj
const jsonparse = JSON.parse(jsonData);
console.log(jsonparse);
