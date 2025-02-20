const superHeroes: string[] = [];

superHeroes.push('spiderman');

type User = {
  name: string;
  email: string;
  isActive: boolean;
  creditCard?: number;
};

const allUsers: User[] = [];

allUsers.push({
  name: 'Ildar',
  email: 'Ildar@',
  isActive: true,
});

export {};
