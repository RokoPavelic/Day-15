'use strict';

const items = [
  'bananas',
  'apples',
  'tomatos',
  'butter',
];

const listElm = document.querySelector('#list');
items.forEach((item) => {
  listElm.innerHTML += `<div class="item">${item}</div>`;
});
