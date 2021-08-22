const inquirer = require('inquirer');
const fs = require('fs');

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What is your role/title? (Required)',
            choices: ['Manager','Engineer','Intern']
            
        }
      
        
            
        // {
        //     type: 'input',
        //     name: 'name',
        //     message: 'What is the name of the team Manager? (Required)',
        //     validate: name => {
        //         if(name){
        //             return true;
        //         } else{
        //             console.log('Please enter the MANAGERS name?')
        //             return false;
        //         }
        //     }
        // },
        // {
        //     type: 'input',
        //     name: 'id',
        //     message: 'What is your id NUMBER? (Required)',
        //     validate: id => {
        //         if(isNaN(id) || !id ){
        //             console.log('That is not a valid number/input')
        //             return false;
        //         } else {
        //             return true
        //         }
        //     }
        // },
        // {
        //     type: 'input',
        //     name: 'email',
        //     message: 'What is your email? (Required)',
        //     validate: email => {
        //         if (email){
        //             return true;
        //         } else{
        //             console.log('What is your email?')
        //             return false;
        //         }
        //     }
        // },
        // {
        //     type: 'input',
        //     name: 'officeNum',
        //     message: 'What is your office NUMBER? (Required)',
        //     validate: officeNum => {
        //         if(isNaN(officeNum)){
        //             console.log('That is not a valid number/input')
        //             return false;
        //         } else{
        //             return true;
        //         }
        //     }
        // }
    ]);
};


const promptMember = (teamMember) => {
    console.log(`
    =================
    Add a Team Member
    =================  
    `)

    if(!teamMember.li){
        teamMember.li = [];
    }
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'member',
                message: ' add new member her'
            }
        ])
        .then(teamMember => {
            teamMember.li.push(teamMember);
            console.log(teamMember)
        })
}

promptManager()
    .then(managerData => {
        console.log(managerData);
        
            if(managerData.role==='Manager') {
                console.log("1")
                //add prompts for manager here
            }if(managerData.role==='Engineer'){
                console.log("2")
                //add prompts for engineer here
            }
    
    })
    .then(teamMember => {
        console.log(teamMember);
    })






// {
//     type: 'list',
//     name: 'role',
//     message: ['Manager','Engineer','Intern'],

// }
