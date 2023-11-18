const express = require("express");
const app = express()
const PORT = 3000
let fs = require("fs");
 
app.get("/", (req, res) => {
    fetch('https://fuelo.net/prices/date/2023-11-14?lang=en')
  .then(response => response.text())
  .then(data => {
    console.log(data)
      saveToFile(data , data.js )
    // do something with the data
    res.send(data)
  });
})

function saveToFile(object, fileName) { 
  return new Promise(async (resolve, reject) => { 
    try {
      let logStream = fs.createWriteStream(fileName || "Transactions.json", {
        flags: "a",
      });
      logStream.write(JSON.stringify(object)); 
      logStream.end("\n");
      logStream.on("finish", resolve);
    } catch (error) {
      console.log(error); 
      reject();
    }
  }); 
}
app.listen( PORT, ()=> {
  console.log(`bot running on ${PORT}`)
})