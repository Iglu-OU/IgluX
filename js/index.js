document.addEventListener('DOMContentLoaded', () => {
  let iceberg = document.querySelector('.work-flow__iceberg');
  iceberg.animate({
    transform: [
      'translate(-50%, -50%)',
      'translate(-50%, -51.5%)',
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

  let wave = document.querySelector('.work-flow__wave-top');
  wave.animate({
    transform: [
      'translate(-100%, 0)',
      'translate(100%, 0)',
    ],
    easing: 'ease-in-out',
  }, {
    duration: 12000,
    iterations: Infinity
  });

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
