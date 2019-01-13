import fetchData from './../fetch-data.mjs';
import cache from './../../cache/index.mjs';
import toUrl from './../../utils/to-url.mjs';

const get = async(req, respond) => {
    const url = toUrl({ urlBase: process.env.UNRELIABLE_API_URL_BASE, version: 'v1', resource: 'drones' });

    try {
        const data = await fetchData(url);
        console.log(data);
        await respond.send(data);
        cache.set(url, data);

    } catch (error) {

        // get data from cache

    }
}

export default get;