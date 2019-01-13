export default function get (client, key) {
    return new Promise((resolve, reject) => {
        client.get(key, (error, reply) => {
            if (!error) {
                resolve(reply);
            } else {
                reject(error);
            }
        });
    });
}