const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateMarkdown = require('./utils/generateMarkdown');

const employees = [];

const printError = (error) => {
    return console.error('\x1b[31m', `\n${error}`);
}

const printSuccess = (message) => {
    return console.error('\x1b[32m', `\n${message}`);
}

const askNewEmployee = () => {
    return new Promise((resolve, reject) => {
        const questions = [
            {
                type: 'list',
                name: 'newEmployee',
                message: 'Do you want to add another employee?',
                choices: [
                    {
                        name: 'Add Engineer',
                        value: 'engineer',
                    },
                    {
                        name: 'Add Intern',
                        value: 'intern',
                    },
                    {
                        name: 'No, finish building my team',
                        value: false,
                    },
                    new inquirer.Separator(),
                ],
            },
        ];

        inquirer
            .prompt(questions)
            .then(answers => {
                const {newEmployee} = answers;

                switch (newEmployee) {
                    case 'engineer':
                        askEngineerInfo()
                            .then(message => {
                                console.log(message);
                                resolve(askNewEmployee());
                            })
                            .catch(error => {
                                reject(new Error(error));
                            });
                        break;

                    case 'intern':
                        askInternInfo()
                            .then(message => {
                                console.log(message);
                                resolve(askNewEmployee());
                            })
                            .catch(error => {
                                reject(new Error(error));
                            });
                        break;

                    default:
                        resolve('\nNo more employees.');
                        break;
                }
            })
            .catch(error => {
                reject(new Error(error));
            });
    });
}

const askManagerInfo = () => {
    return new Promise((resolve, reject) => {
        const questions = [
            {
                type: 'input',
                name: 'name',
                message: 'Enter team manager’s name:',
            },
            {
                type: 'input',
                name: 'id',
                message: 'Enter team manager’s employee ID:',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter team manager’s email address:',
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Enter team manager’s office number:',
            },
        ];

        inquirer
            .prompt(questions)
            .then(answers => {
                const {
                    id,
                    name,
                    email,
                    officeNumber,
                } = answers;

                employees.push(new Manager(id, name, email, officeNumber));

                resolve('\nManager joined the team.');
            })
            .catch(error => {
                reject(new Error(error));
            });
    });
};

const askEngineerInfo = () => {
    return new Promise((resolve, reject) => {
        const questions = [
            {
                type: 'input',
                name: 'name',
                message: 'Enter engineer’s name:',
            },
            {
                type: 'input',
                name: 'id',
                message: 'Enter engineer’s employee ID:',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter engineer’s email address:',
            },
            {
                type: 'input',
                name: 'github',
                message: 'Enter engineer’s GitHub username:',
            },
        ];

        inquirer
            .prompt(questions)
            .then(answers => {
                const {
                    id,
                    name,
                    email,
                    github,
                } = answers;

                employees.push(new Engineer(id, name, email, github));

                resolve('\nEngineer joined the team.');
            })
            .catch(error => {
                reject(new Error(error));
            });
    });
};

const askInternInfo = () => {
    return new Promise((resolve, reject) => {
        const questions = [
            {
                type: 'input',
                name: 'name',
                message: 'Enter intern’s name:',
            },
            {
                type: 'input',
                name: 'id',
                message: 'Enter intern’s employee ID:',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter intern’s email address:',
            },
            {
                type: 'input',
                name: 'school',
                message: 'Enter intern’s school:',
            },
        ];

        inquirer
            .prompt(questions)
            .then(answers => {
                const {
                    id,
                    name,
                    email,
                    school,
                } = answers;

                employees.push(new Intern(id, name, email, school));

                resolve('\nIntern joined the team.');
            })
            .catch(error => {
                reject(new Error(error));
            });
    });
};

const getEmployeesTeam = new Promise((resolve, reject) => {
    askManagerInfo()
        .then(message => {
            console.log(message);
            return askNewEmployee();
        })
        .then(message => {
            console.log(message);
            resolve('\nTeam created.');
        })
        .catch(error => {
            reject(new Error(error));
        });
});

const createHtmlFile = (fileName, data) => {
    fs.writeFile(`./dist/${fileName}.html`, generateMarkdown(data), 'utf8', error => {
        if (error) {
            printError(error);
        } else {
            printSuccess(`File '/dist/${fileName}.html' successfully generated!`);
        }
    });
}

const init = () => {
    getEmployeesTeam
        .then((message) => {
            console.log(message);
            createHtmlFile('index', employees);
        })
        .catch((error) => {
            printError(error);
        });
}

init();
