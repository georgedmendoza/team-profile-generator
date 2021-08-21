class Employee {
    constructor(name,id,email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return `Name: ${this.name}`
    }

    getId() {
        if(this.id){
            return this.id;
        }
        return false;
    }

    getEmail() {
        if(this.email) {
            return this.email;
        }
        else false;
    }

    getRole() {
        return `Employee`
    }
}


module.exports = Employee