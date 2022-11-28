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
// function writeToFile(fileName, data) {
//     fs.writeFile(`${fileName}.md`, generateMarkdown(data), function (err) {
//         if (err) {
//           return console.log(err);
//         }
//         console.log("Readme.md has been created!");
//       });
// };
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, (err) => {
          console.log(err)
        }
  )
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        console.log(response)
        const readMe = generateMarkdown(response)
        writeToFile('README.md', readMe)
        console.log('readme.md has been created')
    });
};

// Function call to initialize app
init();