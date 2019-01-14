export default (fn) => (...args) => fn(...args)
    .catch(() => fn(...args));