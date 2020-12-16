import { basicAuth } from './secrets';

const tokenURL = 'https://www.reddit.com/api/v1/access_token';
const baseURL = 'https://oauth.reddit.com';
const tokenConfig = {
  method: 'POST',
  body: 'grant_type=client_credentials',
  headers: {
    'Authorization': `Basic ${basicAuth}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  }
};

async function request(endpoint, config) {
  try {
    const response = await fetch(endpoint, config)
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error(response.statusText)
  } catch (error) {
    return error;
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
      }
    }
    return await request(baseURL + endpoint, getConfig);
  } catch(error) {
    return error;
  }
}
