export type sumNumbers = (num: number) => Function

export function sumNumbers(number: number): sumNumbers {
  return (num2: number) => sumNumbers(number + num2);
}
