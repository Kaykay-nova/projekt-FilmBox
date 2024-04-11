const menuBtn = document.querySelector('#menu-tlacitko');
const menuPolozky = document.querySelector('#menu-polozky');
const icon = document.querySelector('i');

menuBtn.addEventListener('click', () => {
  menuPolozky.classList.toggle('show')
  if (menuPolozky.classList.contains('show')) {
    icon.className = 'fas fa-xmark'
  } else {
    icon.className = 'fas fa-bars'
  }
});



