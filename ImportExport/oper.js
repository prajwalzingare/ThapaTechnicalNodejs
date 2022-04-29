//Link for detail info about import and export -https://www.geeksforgeeks.org/import-and-export-in-node-js/
//youtube link-https://youtu.be/GtV-_NTlnLg

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}
function prajwal(par) {
  console.log(par);
}
const name = "prajwal";
//module.export likhne par iska private scope public hogaya or isko hum kisi bhi file me use kar sakte hai so use it.
//if you want to pass multiple variable than pass it on curly braces.
module.exports = { add, subtract, prajwal, name };
