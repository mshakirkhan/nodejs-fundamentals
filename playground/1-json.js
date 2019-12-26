const fs = require("fs");
const book = {
  title: "Title",
  author: "Shakir"
};

// Convert into Json
// const jsonString = JSON.stringify(book);
// fs.writeFileSync("1-json.json", jsonString);
// console.log(jsonString);

// Gettng Data

const databuffer = fs.readFileSync("1-json.json");
const dataJson = databuffer.toString();
const dataObj = JSON.parse(dataJson);
console.log(dataObj);
