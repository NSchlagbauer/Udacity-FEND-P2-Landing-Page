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

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function isScrolledIntoView(element) {
  const rect = element.getBoundingClientRect();
  const elementTop = rect.top;
  const elementBottom = rect.bottom;
  const navBarHeight = navBar.clientHeight;
  const contentHeight = window.innerHeight - navBarHeight;


  console.log('contentHeight: ' + contentHeight);

// element is active while its top is sitting above 50% of window height and it's bottom is below the 50% window height
  const isVisible = elementTop < contentHeight-(contentHeight/2)+navBarHeight && elementBottom >= contentHeight/2+navBarHeight;
  return isVisible;
}

document.addEventListener('scroll', checkVisibleSection);

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const docFrag = document.createDocumentFragment();

for (const section of sections) {
  const navItem = document.createElement('li');
  navItem.innerHTML = '<a class="menu__link">' + section.dataset.nav + '</a>';
  docFrag.appendChild(navItem);
}

navList.appendChild(docFrag);

// Add class 'active' to section when near top of viewport
function checkVisibleSection () {
  for (const section of sections) {
    if (isScrolledIntoView(section)) {
      section.classList.add('active-section');
      console.log('Element ' + section.id + ' is active');
    }
    else {
      section.classList.remove('active-section');
    }  
}

}

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


