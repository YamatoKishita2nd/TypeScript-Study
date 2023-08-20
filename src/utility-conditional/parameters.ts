export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile('Yamato', 20);

type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ['Ash', 10];

debugProfile(...profile);

type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;
