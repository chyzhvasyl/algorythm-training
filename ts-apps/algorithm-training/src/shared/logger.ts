export const logger = (func: Function, ...input: unknown[]): void => {
  console.log('--------------------------------------------------');
  console.log(`${func.name}`);
  console.log(`input: ${JSON.stringify([...input])}`);

  const result = func(...input);

  if (result === undefined) {
    console.log('result:', ...input);
  } else {
    console.log('result:', result);
  }
};
