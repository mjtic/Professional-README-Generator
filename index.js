// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkDown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description',
      },
      //table of conetents skip -due to need of static
      {
        type: 'input',
        message: 'What is the installation instruction of your project?',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'What is the usage information of your project?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'What is the contribution guideline of your project?',
        name: 'contributor',
      },
      {
        type: 'input',
        message: 'What is the test instrcutions of your project?',
        name: 'test',
      },
      {
        type: 'list',
        message: 'What is the license of your project?',
        name: 'license',
        choices:[
          "MIT License","Apache License 2.0","GNU General Public License v3.0"
        ]
      },
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response)=>{
        console.log(response);
    })
}

// Function call to initialize app
init();
