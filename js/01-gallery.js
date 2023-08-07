
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
              data-source="${original}"
              src="${preview}"
              alt="${description}"
            />
          </a>
        </li>
      `;
    });
}

galleryElement.insertAdjacentHTML('beforeend', fooGallery(galleryItems).join(''));
galleryElement.addEventListener('click', onClick);


                  //delegation ul.gallery and open modal window

function onClick(evt) {
if (evt.target === evt.currentTarget)
return;
 evt.preventDefault();


   const originalImg = evt.target.dataset.source;

 
    const instance = basicLightbox.create(`<img src="${originalImg}">`);
    instance.show();


galleryElement.addEventListener('keydown', onClose);
function onClose(evt) {
  const Escape = "Escape" 
  if (evt.code === Escape) {
instance.close();
  }
}
 };
