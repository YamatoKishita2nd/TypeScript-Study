export {};

// tsconfig.jsonの"strictNullChecks"をfalseにするとnullableになるが...

let profile: { name: string; age: number | null; } = {
  name: 'Yamato',
  age: null
};

// profile = null;
