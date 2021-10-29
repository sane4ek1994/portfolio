const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      links = document.querySelector('.promo__btns'),
      link = document.querySelectorAll('.promo__link'),
      counters = document.querySelectorAll('.skills__item2-number'),
      lines = document.querySelectorAll('.skills__item2-scale span');


hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

links.addEventListener('click', (e) => {
     e.preventDefault();
      if (e.target && e.target.matches('a.promo__link')) {
         link.forEach(btn => {
             btn.classList.toggle('btn');
         })
      }
});

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});



     






