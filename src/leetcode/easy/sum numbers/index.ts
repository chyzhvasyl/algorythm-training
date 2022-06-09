export type sumNumbers = (num: number) => Function

export function sumNumbers(number: number): sumNumbers {
  console.log('number', number)
  return (num2: number) => sumNumbers(number + num2)
}
