document.addEventListener('DOMContentLoaded', () => {
  let elem = document.querySelector('.iceberg__iceberg');
  let animation = elem.animate({
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
}, false);
