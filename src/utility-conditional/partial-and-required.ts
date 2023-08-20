export {};

type Profile = {
  name: string;
  age?: string;
  zipCode: number;
};

// type Profile2 = {
//   name?: string;
//   age?: string;
// };

type PartialType = Partial<Profile>;
type RequiredType = Required<Profile>;
