const fs = require("fs");
const chalk = require("chalk");

// Add Note
const addNote = function(title, body) {
  const notes = getNote();
  const duplicate = notes.filter(function(note) {
    return note.title === title;
  });

  if (duplicate.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
  } else {
    console.log(chalk.bgRed("Title Already Exist"));
  }
};

// Remove Note

const removeNote = function(title) {
  const notes = getNote();
  const notesTokeep = notes.filter(function(note) {
    return note.title !== title;
  });
  saveNotes(notesTokeep);
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
  addNote: addNote,
  removeNote: removeNote
};
