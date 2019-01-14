import fetchData from './fetch-data.mjs';
import useCacheOnFail from './use-cache-on-fail.mjs';
import compose from './../../utils/compose.mjs';
import cacheResponse from './cache-response.mjs';
import createUri from './create-uri.mjs';

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