// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkDown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
    validate: userInput => {
        if(userInput){
            return true;
        }else{
            console.log("please enter the title of your project!");
            return false;
        }
    }
  },
  {
    type: "input",
    message:
      "What is the description of your project? Motivation? Why did you build this project? What problem does it solve? What did you learn?",
    name: "description",
    validate: userInput => {
        if(userInput){
            return true;
        }else{
            console.log("please enter the description of your project!");
            return false;
        }
    }
  },
  //table of conetents skip -due to need of static
  {
    type: "input",
    message: "What is the installation instruction of your project?",
    name: "installation",
    validate: userInput => {
        if(userInput){
            return true;
        }else{
            console.log("please enter the installation instruction of your project!");
            return false;
        }
    }    
  },
  {
    type: "input",
    message: "What is the usage information of your project?",
    name: "usage",
    validate: userInput => {
        if(userInput){
            return true;
        }else{
            console.log("please enter the usage information of your project!");
            return false;
        }
    }   
  },
  {
    type: "input",
    message: "What is the contribution guideline of your project?",
    name: "contributor",
  },
  {
    type: "input",
    message: "What is the test instructions of your project?",
    name: "test",
  },
  {
    type: "list",
    message: "What is the license of your project?",
    name: "license",
    choices: [
      "MIT License",
      "Apache License 2.0",
      "GNU General Public License v3.0",
    ],
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
    validate: userInput => {
        if(userInput){
            return true;
        }else{
            console.log("please enter the GitHub username of your project!");
            return false;
        }
    }   
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
    validate: userInput => {
        if(userInput){
            return true;
        }else{
            console.log("please enter the email address of your project!");
            return false;
        }
    }   
  },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data, error) {
//     fs.writeFile("README.md", JSON.stringify(data) )
    
// // }
// const writeToFile = fs.writeFile ("README.md", questions =>{

// })


// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
  });
}

// Function call to initialize app
init();
