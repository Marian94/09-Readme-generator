// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateREADME = ({
  title,
  description,
  install,
  usage,
  contribution,
  test,
  emailUser,
  userGithub,
}) =>
  `
# ${title}

## Project Description

${description}

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${install}

## Usage

${usage}

## Contributing

${contribution}

## Tests

${test}

## Questions

If you have any comments or question, please contact me by:
${emailUser}
${userGithub}
`;

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of the project?",
  },
  {
    type: "input",
    name: "description",
    message: "Can you provided a brief description of the project?",
  },
  {
    type: "input",
    name: "install",
    message: "What is the installation steps for the project?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the usage information?",
  },
  {
    type: "input",
    name: "contribution",
    message: "What are the  contribution guidelines?",
  },
  {
    type: "input",
    name: "test",
    message: "What are the test instructions?",
  },
  {
    type: "input",
    message: "Share your email",
    name: "emailUser",
  },
  {
    type: "input",
    message: "Share your Github profile (URL)",
    name: "userGithub",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Successfully created README.md!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeFileContent = generateREADME(answers);
    writeToFile("README.md", readmeFileContent);
  });
}

// Function call to initialize app
init();
