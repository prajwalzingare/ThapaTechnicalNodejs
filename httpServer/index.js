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
  if (req.url == "/") {
    res.end("hello from the other side");
  } else if (req.url === "/about") {
    res.end("hello from the About");
  } else if (req.url === "/Contact") {
    res.end("hello from the Contact");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" }); //it shows the typw of di=ocument in network tab section.
    res.end("<h1>404 error pages not found</h1> "); //it print the massage in heading.
  }
  // console.log(req.url); //what it print is that it prints in console that how many pages we search my putting / in front of url.
});
server.listen(8000, "localhost", () => {
  console.log("listening to the port 8000");
});
