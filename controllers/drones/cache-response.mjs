import cache from './../../cache/index.mjs';

export default ({ p, uri, cb }) => ({ p: p.then(({ uri, json }) => cache.set({ key: uri, value: json })), uri, cb });