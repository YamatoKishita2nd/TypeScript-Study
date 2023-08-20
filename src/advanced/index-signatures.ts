export {};

// let profile: { name?: string } = {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = {
  name: 'Yamato',
  underTwenty: false
};

// How to write index signatures
// { [ index: typeForIndex ]: typeForValue }

profile.name = 'Yamato';
profile.age = 20;
profile.nationality = 'Japan';
