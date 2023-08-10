import { getCities } from './getCities.js';
import { createCity } from './createCity.js';
import { deleteCity } from './deleteCity.js';
import { updateCity } from './updateCity.js';
import { toggle } from './utils/utils.js';

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

// toggle(addCityButton, addCityForm);

// catch the new information to create a new city and create it

const submitAddCityButton = document.querySelector('#submit-add-city-button');

submitAddCityButton.addEventListener('click', e => {
  e.preventDefault();

  const newName = document.querySelector('#city-name-input').value;
  const newDescription = document.querySelector(
    '#city-description-input'
  ).value;

  const city = {
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
  let city = cities.find(e => e.name.toLowerCase() === name.toLowerCase());

  if (city) {
    deleteCity(city.id);
    alert(`The city ${city.name} was deleted successfully`);
  } else {
    alert(`The city ${name} was not found`);
    document.querySelector('#delete-city-form').reset();
  }
});

// toggle function for update city

const searchCityForm = document.querySelector('#search-city-form');
const updateCityButton = document.querySelector('#update-city-button');

updateCityButton.addEventListener('click', e => {
  e.preventDefault();
  const currentClass = searchCityForm.classList.value
    .replace('form', '')
    .trim();
  if (currentClass === 'hidden') {
    searchCityForm.classList.remove('hidden');
    searchCityForm.classList.add('show');
  } else if (currentClass === 'show') {
    searchCityForm.classList.remove('show');
    searchCityForm.classList.add('hidden');
  }
});

const submitSearchCityButton = document.querySelector(
  '#submit-search-city-button'
);

const submitUpdateCityButton = document.querySelector(
  '#submit-update-city-button'
);

const updateCityForm = document.querySelector('#update-city-form');
let foundCity;

submitSearchCityButton.addEventListener('click', async e => {
  e.preventDefault();

  const name = document.querySelector('#city-name-input-to-search').value;
  const cities = await getCities();
  foundCity = cities.find(e => e.name.toLowerCase() === name.toLowerCase());

  if (foundCity) {
    updateCityForm.classList.remove('hidden');
    updateCityForm.classList.add('show');

    let currentName = document.querySelector('#city-name-input-to-update');
    let currentDescription = document.querySelector(
      '#city-description-input-to-update'
    );

    currentName.value = foundCity.name;
    currentDescription.value = foundCity.description;

    searchCityForm.classList.remove('show');
    searchCityForm.classList.add('hidden');
  } else {
    alert(`The city ${name} was not found`);
    document.querySelector('#search-city-form').reset();
  }
});

submitUpdateCityButton.addEventListener('click', e => {
  e.preventDefault();
  let updatedName = document.querySelector('#city-name-input-to-update').value;
  let updatedDescription = document.querySelector(
    '#city-description-input-to-update'
  ).value;

  const updatedCity = {
    name: updatedName,
    // img: 'https://res.cloudinary.com/dbtqtuwzw/image/upload/v1691359907/Workshop3_MAKAIA/test_gglvt1.png',
    description: updatedDescription,
  };

  updateCity(foundCity.id, updatedCity);
});
