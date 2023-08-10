import { getCities } from './getCities.js';
import { createCity } from './createCity.js';
import { deleteCity } from './deleteCity.js';
import { updateCity } from './updateCity.js';
import { toggleForm } from './utils/utils.js';

const NOT_FOUND_IMAGE_URL =
  'https://res.cloudinary.com/dbtqtuwzw/image/upload/v1691693860/Workshop3_MAKAIA/f9tbk7spl8qyvnomoumu.jpg';

const images = [
  'https://res.cloudinary.com/dbtqtuwzw/image/upload/v1691351004/Workshop3_MAKAIA/dubrovnik_n82l19.png',
  'https://res.cloudinary.com/dbtqtuwzw/image/upload/v1691351003/Workshop3_MAKAIA/barcelona_djqukd.png',
  'https://res.cloudinary.com/dbtqtuwzw/image/upload/v1691351002/Workshop3_MAKAIA/singapore_c2bxr7.png',
  'https://res.cloudinary.com/dbtqtuwzw/image/upload/v1691351002/Workshop3_MAKAIA/cartagena_pydzmz.png',
  'https://res.cloudinary.com/dbtqtuwzw/image/upload/v1691351001/Workshop3_MAKAIA/seoul_p0fdqj.png',
  'https://res.cloudinary.com/dbtqtuwzw/image/upload/v1691351001/Workshop3_MAKAIA/queenstown_nlwxmy.png',
  'https://res.cloudinary.com/dbtqtuwzw/image/upload/v1691351001/Workshop3_MAKAIA/sydney_cvr56p.png',
  'https://res.cloudinary.com/dbtqtuwzw/image/upload/v1691351001/Workshop3_MAKAIA/capetown_u0pr0z.png',
  'https://res.cloudinary.com/dbtqtuwzw/image/upload/v1691351000/Workshop3_MAKAIA/paris_r4bsql.png',
  'https://res.cloudinary.com/dbtqtuwzw/image/upload/v1691351000/Workshop3_MAKAIA/buenosaires_khjins.png',
  'https://res.cloudinary.com/dbtqtuwzw/image/upload/v1691350999/Workshop3_MAKAIA/rome_d4otoo.png',
  'https://res.cloudinary.com/dbtqtuwzw/image/upload/v1691350999/Workshop3_MAKAIA/newyork_tabuyt.png',
  'https://res.cloudinary.com/dbtqtuwzw/image/upload/v1691350999/Workshop3_MAKAIA/palermo_cnjlpi.png',
  'https://res.cloudinary.com/dbtqtuwzw/image/upload/v1691350999/Workshop3_MAKAIA/istanbul_loqscz.png',
  'https://res.cloudinary.com/dbtqtuwzw/image/upload/v1691350998/Workshop3_MAKAIA/london_xmfu4a.png',
  'https://res.cloudinary.com/dbtqtuwzw/image/upload/v1691350998/Workshop3_MAKAIA/riodejaneiro_q7ivhp.png',
  'https://res.cloudinary.com/dbtqtuwzw/image/upload/v1691350997/Workshop3_MAKAIA/kyoto_puiekx.png',
  'https://res.cloudinary.com/dbtqtuwzw/image/upload/v1691694533/test.png',
];

// Add city

const addCityButton = document.querySelector('#add-city-button');
const addCityForm = document.querySelector('#add-city-form');
const submitAddCityButton = document.querySelector('#submit-add-city-button');

toggleForm(addCityButton, addCityForm);

submitAddCityButton.addEventListener('click', e => {
  e.preventDefault();

  const newName = document.querySelector('#city-name-input').value;
  const newDescription = document.querySelector(
    '#city-description-input'
  ).value;

  let newImage = images.filter(img => img.includes(newName.toLowerCase()));
  newImage.length === 0
    ? (newImage = NOT_FOUND_IMAGE_URL)
    : (newImage = newImage[0]);

  const newCity = {
    name: newName,
    img: newImage,
    description: newDescription,
  };

  createCity(newCity);
  alert(`The city ${newName} was created successfully`);
});

// Update city

const updateCityButton = document.querySelector('#update-city-button');
const searchCityForm = document.querySelector('#search-city-form');
const submitSearchCityButton = document.querySelector(
  '#submit-search-city-button'
);
const submitUpdateCityButton = document.querySelector(
  '#submit-update-city-button'
);

toggleForm(updateCityButton, searchCityForm);

const updateCityForm = document.querySelector('#update-city-form');
let cityToUpdate;

submitSearchCityButton.addEventListener('click', async e => {
  e.preventDefault();

  const name = document.querySelector('#city-name-input-to-search').value;
  const cities = await getCities();
  cityToUpdate = cities.find(e => e.name.toLowerCase() === name.toLowerCase());

  if (cityToUpdate) {
    updateCityForm.classList.remove('hidden');
    updateCityForm.classList.add('show');

    let currentName = document.querySelector('#city-name-input-to-update');
    let currentDescription = document.querySelector(
      '#city-description-input-to-update'
    );

    // the information in the DB is loaded in the form
    currentName.value = cityToUpdate.name;
    currentDescription.value = cityToUpdate.description;

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
    img: cityToUpdate.img,
    description: updatedDescription,
  };

  updateCity(cityToUpdate.id, updatedCity);
  alert(`The city ${updatedCity.name} was updated successfully`);
});

// Delete city

const deleteCityButton = document.querySelector('#delete-city-button');
const deleteCityForm = document.querySelector('#delete-city-form');
const submitDeleteCityButton = document.querySelector(
  '#submit-delete-city-button'
);

toggleForm(deleteCityButton, deleteCityForm);

submitDeleteCityButton.addEventListener('click', async e => {
  e.preventDefault();

  const name = document.querySelector('#city-name-input-to-delete').value;
  const cities = await getCities();
  let foundCity = cities.find(e => e.name.toLowerCase() === name.toLowerCase());

  if (foundCity) {
    deleteCity(foundCity.id);
    alert(`The city ${foundCity.name} was deleted successfully`);
  } else {
    alert(`The city ${name} was not found`);
    document.querySelector('#delete-city-form').reset();
  }
});
