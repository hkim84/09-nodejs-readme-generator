// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("../utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
// add Project Name, Description, Table of Contents, Installation, Usage, License, Contributing, Tests, Question, Github Username, and Email.
    {
        type:'input',
        name:'name',
        message:'What is title of your project?',
    },

    {
        type:'input',
        name:'description',
        message:'A description of your project your building?',
    },

    {
        type:'input',
        name:'table of contents',
        message:'escription of your project your building?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
          return console.log(err);
        }
        console.log("Readme.md has been created!");
      });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();