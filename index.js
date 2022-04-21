const { truncate, write } = require('fs');
const inquirer = require('inquirer');
const { type } = require('os');
const generateMarkdown = require("./utils/generateMarkdown.js");
const writeFile = require('./utils/generateFile.js');


const promptQuestions = () => {
    return inquirer.prompt([
    {
        type: 'input', 
        message: 'What is the title of your project?',
        name: 'title',
        validate: inputTitle => {
            if (inputTitle) {
                return true;
            } else {
                console.log('Please enter a valid title for your project:');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Please provide a short description of your project:',
        name: 'description',
        validate: projectDescription => {
            if (projectDescription) {
                return true;
            } else {
                console.log('Please enter a valid project description:');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'installConfirmation',
        message: 'Would you like to include speciial installation instructions for your project?',
        default: true
    },
    {
        type: 'input',
        message: 'Please provide a installation instructions for your project:',
        name: 'installation',
        when: ({ installConfirmation }) => {
            if (installConfirmation) {
                return true
            } else {
                return false
            }
        }
    },
    {
        type: 'input',
        message: 'Please provide a usage information for your project:',
        name: 'usage',
        validate: usageInformation => {
            if (usageInformation) {
                return true;
            } else {
                console.log('Please enter valid usage information for your project:');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'contributeConfirmation',
        message: 'Would you like your project be open to future contributions?',
        default: true
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter the contribution guidlines for your project:',
        when: ({ contributeConfirmation }) => {
            if (contributeConfirmation) {
                return true
            } else {
                return false
            }
        }
    },
    {
        type: 'confirm',
        name: 'testingConfirmation',
        message: 'Do you want to provide testing instructions for your project?',
        default: true
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Please enter testing instructions for users:',
        when: ({ testingConfirmation }) => {
            if (testingConfirmation) {
                return true;
            } else {
                return false
            }
        }
    },
    {
        type: 'list',
        name: 'licenses',
        choices: ['MIT', 'GNU', 'Apache', 'BSD', 'ISC']
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub username?',
        validate: gitName => {
            if (gitName) {
                return true;
            } else {
                console.log('Please enter a valid GitHub username.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'githubLink',
        message: 'Please provide a link to your GitHub profile:',
        validate: inputLink => {
            if (inputLink) {
                return true;
            } else {
                console.log('Please enter a valid link to you GitHub profile');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: inputEmail => {
            if (inputEmail) {
                return true;
            } else {
                console.log('Please enter a valid email address.');
                return false;
            }
        }
    },
    ])
    .then(data => {
        return generateMarkdown(data);
    })
    .then(pageMarkdown => {
        return writeFile(pageMarkdown);
    })
    .catch(err => {
        console.log(err);
    })
}
function init() {
    promptQuestions()
}

init();
