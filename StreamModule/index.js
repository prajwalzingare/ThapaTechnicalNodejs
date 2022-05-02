//link for more info -https://youtu.be/ev5pgydOhT8
const fs = require("fs");
const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
  //1st way
  // var fs = require("fs");
  // fs.readFile("input.txt", (err, data) => {
  //   if (err) return console.log(err);
  //   // console.log(data.toString()); //form coverting buffer data to string.
  //   res.end(data);
  // });
  //2nd way
  //Reading from stream
  //create readable stream
  //Handle stream events -data ,end,error.
  // const rstream = fs.createReadStream("input.txt");
  // rstream.on("data", (chunkdata) => {
  //   res.write(chunkdata);
  // });
  // rstream.on("end", () => {
  //   res.end();
  // });
  // rstream.on("error", (err) => {
  //   console.log(err);
  //   res.end("err");
  // });
  //3rd way
  const rstream = fs.createReadStream("input.txt");
  rstream.pipe(res);
  console.log(res);
});
server.listen(8000, "localhost", () => {
  console.log("success");
});
