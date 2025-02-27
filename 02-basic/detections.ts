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
