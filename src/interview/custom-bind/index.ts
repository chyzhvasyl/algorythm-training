export const myBind = (fn: Function, context: Record<string, any>, ...args: unknown[]) => {
  return (...rest: unknown[]) => {
    const id = Symbol('CONTEXT ID') as unknown as string;

    context = {
      ...context,
      [id]: fn,
    };

    const result = context[id](...args.concat(rest));

    delete context[id];

    return result;
  };
}