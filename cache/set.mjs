export default function set(cache, { key, value }) {
    debugger;
    cache.set(key, value, 'EX', process.env.CACHE_LIFETIME);
};