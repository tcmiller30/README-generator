// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title', 
        message: 'What is your application called?',
    },
    {
        type: 'input',
        message: 'Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Explain how the user should interact with your application.',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Select a license for your application.',
        choices:['MIT License', 'GNU General Public License v3.0', 'Apache License 2.0','Eclipse Public License 2.0'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Provide Contribution Guidelines for future developers.',
        name: 'contributions',
    },
    {
        type: 'input',
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
        name: 'testIns',
    },

];

inquirer
    .prompt(questions)
        .then((data) => {
            console.log(data)
            const fileName = 'README.md'
            const readMeTemplate =
                `# ${data.title}

                ## Description
                
                ${data.description}
                
                ## Table of Contents (Optional)
                
                If your README is long, add a table of contents to make it easy for users to find what they need.
                
                - [Installation](#installation)
                - [Usage](#usage)
                - [License](#license)
                - [Contributions](#contributions)
                - [Tests](#tests)
                - [Questions](#questions)
                
                ## Installation
                
                ${data.installation}
                
                ## Usage
                
                ${data.usage}
                
                ## License
                
                ${data.license}
        
                ## Badges
                
                ${data.badges}
                
                ## How to Contribute
                
                ${data.contributions}
                
                ## Tests

                ${data.testIns}

                ## Questions

                If you have any questions, comments, or concerns contact me using the following links

                GitHub Username:
                Email:
                `;

                console.log(readMeTemplate)
                // writeToFile(fileName, readMeTemplate);
            })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
//         fs.writeFile(fileName, data), (err) =>
//             err ? console.log(err) : console.log('Success! Created README.md.')
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
