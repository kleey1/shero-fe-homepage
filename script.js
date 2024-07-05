/*document.addEventListener('DOMContentLoaded', function () {
    const config = {
        type: 'carousel',
        perView: 2,
        600: {
            perView: 1
        }
    }
    new Glide(".glide", config).mount();
});*/

const config = {
    type: 'carousel',
    perView: 2,
    600: {
        perView: 1
    }
}

let glide = null;

function applyFlexStyles() {
  document.querySelectorAll('.glide__slides').forEach(slides => {
    slides.style.display = 'flex';
    slides.style.flexDirection = 'column';
    slides.style.alignItems = 'center';
      slides.style.justifyContent = 'space-between';
      slides.style.marginRight = '0';
      
  });
}

function removeFlexStyles() {
  document.querySelectorAll('.glide__slides').forEach(slides => {
    slides.style.display = '';
    slides.style.flexDirection = '';
    slides.style.alignItems = '';
    slides.style.justifyContent = '';
    slides.style.height = '';
    slides.style.textAlign = '';
  });
}

function initializeGlide() {
  glide = new Glide(".glide", config).mount();
  glide.mount();
}

function destroyGlide() {
  if (glide) {
    glide.destroy();
    glide = null;
  }
}

function checkScreenWidth() {
  if (window.innerWidth <= 600) {
    destroyGlide();
    applyFlexStyles();
  } else {
    removeFlexStyles();
    if (!glide) {
      initializeGlide();
    }
  }
}

// Initial check
checkScreenWidth();

// Handle resize event
window.addEventListener('resize', checkScreenWidth);