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
        name:'installation',
        message:'How to install required software to run program.',
    },

    {
        type:'input',
        name:'usage',
        message:'what is the use of this project',
    },

    {
        type:'checkbox',
        name:'license',
        message:'Select a license this project uses?',
        choices: [
            'Apache 2.0',
            'GNU GPLv2',
            'GNU AGPLv3',
            'MIT',
            'Mozilla 2.0', 
            'None',
        ],
    },

    {
        type:'input',
        name:'contributing',
        message:'How can others contribute to this project',
    },

    {
        type:'input',
        name:'test',
        message:'Instruction of how to test this program',
    },

    {
        type:'input',
        name:'userName',
        message:'Enter your Github user name?',
    },

    {
        type:'input',
        name:'email',
        message:'Enter your email address',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, generateMarkdown(data), function (err) {
        if (err) {
          return console.log(err);
        }
        console.log("Readme.md has been created!");
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data){
        writeToFile('README', data)
    })
}

// Function call to initialize app
init();