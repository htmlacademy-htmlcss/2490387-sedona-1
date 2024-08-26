const searchLink = document.querySelector('.search-link');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close-modal-button');

searchLink.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.remove('modal-close');
})

closeButton.addEventListener('click', () => {
    modal.classList.add('modal-close');
})
