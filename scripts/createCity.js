import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

export async function createCity(city) {
  try {
    const response = await axios.post(`http://localhost:3000/cities/`, city);
    console.log('response create', response.data);
    return response;
  } catch (error) {
    console.error('Error creating product:', error);
  }
}
