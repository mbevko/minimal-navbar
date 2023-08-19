let menuBtn = document.querySelector('.hamburger_menu');
let mobNav = document.querySelector('.nav_mobile_closed');
let navItem = document.querySelectorAll('.mobile_ul li');

menuBtn.addEventListener('click', () => {
  mobNav.classList.toggle("nav_mobile")
})

navItem.forEach(item => {
  item.addEventListener('click', () => {
    mobNav.classList.toggle("nav_mobile")
  })
});