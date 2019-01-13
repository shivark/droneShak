import set from './set';
import get from './get';
import createRedisClient from './redis/create-client';

let client = null;

export default {
    init (suppliedClient) {
        !client && (client = suppliedClient || createRedisClient());
    },
    get: (...args) => get(client, ...args),
    set: (...args) => set(client, ...args)
};