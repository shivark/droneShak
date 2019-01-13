export default function set (cache, key, value) {
    cache.set(key, JSON.stringify(value), 'EX', process.env.CACHE_LIFETIME);
};