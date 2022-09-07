import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(
    ({
      original,
      preview,
      description,
    }) => `<a class='gallery__link' href='${original}'>
    <img
    class='gallery__image'
    src='${preview}'
    alt='${description}'/>
    </a>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
