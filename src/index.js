
var fs = require('fs'); 
var inquirer = require('inquirer'); 


var generatePage = require('./utils/generateMarkdown');



var questions = () => {
     
    return inquirer.prompt([
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: nameInput => {
            if (nameInput) {
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
        message: 'What is your email address?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false; 
            }
        }

    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your project name!');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project.',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a description of your project!');
                return false; 
            }
        }
    }, 
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'GNU'],
        default: ["MIT"],
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please choose a license!');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the steps you would take to install the right packages?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please list the steps required to finish your projects deployment!');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How to work the app?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Pleae provide a description of how youll be using it!');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'test', 
        message: 'To perform tests, what command should be used??',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'What information does a user need to contribute to the repository??'
    }
]);
};


const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the README has been created 
        } else {
            console.log("Your README has been successfully created!")
        }
    })
}; 


questions()

.then(answers => {
    return generatePage(answers);
})

.then(data => {
    return writeFile(data);
})
 
.catch(err => {
    console.log(err)
})