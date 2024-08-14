'use strict';

//we store it into a model
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModdal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');
//console.log(btnsShowModal);

//it shows each of btnsShowModel value
//for loop muzeme pouzit, pokud mame vsechny stejne objekty, aby delaly to same

const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  // za hidden nepiseme tecku, protoze to je jenom pro selektor. Tedy odstranime hidden
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//ZOBRAZENI OKNA
for (let i = 0; i < btnsShowModal.length; i++)
  btnsShowModal[i].addEventListener('click', showModal);

// ZAVRENI OKNA
btnCloseModdal.addEventListener('click', closeModal);
//POKUD KLIKNEME JINAK NEZ NA OKNO TAK SE TAKY ZAVRE
overlay.addEventListener('click', closeModal);

// ZAVRENI POMOCI KEY ESCAPE
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
