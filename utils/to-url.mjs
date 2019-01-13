const toUrl = ({ urlBase, version, resource, id }) =>
    id
        ? `${urlBase}/api/${version}/${resource}/${id}`
        : `${urlBase}/api/${version}/${resource}`;

export default toUrl;