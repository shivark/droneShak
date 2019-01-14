import fetchData from './fetch-data.mjs';
import toUrl from './../../utils/to-url.mjs';
import useCacheOnFail from './use-cache-on-fail.mjs';
import compose from './../../utils/compose.mjs';
import cacheResponse from './cache-response.mjs';

const createUri = ({
    resource,
    cb,
    uri = toUrl({ urlBase: process.env.UNRELIABLE_API_URL_BASE, version: 'v1', resource: 'drones' })
}) => ({ uri, cb });

const resilientFetch = compose(
    useCacheOnFail,
    cacheResponse,
    fetchData,
    createUri
);

const get = async(req, response) => {

    const sendResponse = async(data) => response.send(data);
    //todo get resource 'drones' from request
    await resilientFetch({ resource: 'drones', cb: sendResponse });
};

export default get;