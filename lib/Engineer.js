const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name,id,email,github,role){
        super(name,id,email);

        this.github = github;
        this.role = 'Engineer'
    }

    getGithub() {
        if(this.github) {
            return `[${this.github}](https:github.com/${this.github})`;
        }
    }

    getRole() {
        return this.role
    }
}

module.exports = Engineer