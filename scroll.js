'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', (e) => {
  const section1Coords = section1.getBoundingClientRect();
  const btnScrollToCoords = btnScrollTo.getBoundingClientRect();
  console.log('Distance between top of the vieport and btnScrollTo', btnScrollToCoords.y);
  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  
  console.log('Height/Width of the viewPort', document.documentElement.clientHeight, document.documentElement.clientWidth);
  console.log('Height/Width of the vieport including scrollbar', window.innerHeight, window.innerWidth);

  // Old way to do:
  // window.scrollTo(section1Coords.x + window.pageXOffset, section1Coords.y + window.pageYOffset);
  /*
  window.scrollTo({
    left: section1Coords.x + window.pageXOffset,
    top: section1Coords.y + window.pageYOffset,
    behavior: 'smooth',
  });
  */

  // New way to do:
  section1.scrollIntoView({
    behavior: 'smooth',
    block: 'start', // 'start', 'center', 'end', 'nearest'. Defaults to 'start'
    inline: 'nearest', //  'start', 'center', 'end', 'nearest'. Defaults to 'nearest'. 
  });

});

// Version 1:

