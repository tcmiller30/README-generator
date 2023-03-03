// Node Module requirements
const fs = require('fs');
const inquirer = require('inquirer');

// Array of questions for use by inquirer
const questions = [
    {
        type: 'input',
        name: 'title', 
        message: 'What is your application called?',
    },
    {
        type: 'input',
        message: 'Provide a short description explaining the what, why, and how of your project.',
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
        choices:['MIT License', 'GNU General Public License v3.0', 'Apache License 2.0'],
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
    {
        type: 'input',
        message: 'Provide your GitHub Username',
        name: 'gitHub'
    },
    {
        type: 'input',
        message: 'Enter a Contact Email',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Enter the name of the developer.',
        name: 'devName'
    },
    {
        type: 'input',
        message: 'What is the current year?',
        name: 'year'
    }

];
// Inquirer Prompt initializer
inquirer
    .prompt(questions)
        .then((data) => {
            let licenseTxt = data.license;
            let licenseBadge = licenseTxt;

// License Notice Templates for README. Maligned with code to prevent formatting errors in implementation
const mitLicense = `

    MIT License

    Copyright (c) ${data.year} ${data.devName}

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

`

const gnuLicense = ` 

    GNU General Public License v3.0

    Copyright (c) ${data.year} ${data.devName}

    This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 
    You should have received a copy of the GNU General Public License along with this program. If not, see (https://www.gnu.org/licenses/).`;

const apacheLicense = `

    Apache License 2.0

    Copyright (c) ${data.year} ${data.devName}

    Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

    `
            // swithces license cases depending on which license the user chose to generate
            switch (licenseBadge, licenseTxt){
                case 'MIT License':{
                    licenseBadge =  `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
                    licenseTxt = mitLicense;
                    break;                   
                }
                case 'GNU General Public License v3.0': {
                    licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
                    licenseTxt = gnuLicense
                    break;                     
                }
                case 'Apache License 2.0': {
                    licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
                    licenseTxt = apacheLicense
                    break; 
                }
            }
// README.md Template for use in file generation
            const generateReadMe = `
# ${data.title}
${licenseBadge}

## Description

${data.description}

## Table of Contents

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

${licenseTxt}

## How to Contribute

${data.contributions}

## Tests

${data.testIns}

## Questions

If you have any questions, comments, or concerns, contact the developer using the email provided below

Email: [${data.email}](mailto:${data.email});

Check out the developer's other projects on GitHub by cicking the link below

GitHub Username: [${data.gitHub}](https://github.com/${data.gitHub})
`;
        // Sends generatedREADME to write function
        writeToFile(generateReadMe);
    })

    // Writes new README file using the content created by inquirer
function writeToFile(template) {
    const readMeContent = template;
    fs.writeFile('README.md', readMeContent, (err) => 
    err ? console.log(err) : console.log('Successfully created README.md!'))
    }



