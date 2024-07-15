const closeBtn = document.querySelector('.close')
const menu = document.querySelector('.header__right-container')
const overlap = document.querySelector('.overlap')
const body = document.querySelector('body')
const burger = document.querySelector('.burger__menu')
const tabToday = document.querySelector('.tab__title-today')
const tabWeek = document.querySelector('.tab__title-week')
const tabMonth = document.querySelector('.tab__title-month')

burger.addEventListener('click',()=>{
	closeBtn.style.display='block';
	menu.style.top='0px';
	overlap.style.display='block'
	body.style.height='100vh'
	body.style.overflow='hidden'
})
closeBtn.addEventListener('click',()=>{
	closeBtn.style.display='none';
	menu.style.top='-700px';
	overlap.style.display='none'
	body.style.height='100%'
	body.style.overflow='auto'
})

if(window.innerWidth<561){
	tabToday.textContent='1d'
	tabWeek.textContent='7d'
	tabMonth.textContent='30d'
}