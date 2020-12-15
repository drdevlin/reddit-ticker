import { basicAuth, appSignature } from './secrets';

const tokenURL = 'https://www.reddit.com/api/v1/access_token';
const baseURL = 'https://oauth.reddit.com';
const tokenConfig = {
  method: 'POST',
  body: 'grant_type=client_credentials',
  headers: {
    'Authorization': `Basic ${basicAuth}`,
    'Content-Type': 'application/x-www-form-urlencoded',
    'User-Agent': appSignature
  }
};

async function request(endpoint, { body, ...customConfig } = {}) {
  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...customConfig.headers,
    },
  }

  let data
  try {
    const response = await window.fetch(endpoint, config)
    data = await response.json()
    if (response.ok) {
      return data
    }
    throw new Error(response.statusText)
  } catch (err) {
    return Promise.reject(err.message ? err.message : data)
  }
}

export async function redditGet(endpoint) {
  try {
    // Get an access token
    const { access_token } = await request(tokenURL, tokenConfig);
    
    // Make a GET request
    const getConfig = {
      method: 'GET',
      headers: {
        'Authorization': `bearer ${access_token}`,
        'User-Agent': appSignature
      }
    }
    return await request(baseURL + endpoint, getConfig);
  } catch(error) {
    return error;
  }
}