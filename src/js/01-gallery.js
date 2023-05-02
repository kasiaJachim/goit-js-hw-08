// Add imports above this line
import { galleryItems } from './gallery-items';
import simpleLightbox from 'simplelightbox';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const markup = galleryItems.map(
  ({ preview, original, description }) =>
    `<div class = 'gallery__item'> 
          <a class = 'gallery__link' href ='${original}'>
  <img class ='gallery__image' src='${preview}' data-source ='${original}'
  alt='${description}'/>
  </a></div>`
);

const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('afterbegin', markup.join(''));

const instance = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
