const navUserLink = document.querySelectorAll('.navigation-user-link');
const navLinkDrop = document.querySelector('.navigation-link-drop');
const contactsBtn = document.querySelector('.contacts-button');
const modal = document.querySelector('.modal-container');
const modalClose = document.querySelector('.modal-close-button');

if (contactsBtn) {
  contactsBtn.addEventListener('click', function (item) {
    item.preventDefault();
    modal.classList.add('modal-container-open');
  })
}

if (modalClose) {
  modalClose.addEventListener('click', function (item) {
    item.preventDefault();
    modal.classList.remove('modal-container-open');
  })
}

if (navLinkDrop) {
  navLinkDrop.addEventListener('click', function (item) {
    item.preventDefault();
    navLinkDrop.classList.toggle('navigation-link-drop-open');
  })
}

if (navUserLink) {
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
}
