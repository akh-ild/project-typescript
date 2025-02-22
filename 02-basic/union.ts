let score: number | string = 33;

score = 44;
score = '55';

type User = { name: string; id: number };

type Admin = { userName: string; id: number };

let ildar: User | Admin = { name: 'Ildar', id: 1 };

ildar = {userName: 'ir', id: 2};

function getDbId(id: number | string) {
  // do stuff
  console.log(`DB id is: ${id}`)
}

getDbId(3);
getDbId('3');

function getDbId2(id: number | string) {
  // id.toLowerCase();  // error
  if (typeof id === 'string') {
    id.toLowerCase();
  }
}

// arrays
const data: number[] = [1, 2, 3];
const data2: string[] = ['1', '2', '3'];
const data3: (string | number | boolean)[] = [1, 2, '3'];


let seatAllotment: 'aisle' | 'middle' | 'window'; // fixed values
seatAllotment = 'aisle';

// seatAllotment = 'crew'; // error

export {};
