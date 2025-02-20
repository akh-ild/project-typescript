"use strict";
// function createUser({name: string, isPaid: boolean}) {}
//
// let newUser = {name: 'Ildar', isPaid: true, email: 'Ildar@'};
//
// createUser(newUser);
Object.defineProperty(exports, "__esModule", { value: true });
// function createUser(user: User): User {
//   return {name: '', email: '', isActive: true}
// }
// createUser({ name: 'Ildar', email: 'Ildar@', isActive: true });
var myUser = {
    _id: '123',
    name: 'Ildar',
    email: 'Ildar@',
    isActive: true,
};
myUser.email = 'Ildar@.com';
function printCoord(pt) {
    console.log('The coordinate\'s x value is ' + pt.x);
    console.log('The coordinate\'s y value is ' + pt.y);
}
printCoord({ x: 100, y: 100 });
