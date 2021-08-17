import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

// for radio inputs
const box = [...document.querySelectorAll(".select-box")];
const body = document.querySelector('body');

box.map( item => {
  const def = item.querySelector(".defaultInput~label");
  
  const optionsContainer = item.querySelector(".options-container");
  const optionsList = [...item.querySelectorAll(".option")];

  optionsContainer.addEventListener("click", (e) => {
    item.classList.toggle('active');

    document.addEventListener('click', (e)=> {
      if(!item.contains(e.target)) {
        item.classList.remove('active');
        // document.removeEventListener('click')
      }
    })
  });
  
  optionsList.forEach( option => {
    option.addEventListener("click", (e) => {
      if(option.classList.contains('defaultOption')) return;
      def.innerHTML = option.querySelector('label').innerHTML;
      def.classList.add('picked');
    });
  });
})

//for date-picker

const datesContainer = document.querySelector('.data-picker')

const dateInputDeparture = datesContainer.querySelector('#data-picker--departure')
const dateInputReturn = datesContainer.querySelector('#data-picker--return')
const dateInputReturnHeading = datesContainer.querySelector('.data-picker__heading--return')


const addReturnDate = datesContainer.querySelector('button');

let today = new Date();

let dd = today.getDate();
let mm = today.getMonth()+1;
let yyyy = today.getFullYear();

if(dd<10){
  dd='0'+dd
} 
if(mm<10){
  mm='0'+mm
}

today = `${yyyy}-${mm}-${dd}`;

document.addEventListener('DOMContentLoaded', () => {
  dateInputDeparture.valueAsDate = new Date()
  dateInputDeparture.setAttribute("min", today)

})
addReturnDate.addEventListener('click', (e)=> {
  e.preventDefault()

  dateInputReturn.style.display = 'inline-flex'
  dateInputReturnHeading.style.display = 'inline-flex'
  dateInputReturn.valueAsDate = new Date()
  datesContainer.classList.add('data-picker--smallerPadding')
  
  addReturnDate.style.display = 'none'
})

//burger 

const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector('.mobileNav');
let menuOpen = false;
menuBtn.addEventListener("click", () => {
	if (!menuOpen) {
		menuBtn.classList.add("open");
    mobileMenu.classList.add('mobileNav--open')
		menuOpen = true;
	} else {
    menuBtn.classList.remove("open");
    mobileMenu.classList.remove('mobileNav--open')
		menuOpen = false;
	}
});

//burger timeout

// jQuery(document).ready(function ($) {
// 	$(".menu-btn,.navbar-toggler").click(function () {
// 		$(this).css("pointer-events", "none");

// 		setTimeout(function () {
// 			$(".menu-btn, .navbar-toggler").css("pointer-events", "auto");
// 		}, 400);
// 	});
// });
