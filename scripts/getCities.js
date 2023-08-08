import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

const ENDPOINT = 'http://localhost:3000/cities/';

export async function getCities() {
  try {
    const response = await axios.get(ENDPOINT);
    return response.data;
  } catch (error) {
    console.error('Error fetching cities:', error);
    return [];
  }
}
