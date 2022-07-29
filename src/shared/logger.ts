export const logger = (func: Function, ...input: unknown[]) => {
  console.log('--------------------------------------------------');
  console.log(`${func.name}`);
  console.log(`input: ${JSON.stringify([...input])}`);
  console.log('result:', func(...input));
}