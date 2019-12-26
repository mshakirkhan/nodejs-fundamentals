const yargs = require("yargs");

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
    console.log("Title: " + yargs.title);
    console.log("Body: " + yargs.body);
  }
});

// Remove a Note

yargs.command({
  command: "remove",
  describe: "Remove node",
  handler: function() {
    console.log("Add a new node");
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
