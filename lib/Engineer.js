const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(id, name, email, github) {
        super(id, name, email);
        this.github = github;
    }

    getRole() {
        return 'Engineer';
    }

    getGithub() {
        return this.github;
    }

    getIcon() {
        return '<i class="bi bi-emoji-angry"></i>';
    }
}

module.exports = Engineer;