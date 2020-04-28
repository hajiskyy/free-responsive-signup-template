const sideNav = document.querySelector('.side-nav');
const icons = document.querySelectorAll('.side-nav-control');



icons.forEach(icon => {
 icon.addEventListener('click', () => {
  if(!sideNav.classList.contains('slide-in')){
   sideNav.classList.add('slide-in');
  } else {
   sideNav.classList.remove('slide-in');
  }
 })
 
})
