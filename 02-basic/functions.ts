function addTwo(num: number): number {
  return num + 2;
}

function getUpper(val: string): string {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {
  // do stuff
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {
  // do stuff
}

addTwo(5);
getUpper('ildar');
signUpUser('Ildar', 'Ildar@', true);
loginUser('Ildar', 'Ildar@');

const getHello = (s: string): string => {
  return '';
}

const heroes = ['thor', 'spiderman', 'ironman'];

heroes.map((hero): string => {
  return `hero is ${hero}`;
})

// function returns nothing
function consoleError(errmsg: string): void {
  console.log(errmsg);
}

// function never returns a value
function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

export {};
