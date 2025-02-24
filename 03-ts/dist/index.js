"use strict";
class User {
    constructor(email, name) {
        this.city = "Bishkek";
        this.email = email;
        this.name = name;
    }
}
class User1 {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "Bishkek";
    }
}
const ildar = new User('ildar@test.ts', 'Ildar');
