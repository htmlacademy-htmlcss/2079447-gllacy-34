const menu = document.querySelector('.navigation');
const menuBtn = document.querySelector('.navigation__btn');
const body = document.querySelector('body');
const navUserLink = document.querySelectorAll('.navigation-user-link');
const navLinkDrop = document.querySelector('.navigation-link-drop');

if (document.querySelector('.no-js')) {
  body.classList.remove('no-js');
}

if (menuBtn) {
  menuBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    menu.classList.toggle('navigation--open');
  })
}

navLinkDrop.addEventListener('click', function (item) {
  item.preventDefault();
  navLinkDrop.classList.toggle('navigation-link-drop-open');
})

navUserLink.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    if (this.classList.contains('navigation-user-link-current')) {
      item.classList.toggle('navigation-user-link-current')
    } else {
      navUserLink.forEach(el => {
        el.classList.remove('navigation-user-link-current');
      });
      item.classList.toggle('navigation-user-link-current')
    }
  })
})
