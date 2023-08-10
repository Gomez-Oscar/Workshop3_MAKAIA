import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

export async function updateCity(id, updatedCity) {
  try {
    const response = await axios.put(`http://localhost:3000/cities/${id}`, {
      ...updatedCity,
    });
    return response;
  } catch (error) {
    console.error('Error updating product:', error);
    alert('Error updating product:');
  }
}
