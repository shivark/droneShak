import fetch from 'node-fetch';

export default ({ uri, cb }) => ({
    p: (async() => {
        const response = await fetch(uri);
        const json = JSON.stringify(await response.json());
        await cb(json);
        return { uri, json };
    })(),
    uri,
    cb
});