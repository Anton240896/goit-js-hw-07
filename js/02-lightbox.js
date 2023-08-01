import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryElement = document.querySelector('.gallery');
const galleryElem = document.querySelector('.gallery__image');
    // displaying elements in the browser
        

    function fooGallery(galeryItems) {
      return galleryItems
        .map(({ preview, original, description }) => {
          return `
            <li class="gallery__item">
              <a class="gallery__link" href="${original}">
                <img
                  class="gallery__image"
                  src="${preview}"
                  alt="${description}"
                />
              </a>
            </li>
          `;
        });
    }
    galleryElement.insertAdjacentHTML('beforeend', fooGallery(galleryItems).join(''));


            //library lightbox
   
  const lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionSelector: "img",
    captionType: "attr",
    captionsData: "alt",
    captionPosition: "bottom",
    captionClass: "",
    captionDelay: 250,
  });

