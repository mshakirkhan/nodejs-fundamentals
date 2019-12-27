const fs = require("fs");

const addNote = function(title, body) {
  const notes = getNote();
  notes.push({
    title: title,
    body: body
  });
  saveNotes(notes);
};

const saveNotes = function(notes) {
  const datajson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", datajson);
  console.log("File Save");
};

const getNote = function() {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataString = dataBuffer.toString();
    const dataJson = JSON.parse(dataString);
    return dataJson;
  } catch {
    return [];
  }
};

module.exports = {
  addNote: addNote
};
