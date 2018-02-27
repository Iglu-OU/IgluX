document.addEventListener('DOMContentLoaded', () => {
  let iceberg = document.querySelector('.work-flow__iceberg');
  let floating = iceberg.animate({
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

  /*
  let wave = document.querySelector('.work-flow__waves');
  let continuous = wave.animate({
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
}, false);
