// const getCircularReplacer = (): (key: string, value: any) => any => {
//   const seen = new WeakSet();
//
//   return (key : string, value : any) => {
//     if (typeof value === 'object' && value !== null) {
//       if (seen.has(value)) {
//         return;
//       }
//
//       seen.add(value);
//     }
//
//     // eslint-disable-next-line @typescript-eslint/no-unsafe-return
//     return value;
//   };
// };

export const logger = (func: Function, ...input: unknown[]): void => {
  console.log('--------------------------------------------------');
  console.log(`${func.name}`);
  console.log(`input: ${JSON.stringify([ ...input ])}`);

  const result = func(...input);

  if (result === undefined) {
    console.log('result:', ...input);
  } else {
    console.log('result:', result);
  }
};
