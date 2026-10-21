import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img
          class="gallery-image"
          src="${webformatURL}"
          alt="${tags}"
          loading="lazy"
        />
      </a>
      <ul class="info">
        <li class="info-item">
          <h3>Likes</h3>
          <p>${likes}</p>
        </li>
        <li class="info-item">
          <h3>Views</h3>
          <p>${views}</p>
        </li>
        <li class="info-item">
          <h3>Comments</h3>
          <p>${comments}</p>
        </li>
        <li class="info-item">
          <h3>Downloads</h3>
          <p>${downloads}</p>
        </li>
      </ul>
    </li>
  `
    )
    .join('');

  gallery.innerHTML = markup;
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('is-visible');
}

export function hideLoader() {
  loader.classList.remove('is-visible');
}
