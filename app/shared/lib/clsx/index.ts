export const clsx = (...args) => {
  return args
    .reduce((classes, arg) => {
      if (typeof arg === "string") {
        classes.push(arg);
      } else if (Array.isArray(arg)) {
        // If it's an array, we recurse to process each item in the array
        classes.push(clsx(...arg));
      } else if (typeof arg === "object") {
        // If it's an object, we check which keys should be included based on their values
        Object.keys(arg).forEach((key) => {
          if (arg[key]) {
            classes.push(key);
          }
        });
      }
      return classes;
    }, [])
    .join(" ");
};
