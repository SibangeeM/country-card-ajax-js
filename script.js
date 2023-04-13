'use strict';

// const btn = document.querySelector('.btn-search');
const countriesContainer = document.querySelector('.countries');
const input = document.getElementById('query');
const form = document.querySelector('form');
///////////////////////////////////////
const c = function (country) {
  const request = new XMLHttpRequest(); // first to do AJAX calls

  request.open('GET', `https://restcountries.com/v2//name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(request.responseText);

    console.log([data]);
    const card = `<article class="country">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>`;
    countriesContainer.insertAdjacentHTML('beforeend', card);
    countriesContainer.style.opacity = 1;
  });
};

form.addEventListener('submit', function (e) {
  console.log('ok');
  e.preventDefault();
  const country = input.value;
  c(country);
  input.value = '';
});
