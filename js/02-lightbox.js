import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryElem = document.querySelector('.gallery__image');

galleryElement.insertAdjacentHTML('beforeend', fooGallery(galleryItems).join(''));

    // displaying elements in the browser
        
    const galleryElement = document.querySelector('.gallery');

    galleryElement.insertAdjacentHTML('beforeend', galleryFunc(galleryItems).join(''));
  
   
    function galleryFunc(arr) {
      return arr.map(({ preview, original, description }) => `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source = "${original}"
            alt="${description}"
          />
        </a>
      </li>  `);
    };
  
  
  galleryElement.addEventListener('click', onClick);
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

