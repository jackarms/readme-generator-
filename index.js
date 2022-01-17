const fs = require("fs");
const inquirer = require("inquirer");

const readMePage = (userObject) => {
  return `
  # ${userObject.title}

  ## Description
  ${userObject.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## [Installation](#installation)
  ${userObject.installation}

  ## [Usage](#usage)
  ${userObject.usage}

  ## [Credits](#credits)
  ${userObject.credit}

  ## [License](#license)
  ${userObject.license}

  ## Questions
  If there are any further questions:
  email: ${userObject.email}
  GitHub: ${userObject.github}


   `;
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
    {
      type: "input",
      name: "license",
      message: "Please enter license used:",
    },
    {
      type: "input",
      name: "credit",
      message: "List your collaborators:",
    },
    {
      type: "input",
      name: "github",
      message: "Please enter your GitHub username:",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email address:",
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
