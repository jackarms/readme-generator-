const fs = require("fs");
const inquirer = require("inquirer");

const readMePage = (userObject) => {
  return ~
  #$(userObject.title);
};

var userInput;

const questions = function () {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project's title:",
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username:",
    },
    {
      type: "input",
      name: "description",
      message: "Provide some information about your project:",
    },
    {
      type: "input",
      name: "installation",
      message: "Provide information concerning installation instructions:",
    },
    {
      type: "input",
      name: "usage",
      message: "Provide information on how your project may be used:",
    },
  ]);
};
questions().then((answers) => {
  userInput = answers;
  console.log(userInput);
  writeFile();
});

function writeFile() {
  fs.writeFile("readme.md", readMePage(userInput), (err) => {
    if (err) throw err;
  });
}
