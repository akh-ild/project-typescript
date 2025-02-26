const score: Array<number> = [];
const names: Array<string> = [];

function one(val: any): any { // function accepts any type and return any type
  return val;
}

function two<Type>(val: Type[]):Type[] { // function accepts same generic type and return generic type
  return val;
}

two([3]); // accepts [3] and return [3]

function getProduct<T>(products: T[]): T { // accepts an array, return the first element
  const index = 3;
  return products[index];
}

const getProduct2 = <T>(products: T[]): T => { // arrow function
  const index = 3;
  return products[index];
}

interface Database {
  connection: string,
  username: string,
  password: string,
}

function generics<T, U extends Database>(val1: T, val2: U): object {
  return {
    val1,
    val2,
  }
}

// generics(3, {});
