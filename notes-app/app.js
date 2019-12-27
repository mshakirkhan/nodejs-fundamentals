const yargs = require("yargs");
const notesFile = require("./notes.js");
// Crete a Note
yargs.command({
  command: "add",
  describe: "Add a new node",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "sting"
    }
  },
  handler: function(yargs) {
    notesFile.addNote(yargs.title, yargs.body);
  }
});

// Remove a Note

yargs.command({
  command: "remove",
  describe: "Remove node",
  builder: {
    title: {
      describe: "Remove a Note",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(yargs) {
    notesFile.removeNote(yargs.title);
  }
});

// Read of Node

yargs.command({
  command: "read",
  describe: "Read of yargs",
  handler: function() {
    console.log("Read of Nodes");
  }
});

// List of Node

yargs.command({
  command: "show",
  describe: "List of yargs",
  handler: function() {
    console.log("Show All Nodes");
  }
});

yargs.parse();
