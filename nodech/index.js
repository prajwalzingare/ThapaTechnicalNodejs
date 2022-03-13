//Link to visit for video information-https://www.youtube.com/watch?v=0F-nudTm5EU
//We created folder name nodech
//In that we take fs build in module
//Now we created Thapa.txt file using writefilesync module.
//Now we append the data using appendfilesync at the existing data.
//Now we console log the Data using readfilesync.
//Now we rename the file using rename sync.In that what we have to do that first give old file name and than new file name.
//we deleted the file using unlink muodule in fs.

const fs = require("fs");
//Before making file first make folder of name Thapa
//fs.mkdirSync("Thapa"); it will create your folder
fs.writeFileSync("Thapa.txt", "Thapatechnical is best channal");
fs.appendFileSync("Thapa.txt", "Must followe it");

console.log(fs.readFileSync("Thapa.txt", "utf-8"));
fs.renameSync("Thapa.txt", "Thapa12.txt");
fs.unlinkSync("Thapa12.txt", function (err) {
  if (err) {
    console.log("error in delete");
  } else {
    console.log("Sucessfully deleted");
  }
});
//if you want to delete folder than use
//fs.rmdirSync("thapa");
