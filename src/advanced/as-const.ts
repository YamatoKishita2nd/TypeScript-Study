export {};

let name = 'Yamato';
name = 'yamato';

let nickname = 'yama' as const;
// nickname = 'yamato';
nickname = 'yama';

let profile = {
  name: 'Yamato',
  height: 175
} as const;

// profile.name = 'kishita';
// profile.height = 180;
