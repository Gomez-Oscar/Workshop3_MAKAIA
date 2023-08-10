import { getCities } from './getCities.js';

async function showCities() {
  const cities = await getCities();
  let container = document.querySelector('.elements-container');

  container.innerHTML = '';

  cities.map(city => {
    const { name, img } = city;

    container.innerHTML += /*html*/ `
    
    <div class="card d-flex align-items-center" style="width: 18rem">
      <h5 class="card-title">${name}</h5>
      <img
        class="card-img-top"
        src=${img}
        alt="city image"
      />
      <div class="card-body">
        <button href="#" class="btn btn-primary">Details</button>
      </div>
    </div>
    `;
  });
}

showCities();
