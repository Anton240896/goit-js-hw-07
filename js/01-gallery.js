
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
//////////////////////////////////////////////////////////////////

                    // displaying elements in the browser
                    
  const galleryElement = document.querySelector('.gallery');

 
function fooGallery(galeryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>
      `;
    });
}
galleryElement.insertAdjacentHTML('beforeend', fooGallery(galleryItems).join(''));
galleryElement.addEventListener('click', onClick);


                  //Implementation of delegation at ul.gallery and open modal window

function onClick(evt) {
if (evt.target.nodeName !== "IMG") {
return;
  }
evt.preventDefault();
  const originalImg = evt.target.dataset.source;
  
   
   const instance = basicLightbox.create(`<img src="${originalImg}">`);
   instance.show();
}



