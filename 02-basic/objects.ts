// function createUser({name: string, isPaid: boolean}) {}
//
// let newUser = {name: 'Ildar', isPaid: true, email: 'Ildar@'};
//
// createUser(newUser);

type User = {
  name: string,
  email: string,
  isActive: boolean,
};

function createUser(user: User): User {
  return {name: '', email: '', isActive: true}
}

createUser({ name: 'Ildar', email: 'Ildar@', isActive: true });

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
