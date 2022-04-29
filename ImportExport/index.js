//youtube link-https://youtu.be/GtV-_NTlnLg
//./ we asses the file that we create
//const f ku likha kuki jo require likha oo kuch writeen to karega n fir oo value kidhar store karega isliye f me usko store kiya apan ne
const f = require("./oper");
const { add, subtract, name } = require("./oper"); //objeact destructuring

console.log(f.add(9, 4));
console.log(add(9, 4));
console.log(f.subtract(8, 4));
console.log(subtract(8, 4));
// console.log(f.prajwal(8));
console.log(name);
