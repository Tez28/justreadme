//Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require() = require('./utils/generateMarkdown.js');
const fs = require('fs');
//Create an array of questions for user input

const promptQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username? (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'poject',
            message: 'What is your project name (Required)',
            validate: projectInput => {
                if (projectInput) {
                    return true;
                } else {
                    console.log('Please enter a name for your project');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a project description!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message:'What kind of license should your project have?',
            choices: ['apache', 'boost', 'ISC', 'MIT', 'no license'],
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log('Please select and option');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'What command should be run to install dependencies? (Required)',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please provide a response!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions on how users will use your project. (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please provide instructions for usage!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'What command should be run to test the application? (Required)',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please provide a response!');
                    return false;
                }
            }
        },
        {
        type: 'confirm',
        name: 'contribute',
        message: 'How should users contribute',
        default: true,
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about contributing:',
            when: ({confirmContribute}) => {
                if(confirmContribute) {
                    return true;
                } else {
                    return false;
                }
            },
            validate: contributeInput => {
                if (contributeInput) {
                    return true;
                } else {
                    console.log('Please provide contribution guidelines!');
                    return false;
                } 
            } 
        }
    ]);
};


// TODO: Create a function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            //if errors reject
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
}

//function to initialize app
const init = () => {
    return promptQuestions();
}

// Function call to initialize app
init()
.then(data => { writeToFile(data)
});
