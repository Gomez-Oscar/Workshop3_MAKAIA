import { createCity } from './createCity.js';

// toggle function for add city

const addCityButton = document.querySelector('#add-city-button');
const addCityForm = document.querySelector('#add-city-form');

if (addCityButton) {
  addCityButton.addEventListener('click', e => {
    e.preventDefault();
    const currentClass = addCityForm.classList.value.replace('form', '').trim();
    if (currentClass === 'hidden') {
      addCityForm.classList.remove('hidden');
      addCityForm.classList.add('show');
    } else if (currentClass === 'show') {
      addCityForm.classList.remove('show');
      addCityForm.classList.add('hidden');
    }
  });
}

// catch the new information to create a new city and create it

const submitAddCityButton = document.querySelector('#submit-add-city-button');

submitAddCityButton.addEventListener('click', e => {
  e.preventDefault();

  let city = {};

  const newName = document.querySelector('#city-name-input').value;
  const newDescription = document.querySelector(
    '#city-description-input'
  ).value;

  city = {
    name: newName,
    img: 'https://res.cloudinary.com/dbtqtuwzw/image/upload/v1691359907/Workshop3_MAKAIA/test_gglvt1.png',
    description: newDescription,
  };

  createCity(city);
});
