export {};

let bmi: (height: number, weight: number) => number = (
  height: number, 
  weight: number
): number => weight / (height * height);
// ): number => {
//   return weight / (height * height);
// };

console.log(bmi(1.80, 65));
