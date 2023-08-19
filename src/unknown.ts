export {};

const kansu = (): number => 20;

let numberArray: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberArray + 10;
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
}
