const user: (string | number)[] = ['ildar', 1];

let tUser: [string, number]; // order matters!!!
tUser = ['ildar', 2];

let rgb: [number, number, number] = [255, 123, 112];

type User = [number, string];
const newUser: User = [122, 'ildar@test.ts'];
// newUser = ['ildar', 1]; // error!!!
newUser[1] = 'dinara@test.ts';

export {};
