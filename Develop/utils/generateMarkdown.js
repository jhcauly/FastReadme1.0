// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
class MarkDown {
    static renderLicenseBadge(license) {

        const badges = {
            gnugplv3: '[![License: LGPL v3](https://img.shields.io/badge/License-LPGL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
            isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
            mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
        }
        return badges[license]
    }

    // TODO: Create a function that returns the license link
    // If there is no license, return an empty string
    static renderLicenseLink(license) {


        const licenseLinks = {
            isc: '[ISC](https://choosealicense.com/licenses/isc)',
            mit: '[MIT](https://choosealicense.com/licenses/mit)',
            gnugplv3: '[GNUGPLv3](https://choosealicense.com/licenses/gpl-3.0/)',
        }
        return licenseLinks[license]
    }

    // TODO: Create a function that returns the license section of README
    // If there is no license, return an empty string
    static renderLicenseSection(license) {

        if (license) {
            return `Licensed under the ${this.renderLicenseLink(license)} license`
        } else {
            return ''
        }
    }


    // TODO: Create a function to generate markdown for README
    static generateMarkdown(answers) {
        return `
# ${answers.title}
${this.renderLicenseBadge(answers.license)}
## Table of Contents
- [Project description](#Description)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Installation](#Installation)
- [Questions](#Questions)
- [License](#License)
    
## Description
${answers.description}

## Usage
${answers.usage}

## Installation
${answers.installation}
    
## Contributing
${answers.contributing}

## Questions
${answers.email}
https://github.com/${answers.github}

## License
${this.renderLicenseSection(answers.license)}
`;
    }
}

module.exports = MarkDown;