//link from w3 school for more info - https://www.w3schools.com/nodejs/nodejs_http.asp

// var http = require("http");

// //create a server object:
// http
//   .createServer(function (req, res) {
//     res.write("Hello World!"); //write a response to the client
//     res.end(); //end the response
//   })
//   .listen(8080); //the server object listens on port 8080

//From Thapa technical
const http = require("http");
//the http.createserver() method includes request and response parameters which is supplied by node js
const server = http.createServer((req, res) => {
  res.end("hello from the other side");
});
server.listen(8000, "localhost", () => {
  console.log("listening to the port 8000");
});
