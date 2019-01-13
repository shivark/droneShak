import redis from 'redis';

let client = null;

const createClient = () => {
    if (client) return client;

    client = redis.createClient();

    client.on('connect', () => {
        console.log('Redis client connected');
    });

    client.on('error', (error) => {
        console.log('Something went wrong with Redis: ', error)
    });

    return client;
}

export default createClient;