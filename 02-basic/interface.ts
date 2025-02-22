interface User {
  readonly id: number;
  email: string,
  userId: number,
  goggleId?: string,
  startTrial: () => string,
  getCoupon: (name: string) => number,
};

const ildar: User = {
  id: 32,
  email: 'ildar@test.ts',
  userId: 2211,
  startTrial: () => {
    // return 1; // error
    return 'trail started';
  },
  getCoupon: (name: string) => {
    return 10;
  }
};
ildar.email = 'ildar@.com';
// ildar.id = 1; // error

export {};
