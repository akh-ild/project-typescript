interface User {
  readonly id: number;
  email: string,
  userId: number,
  goggleId?: string,
  startTrial: () => string,
  getCoupon: (name: string, value: number) => number,
};

interface User {
  githubToken: string, // add property to User
};

interface Admin extends User {
  role: 'admin' | 'ta' | 'learner';
};

const ildar: User = {
  id: 32,
  email: 'ildar@test.ts',
  userId: 2211,
  githubToken: 'github',
  startTrial: () => {
    // return 1; // error
    return 'trail started';
  },
  getCoupon: (name: string, value: number) => {
    return 10;
  }
};
ildar.email = 'ildar@.com';
// ildar.id = 1; // error

export {};
