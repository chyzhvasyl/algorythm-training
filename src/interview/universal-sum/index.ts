//function add() {
//   // todo
// }
//
// add(20, 22) // -> 42
// add(20)(22) // -> 42
// add(20)()(22) // -> 42
// add(20)()()()(22) // -> 42
// add(20)()()()()()()()()()()()(22) // -> 42
// add()(20)(22) // -> 42
// add()()()()(20)(22) // -> 42
// add()(20)()(22) // -> 42
// add()()()()()(20)()()()(22) // -> 42

export const universalSum = (num1 = 0, num2 = 0): any => {
  if (num1 && num2) {
    return num1 + num2;
  }

  if (num1) {
    return (num2 = 0) => universalSum(num1, num2);
  }

  if (num2) {
    return (num1 = 0) => universalSum(num1, num2);
  }

  if (!num1 && !num2) {
    return (num1 = 0, num2 = 0) => universalSum(num1, num2);
  }
}
