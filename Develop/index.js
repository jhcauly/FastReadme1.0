// TODO: Include packages needed for this application
const inquirer = require('inquirer')

const MarkDown = require('./utils/generateMarkdown')
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        name: 'title',
        message: 'Project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project description?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Project usage?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Contribution info?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'For questions(Email)?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'For questions(github)',
    },
    {
        type: 'input',
        name: 'license',
        message: 'License? (MIT),(ISC),(GNUPLv3)',
        choices: ['MIT', 'ISC', 'GNUPLv3'],
        filter(val) {
            console.log(val)
            return val.toLowerCase();
        }
    }
];



function runQuery() {

    return inquirer.prompt(questions).then((answers) => {


            const Markdown = MarkDown.generateMarkdown(answers)

            writeToFile("README.md", Markdown);

        })
        .catch((error) => {
            console.log(error);
        })
}

function verificar(ai) {
    var ai = inquirer.prompt(questions[5]);
    if (ai === 1) {
        return 1, ai;
    }
    /* else {
           return 2;
       } */
}
runQuery();
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('O arquivo foi criado!');
    });

}

// TODO: Create a function to initialize app
/* function init() {


    for (var i = 0; i < questions.length; i++) {
        aswer[i] = prompt(questions[i]);
    }
    for (var i = 0; i < aswer.length; i++) {
        console.log(aswer[i]);
    }


} */

// Function call to initialize app
/* init(); */