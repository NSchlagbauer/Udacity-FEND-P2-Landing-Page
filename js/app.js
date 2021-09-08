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
  const rect = element.getBoundingClientRect(); //get elements position (referring all 4 sides)
  const elementTop = rect.top;
  const elementBottom = rect.bottom;
  contentHeight = window.innerHeight - navBarHeight; //calculate space of viewport minus navBar = space used to display content

  // element is visible while its top is sitting above 50% of content height and it's bottom is below the 50% content height, always considering navBarHeight as offset from top of the window
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
  const docFrag = document.createDocumentFragment(); // create document fragment so DOM only needs to be manipulated once

  for (const section of sections) { // loop through sections and create corresponding list items with anchors inside
    const navItem = document.createElement('li');
    navItem.innerHTML = '<a class="menu__link" id="' + section.id + '">' + section.dataset.nav + '</a>';
    docFrag.appendChild(navItem);
  }

  navList.appendChild(docFrag);
  navLinks = document.getElementsByClassName('menu__link'); // update navLinks since the DOM has been changed
  navBarHeight = navBar.clientHeight; //update navBarHeight after manipulating the DOM
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

// Scroll to section whose anchor has been clicked
function scrollToSection(sectionID) {
  const selectedSection = document.querySelector(`section#${sectionID}`); // search for section with the corresponding ID
  const y = selectedSection.getBoundingClientRect().top + window.scrollY - navBarHeight - 20; // determine Y position the page should scroll to
  window.scroll({ top: y, behavior: 'smooth' }); // scroll the determined Y coordinate
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNav();

// Scroll to section on link click - eventListener for anchor click
for (const navLink of navLinks) {
  navLink.addEventListener('click', function () {
    scrollToSection(navLink.id);
  });
}

// Determine active section when scrolling the page
document.addEventListener('scroll', setActiveSection);


