import { getCities } from './getCities.js';
import { createCity } from './createCity.js';
import { deleteCity } from './deleteCity.js';

// toggle function for add city

const addCityButton = document.querySelector('#add-city-button');
const addCityForm = document.querySelector('#add-city-form');

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
  alert('The City was created successfully');
});

// toggle function for delete city

const deleteCityForm = document.querySelector('#delete-city-form');
const deleteCityButton = document.querySelector('#delete-city-button');

deleteCityButton.addEventListener('click', e => {
  e.preventDefault();
  const currentClass = deleteCityForm.classList.value
    .replace('form', '')
    .trim();
  if (currentClass === 'hidden') {
    deleteCityForm.classList.remove('hidden');
    deleteCityForm.classList.add('show');
  } else if (currentClass === 'show') {
    deleteCityForm.classList.remove('show');
    deleteCityForm.classList.add('hidden');
  }
});

// catch the name to delete the city

const submitDeleteCityButton = document.querySelector(
  '#submit-delete-city-button'
);

submitDeleteCityButton.addEventListener('click', async e => {
  e.preventDefault();

  const name = document.querySelector('#city-name-input-to-delete').value;
  const cities = await getCities();
  let city = cities.find(e => e.name === name);

  deleteCity(city.id);
  alert(`The city ${city.name} was deleted successfully`);
});
