export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Yamato';
  static lastName: string = 'Kishita';

  static work() {
    return `Hello! This is ${this.firstName}! Are you interested in TypeScript? Let' dive into TypeScript!`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());
