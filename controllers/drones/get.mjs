import fetchData from './../fetch-data.mjs';
import cache from './../../cache/index.mjs';
import toUrl from './../../utils/to-url.mjs'

const get = async(req, respond) => {
    const url = toUrl({ urlBase: process.env.UNRELIABLE_API_URL_BASE, version: 'v1', resource: 'drones' });

    try {
        const data = await fetchData(url);
        await respond.send(data);
        cache.set(url, data);

    } catch (error) {

        try {
            let cachedData = await cache.get(url);
            respond.send(cachedData);

        } catch {
            //user error handler function
            respond.status(404).send({ error: 'No data is available at the moment.' }).end();
        }
    }
}

export default get;