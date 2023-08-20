export {};

let name: any = 'Yamato';

// let length = name.length as number;
let length = (name as string).length;
// let length = (<string>name).length;  // JSXと似ているため非推奨

// length = 'foo';
