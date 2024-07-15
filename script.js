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
    gap: 0,
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

var searchButton = document.getElementById("search-button");
var navbarCenter = document.querySelector('.nav-center-mobile');
var navbarRight = document.querySelector('.nav-right-mobile');
var searchBtn = document.querySelector('.search-btn-mobile');
var searchInput = document.querySelector('.search-mobile');
var menuButton = document.querySelector('.menu-btn');
var information = document.getElementById('information')
var more = document.getElementById('more');

// Add an event listener for the click event
searchButton.addEventListener("click", function () {
  navbarCenter.style.display = 'none';
  navbarRight.style.display = 'none';
  searchBtn.style.display = 'none';
  searchInput.style.display = 'block';
});

menuButton.addEventListener("click", function () {
  var sideNav = document.getElementById("mySidenav");
  sideNav.classList.toggle("open");
});

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

document.addEventListener("click", function (event) {
  if (!searchInput.contains(event.target) && !searchButton.contains(event.target)) {
      // Restore the navbar-center element
      navbarCenter.style.display = 'flex';
      navbarRight.style.display = 'flex';
      searchBtn.style.display = 'block';
      // Hide the search-input element
      searchInput.style.display = 'none';
  }
});


var customerService = document.getElementById('customer-service');
var csTitle = document.getElementById('c-s-title');
csTitle.addEventListener("click", function () {
  // Check current display state
  if (customerService.style.display === "none" || customerService.style.display === "") {
    customerService.style.display = "block"; // Show the element
    csTitle.querySelector('.dropdown-icon').classList.add('fa-chevron-up');
} else {
    customerService.style.display = "none"; // Hide the element
    csTitle.querySelector('.dropdown-icon').classList.remove('fa-chevron-up');
}
});

var information = document.getElementById('information');
var infoTitle = document.getElementById('info-title');
infoTitle.addEventListener("click", function () {
  // Check current display state
  if (information.style.display === "none" || information.style.display === "") {
    information.style.display = "block"; // Show the element
    infoTitle.querySelector('.dropdown-icon').classList.add('fa-chevron-up');
} else {
    information.style.display = "none"; // Hide the element
    infoTitle.querySelector('.dropdown-icon').classList.remove('fa-chevron-up');
}
});

var more = document.getElementById('more');
var moreTitle = document.getElementById('more-title');
moreTitle.addEventListener("click", function () {
  // Check current display state
  if (more.style.display === "none" || more.style.display === "") {
    more.style.display = "block"; // Show the element
    moreTitle.querySelector('.dropdown-icon').classList.add('fa-chevron-up');
} else {
    more.style.display = "none"; // Hide the element
    moreTitle.querySelector('.dropdown-icon').classList.remove('fa-chevron-up');
}
});

// Initial check
checkScreenWidth();

// Handle resize event
window.addEventListener('resize', checkScreenWidth);