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

function updateFooter() {
  const footer = document.querySelector('.footer');
  const footerMobile = document.querySelector('.footer-mobile');  if (window.innerWidth < 600) {
      // Change footer to mobile version
      footer.style.display = 'none';
      footerMobile.style.display = 'flex';
  } else {
    footer.style.display = 'flex';
    footerMobile.style.display = 'none';
  }
}

function updateNavbar() {
  const nav = document.querySelector('.navbar');
  const navMobile = document.querySelector('.nav-mobile');  if (window.innerWidth < 600) {
      // Change footer to mobile version
      nav.style.display = 'none';
      navMobile.style.display = 'flex';
  } else {
    nav.style.display = 'flex';
    navMobile.style.display = 'none';
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
  updateFooter();
  updateNavbar()
}

// Initial check
checkScreenWidth();

// Handle resize event
window.addEventListener('resize', checkScreenWidth);