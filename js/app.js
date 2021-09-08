/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.getElementsByTagName('section');
const navList = document.getElementById('navbar__list');
const navBar = document.querySelector('.navbar__menu');
let navBarHeight;
let contentHeight;
let navLinks;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function isScrolledIntoView(element) {
  const rect = element.getBoundingClientRect();
  const elementTop = rect.top;
  const elementBottom = rect.bottom;
  contentHeight = window.innerHeight - navBarHeight;

  // element is active while its top is sitting above 50% of window height and it's bottom is below the 50% window height
  const isVisible = elementTop < contentHeight - (contentHeight / 2) + navBarHeight && elementBottom >= contentHeight / 2 + navBarHeight;
  return isVisible;
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav() {
  const docFrag = document.createDocumentFragment();

  for (const section of sections) {
    const navItem = document.createElement('li');
    navItem.innerHTML = '<a class="menu__link" id="' + section.id + '">' + section.dataset.nav + '</a>';
    docFrag.appendChild(navItem);
  }

  navList.appendChild(docFrag);
  navLinks = document.getElementsByClassName('menu__link');
  navBarHeight = navBar.clientHeight;
}

// Add class 'active' to section when near top of viewport
function setActiveSection() {
  for (const section of sections) {
    if (isScrolledIntoView(section)) {
      section.classList.add('active-section');
    }
    else {
      section.classList.remove('active-section');
    }
  }
}

// Scroll to anchor ID
function scrollToSection(sectionID) {
  const selectedSection = document.querySelector(`section#${sectionID}`);
  const y = selectedSection.getBoundingClientRect().top + window.scrollY - navBarHeight - 20;
  window.scroll({ top: y, behavior: 'smooth' });
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNav();

// Scroll to section on link click
for (const navLink of navLinks) {
  navLink.addEventListener('click', function () {
    scrollToSection(navLink.id);
  });
}

// Set sections as active
document.addEventListener('scroll', setActiveSection);


