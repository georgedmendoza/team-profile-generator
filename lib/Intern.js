const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name,id,email,school,role){
        super(name,id,email);

        this.school = school;
        this.role = 'Intern';
    }

    getSchool() {
        if(this.school){
            return this.school;
        } else false;
    }

    getRole() {
        return this.role;
    }

}


module.exports = Intern;