document.addEventListener('DOMContentLoaded', () => {
  let starOne = document.querySelector('.jumbotron__star-one');
  let starTwo = document.querySelector('.jumbotron__star-two');
  let starThree = document.querySelector('.work-flow__star');

  const starAnimation = {
    transform: [
      'scale(1, 1)',
      'scale(0, 0)',
      'scale(1, 1)'
    ],
    easing: 'linear',
  };

  starOne.animate(starAnimation, {
    duration: 4000,
    iterations: Infinity,
  });

  starTwo.animate(starAnimation, {
    duration: 6000,
    iterations: Infinity,
  });

  starThree.animate(starAnimation, {
    duration: 5000,
    iterations: Infinity,
  });

  let iceberg = document.querySelector('.work-flow__iceberg');
  const icebergAnimation = {
    transform: [
      'translate(-50%, -50%)',
      'translate(-50%, -51.5%)',
      'translate(-50%, -50%)'
    ],
    easing: 'ease-in-out',
  };
  iceberg.animate(icebergAnimation, {
    duration: 8000,
    iterations: Infinity,
  });

  let eskimo = document.querySelector('.work-flow__eskimo');
  const eskimoAnimation = {
    transform: [
      'translate(0, 0)',
      'translate(0, 2%)',
      'translate(0, 0)',
    ],
    easing: 'ease-in-out',
  };
  eskimo.animate(eskimoAnimation, {
    duration: 8000,
    iterations: Infinity,
  });

  let waves = document.querySelector('.work-flow__waves');
  const wavesAnimation = {
    transform: [
      'skewY(1.5deg)',
      'skewY(0deg)',
      'skewY(1.5deg)',
    ],
    easing: 'ease-in-out',
  };
  waves.animate(wavesAnimation, {
    duration: 4000,
    iterations: Infinity,
  });

  let waveTop = document.querySelector('.work-flow__wave-top');
  const waveTopAnimation = {
    transform: [
      'translate(-100%, 0)',
      'translate(100%, 0)',
    ],
    easing: 'ease-in-out',
  };
  waveTop.animate(waveTopAnimation, {
    duration: 12000,
    iterations: Infinity,
  });
}, false);
