import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryElem = document.querySelector('.gallery');
const galleryItems = document.createElement('galleryItems')

const instance = basicLightbox.create(`
    <h1>Dynamic Content</h1>
    <p>You can set the content of the lightbox with JS.</p>
`);

// console.log(instance);
// instance.show();

galleryElem.insertAdjacentElement('beforeend', galleryItems);
galleryElem.addEventListener('click',onClick);

function onClick(galleryItems) {
    
}