// TODO: Include packages needed for this application
const fs = require ("fs")
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const markdown = require ("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    message: "What is the title of your project?",
    name: 'projecttitle',

},
{
    type: 'input',
    message: "Please provide a description of your project.",
    name: 'description',

}
{
    type: 'input',
    message: 'Please provide any installation instructions for your project.',
    name: 'installation',
    default: 'npm i',
    
},
{
    type: 'input',
    message: 'Please provide usage information for project.',
    name: 'usage',
},
{
    type: 'input',
    message: 'Please provide any contributors to the project.',
    name: 'contributors',
},
{
    type: 'input',
    message: 'Please provide any test instructions for the project.',
    name: 'test',
},
{
    type: 'list',
    message: 'Please choose any licenses you used',
    choices:['GNU AGPLv3', 'GNU GPLv3',
    'GNU LGPLv3', 'Mozilla Public License 2.0',
    'Apache License 2.0', 'MIT License', 'Boost Software License 1.0',
    'The Unlicense'],
    name: 'license',
},
{
    type: 'input',
    message: 'What is your name?',
    name: 'name',
},
{
    type: 'input',
    message: 'What is your github username?',
    name: 'github',
},
{
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
},
{
    type: 'input',
    message: 'Please provide deployment url.',
    name: 'deploymenturl',
},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile (fileName, generateMarkdown(data), (err) =>
    err ? console.err(err) : console.log('Success!!')
    )
};

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions).then((data) => {
        writeToFile('README.md', data)
    })
}

// Function call to initialize app
init();
