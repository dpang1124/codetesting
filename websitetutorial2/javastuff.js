window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.my-picture');
    const scrollPosition = window.pageYOffset;
    // Adjust the multiplier (0.5) to control the speed of the scroll effect just putting this here for later
    parallax.style.backgroundPositionY = -scrollPosition * 0.5 + 'px';
  });

  
  
