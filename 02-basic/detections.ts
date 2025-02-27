interface User {
  name: string,
  email: string,
}

interface Admin {
  name: string,
  email: string,
  isAdmin: boolean,
}

function isAdmin(account: User | Admin) {
  if ('isAdmin' in account) { // type guard
    return account.isAdmin
  }
  return false;
}

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

type Fish = {swim: () => void};
type Bird = {fly: () => void};

function isFish(pet: Fish | Bird) {
  return (pet as Fish).swim !== undefined;
}
