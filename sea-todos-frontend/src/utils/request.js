const API = '/api';

export function ServerAPIError(json) {
  this.name = 'ServerAPIError';
  this.message = json.message;
  this.data = json;
  this.stack = (new Error()).stack;
}
ServerAPIError.prototype = Object.create(Error.prototype);
ServerAPIError.prototype.constructor = ServerAPIError;

const request = async (path, method, body) => {
  const endpointUrl = API + path;

  const headers = {
    Accept: 'application/json'
  };

  if (method !== 'GET') {
    headers['Content-Type'] = 'application/json';
  }

  const fetchOpts = {
    method,
    headers
  };

  if (method !== 'HEAD' && method !== 'GET') {
    fetchOpts.body = JSON.stringify(body);
  }

  const response = await fetch(endpointUrl, fetchOpts);
  const json = await response.json();
  if (response.status < 200 || response.status >= 300) {
    if (json) {
      throw new ServerAPIError(json);
    } else {
      throw new Error(response.statusText);
    }
  }
  return json;
};

export const get = endpoint => (
  request(endpoint, 'GET')
);

export const post = (endpoint, body, headers) => (
  request(endpoint, 'POST', body, true, headers)
);

export const put = (endpoint, body) => (
  request(endpoint, 'PUT', body)
);
