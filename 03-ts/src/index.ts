class User {
  email: string
  name: string
  city: string = ''
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const ildar = new User('ildar@test.ts', 'Ildar');
ildar.city = 'Bishkek';
