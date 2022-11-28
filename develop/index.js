// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("../utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
// add Project Name, Description, Table of Contents, Installation, Usage, License, Contributing, Tests, Question, Github Username, and Email.
    {
        type:'input',
        name:'title',
        message:'What is title of your project?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a title!');
                return false;
            }
        }
    },

    {
        type:'input',
        name:'description',
        message:'A decription of your project?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a description!');
                return false;
            }
        }   
    },

    {
        type:'input',
        name:'installation',
        message:'Required installation to run program',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter info on installation!');
                return false;
            }
        }  

    },

    {
        type:'input',
        name:'usage',
        message:'what is the use of this project',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter info on usage of project!');
                return false;
            }
        }  
    },

    {
        type:'checkbox',
        name:'license',
        message:'Select a license this project uses?',
        choices: [
            // 'Apache-2.0',
            // 'GNU GPL-v2',
            // 'GNU AGPL-v3',
            // 'MIT',
            // 'Mozilla-2.0', 
            // 'None',
            'mit', 
            'isc', 
            'gpl-3.0', 
            'apache-2.0',
            'None',
        ],
    },

    {
        type:'input',
        name:'contributing',
        message:'How can others contribute to this project',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter how to contribue!');
                return false;
            }
        } 
    },

    {
        type:'input',
        name:'tests',
        message:'Instruction of how to test this program',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter info on testing!');
                return false;
            }
        } 
    },

    {
        type:'input',
        name:'githubUsername',
        message:'Enter your Github user name?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter Github username!');
                return false;
            }
        } 
    },

    {
        type:'input',
        name:'emailAddress',
        message:'Enter your email address',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        } 
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, generateMarkdown(data), (err) => {
        if (err) {
            console.log("There is an error");
            throw err;
        };
        console.log('README has been created');
    });
}



// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((theAnswers) => {
        const {ReadMe} = theAnswers;
        writeToFile('ReadMe',theAnswers);
    });
}


// Function call to initialize app
init();