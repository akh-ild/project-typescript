class User {
  email: string
  name: string
  private _courseCount = 1
  private readonly city: string = "Bishkek"
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
  get getAppleEmail(): string {
    return `apple${this.email}`;
  }
  get courseCount(): number {
    return this._courseCount;
  }
  set courseCount(courseNum):voidw { // setter cannot have return type
    if (courseNum <= 1) {
      throw new Error('Course count should be more than 1');
    }
    this._courseCount = courseNum;
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
