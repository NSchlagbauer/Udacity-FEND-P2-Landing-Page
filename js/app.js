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

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const startTime = performance.now();

const docFrag = document.createDocumentFragment();

for (const section of sections) {
  const navItem = document.createElement('li');
  navItem.innerHTML = '<a class="menu__link">' + section.dataset.nav + '</a>';
  docFrag.appendChild(navItem);
}

navList.appendChild(docFrag);

const endTime = performance.now();
const timeSpan = endTime - startTime;
console.log('This took ' + timeSpan + 'ms');

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


