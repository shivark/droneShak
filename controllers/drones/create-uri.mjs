import toUrl from './../../utils/to-url.mjs';

export default ({
    resource,
    cb,
    uri = toUrl({ urlBase: process.env.UNRELIABLE_API_URL_BASE, version: 'v1', resource: 'drones' })
}) => ({ uri, cb });