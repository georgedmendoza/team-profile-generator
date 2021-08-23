const inquirer = require('inquirer');
const writeFile = require('./src/generate-site.js')
const generatePage = require('./src/page-template.js');

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the team Manager? (Required)',
            validate: name => {
                if(name){
                    return true;
                } else{
                    console.log('Please enter the MANAGERS name?')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your managers id NUMBER? (Required)',
            validate: id => {
                if(isNaN(id) || !id ){
                    console.log('That is not a valid number/input')
                    return false;
                } else {
                    return true
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your managers email? (Required)',
            validate: email => {
                if (email){
                    return true;
                } else{
                    console.log('What is your managers email?')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'What is your office NUMBER? (Required)',
            validate: officeNum => {
                if(isNaN(officeNum)){
                    console.log('That is not a valid number/input')
                    return false;
                } else{
                    return true;
                }
            }
        }
       
      
    ]);
};


const promptMember = (memberList) => {
    console.log(`
    =================
    Add a Team Member
    =================  
    `)
    if (!memberList) {
        memberList = [];
    }
        return inquirer
        .prompt([
            {
                type: 'list',
                name: 'role',
                message: 'What is your role/title? (Required)',
                choices: ['Engineer','Intern']
                
            },
            {
                type: 'input',
                name: 'name',
                message: 'What is YOUR name? (Required)',
                validate: name => {
                    if(name){
                        return true;
                    } else{
                        console.log('Please enter the YOUR name?')
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is YOUR id NUMBER? (Required)',
                validate: id => {
                    if(isNaN(id) || !id ){
                        console.log('That is not a valid number/input')
                        return false;
                    } else {
                        return true
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is YOUR email? (Required)',
                validate: email => {
                    if (email){
                        return true;
                    } else{
                        console.log('What is YOUR email?')
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is your github username? (Required)',
                when: (list) => list.role ==='Engineer'
            },
            {
                type: 'input',
                name: 'school',
                message: 'What school do you attend? (Required)',
                when: (list) => list.role === 'Intern'
            },
            {
                type: 'confirm',
                name: 'newMember',
                message: 'Would you like to add another team Member?',
                default: false
            }
       
    ])
    .then(memberList => {
        // memberList.push(memberList);
        if (memberList.newMember){
            return promptMember(memberList);
        } else{
            return memberList;
        }
    })
};

promptManager()
    .then(managerData => {
        console.log(managerData);
    })
    .then(promptMember)
    .then(teamMember => {
        console.log(teamMember);
        return generatePage(teamMember);
        // console.log(memberList);
    })
    .then(pageHTML => {
        console.log(pageHTML);
        return writeFile(pageHTML);
    })






// {
//     type: 'list',
//     name: 'role',
//     message: ['Manager','Engineer','Intern'],

// }
