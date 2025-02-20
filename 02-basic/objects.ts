// function createUser({name: string, isPaid: boolean}) {}
//
// let newUser = {name: 'Ildar', isPaid: true, email: 'Ildar@'};
//
// createUser(newUser);

type User = {
  readonly _id: string,
  name: string,
  email: string,
  isActive: boolean,
  creditCard?: number, // optional
};

type cardNumber = {
  cardNumber: number,
};
type cardDate = {
  cardDate: string,
}
type cardDetails = cardNumber & cardDate & {
  cvv: number,
};

// function createUser(user: User): User {
//   return {name: '', email: '', isActive: true}
// }

// createUser({ name: 'Ildar', email: 'Ildar@', isActive: true });

let myUser: User = {
  _id: '123',
  name: 'Ildar',
  email: 'Ildar@',
  isActive: true,
};

myUser.email = 'Ildar@.com';
// myUser._id = '12345'; // error



type Point = {
  x: number,
  y: number,
};

function printCoord(pt: Point) {
  console.log('The coordinate\'s x value is ' + pt.x);
  console.log('The coordinate\'s y value is ' + pt.y);
}

printCoord({ x: 100, y: 100 });

export {};
