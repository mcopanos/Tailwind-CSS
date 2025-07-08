// standard IIFE
(function () {
  const navLinks = ['about', 'our food', 'order online', 'contact'];
  const footerLinks = ['contact', 'print menus', 'buy gift card', 'join our team'];
  const ul = document.querySelector('#navbar');
  
  const navbar = navLinks.map(link => {
    const a = document.createElement('a');
    const li = document.createElement('li');
    li.innerHTML = link;
    li.classList.add('hover:text-amber-500/75', 'cursor-pointer', 'capitalize');
    a.appendChild(li); 
    ul.appendChild(a);
  });

  /* SLIDER IMAGES */
  
  // store slider images
  let images = ['breakfast-slide1', 'breakfast-slide2', 'breakfast-slide3', 'breakfast-slide4', 'breakfast-slide5', 'breakfast-slide6', 'breakfast-slide7', 'breakfast-slide8', 'breakfast-slide9', 'breakfast-slide10'];
  
  // display images
  images.map(image => {
    let listItems = document.querySelector('.glide__slides');
    let listItme = document.createElement('li');
    listItme.classList.add('glid__slide');
    let img = document.createElement('img');
  
    img.src = `images/slider-images/${image}.jpg`;
    img.classList.add('w-120', 'h-100', 'object-cover');
    listItme.appendChild(img);
    listItems.appendChild(listItme);
  });

  /* IMAGE SLIDESHOW */
  
  new Glide('.glide', {
    type: 'slider',
    rewind: true,
    autoplay: 3000,
    hoverpause: true,
    startAt: 0,
    perView: 4
  }).mount();

  /* Footer */

  // show footer links
  const footer = document.querySelector('#footer');

  footerLinks.map(link => {
    const a = document.createElement('a');
    const li = document.createElement('li');
    li.innerHTML = link;
    li.classList.add('hover:text-amber-500/75', 'cursor-pointer', 'capitalize');
    a.appendChild(li); 
    footer.appendChild(a);
  });

})();
