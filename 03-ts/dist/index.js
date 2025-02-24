"use strict";
class User {
    constructor(email, name) {
        this.city = '';
        this.email = email;
        this.name = name;
    }
}
const ildar = new User('ildar@test.ts', 'Ildar');
ildar.city = 'Bishkek';
