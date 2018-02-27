document.addEventListener('DOMContentLoaded', () => {
  let iceberg = document.querySelector('.work-flow__iceberg');
  iceberg.animate({
    transform: [
      'translate(-50%, -50%)',
      'translate(-50%, -52.5%)',
      'translate(-50%, -50%)'
    ],
    easing: 'ease-in-out',
  }, {
    duration: 8000,
    iterations: Infinity
  });

  let eskimo = document.querySelector('.work-flow__eskimo');
  eskimo.animate({
    transform: [
      'translate(0, 0)',
      'translate(0, 2%)',
      'translate(0, 0)'
    ],
    easing: 'ease-in-out',
  }, {
    duration: 8000,
    iterations: Infinity
  });

  /*
  let wave = document.querySelector('.work-flow__waves');
  wave.animate({
    transform: [
      'scale(1, 1)',
      'scale(2, 1)',
      'scale(1, 1)'
    ],
    easing: 'linear',
  },{
    duration: 8000,
    iterations: Infinity
  });
  */

  let star = document.querySelector('.jumbotron__star');
  star.animate({
    transform: [
      'scale(1, 1)',
      'scale(0, 0)',
      'scale(1, 1)'
    ],
    easing: 'linear',
  }, {
    duration: 4000,
    iterations: Infinity
  });
}, false);
