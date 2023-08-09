import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

export async function deleteCity(id) {
  try {
    await axios.delete(`http://localhost:3000/cities/${id}`);
    return true;
  } catch (error) {
    console.error('Error deleting product:', error);
  }
}
