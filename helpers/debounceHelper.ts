let timer: NodeJS.Timer;

export const debounce = (fn: () => any, delay?: number) => {
  clearTimeout(timer);

  timer = setTimeout(() => {
    fn();
  }, delay || 300);
};
