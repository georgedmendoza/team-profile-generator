const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name,id,email,officeNum,role) {
        super(name,id,email);

        this.officeNum = officeNum;
        this.role = 'Manager'
    }

    officeNumber() {
        if(this.officeNum) {
            return this.officeNum;
        }
        else false;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Manager

// const person = new Manager(13);
// console.log(person);