export {};

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>;
type SmallProfile = Omit<DetailedProfile, 'height'>;

// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
// type MyOmit = Pick<DetailedProfile, Exclude<'name' | 'height' | 'weight', 'height'>>;
type MyOmit = Pick<DetailedProfile, 'name' | 'weight'>;
type MySmallProfile = MyOmit;
