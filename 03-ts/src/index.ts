class User {
  email: string
  name: string
  private readonly city: string = "Bishkek"
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

class User1 {
  readonly city: string = "Bishkek";
  constructor(
    public email: string,
    public name: string
  ) {
  }
}

const ildar = new User('ildar@test.ts', 'Ildar');
