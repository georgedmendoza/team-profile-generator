const inquirer = require('inquirer');
const {writeFile} = require('./src/generate-site.js')
const generatePage = require('./src/page-template.js');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const memberList = [];

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
      
    ])
    .then(manager => {
        let managerData = new Manager(manager.name, manager.id, manager.email, manager.officeNum);
        memberList.push(managerData);
    })
};


const promptMember = () => {
    console.log(`
    =================
    Add a Team Member
    =================  
    `)
        return inquirer
        .prompt([
            {
                type: 'list',
                name: 'role',
                message: 'What is your role/title? (Required)',
                choices: ['Engineer','Intern','Finish Building Team']
                
            },
            {
                type: 'input',
                name: 'name',
                message: 'What is YOUR name? (Required)',
                when: (list) => list.role ==='Engineer' || list.role === 'Intern',
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
                when: (list) => list.role ==='Engineer' || list.role === 'Intern',
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
                when: (list) => list.role ==='Engineer' || list.role === 'Intern',
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
                default: false,
                when: (list) => list.role ==='Engineer' || list.role === 'Intern'
            }
       
    ])
    .then(member => {
        if (member.role === 'Intern') {
            let interData = new Intern(member.name, member.id, member.email, member.school);
            memberList.push(interData);
        }
        else if (member.role === 'Engineer') {
            let engineerData = new Engineer(member.name, member.id, member.email, member.github);
            memberList.push(engineerData);
        }
        
        if(member.newMember){
            return promptMember();
        } else {
            return memberList;
        }
    
    })
};

promptManager()
    .then(managerData => {
        console.log(managerData);
    })
    .then(promptMember)
    .then(memberList => {
        console.log(memberList);
        return generatePage(memberList);
    })
    .then(html => {
        return writeFile(html)
    })
    .catch(err => {
        console.log(err);
    })

