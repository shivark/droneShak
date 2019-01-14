import cache from './../../cache/index.mjs';

const ERR = 'unable to retrieve resource';

export default ({ p, uri, cb }) =>
p.catch(async(err) => {
    debugger;
    const value = await cache.get(uri);
    if (value)
        await cb(value);
    else
        throw ERR;
});