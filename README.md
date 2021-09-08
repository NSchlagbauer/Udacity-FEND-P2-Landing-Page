# Landing Page Project

## Table of contents

* [Project Title](#project-title)
* [Table of contents](#table-of-contents)
* [Project Desctiption](#project-description)
* [Installation](#installation)
* [Code Description](#code-description)
   * [Global constants and variables](#constants-variables)
   * [Building navigation menu](#building-navigation-menu)
   * [Check which section is the one being viewed](#check-viewed-section)
   * [Set active class for the section currently being viewed](#set-active-section)
   * [Scroll to the corresponding section when clicking on a navigation item](#scroll-to-active-section)
* [Dependencies](#dependencies)

## Project Description
[(Back to top)](#table-of-contents)

Based on the given landing page from Udacity, this project implemented basic DOM manipulation, including dynamic generation of nodes, appending them to a parent, adding/removing classes and scrolling to certain sections when a click on a navigation item happens.

## Installation
[(Back to top)](#table-of-contents)

To use this project, simply clone this repository and start editing at your hearts content!
To see your changes, simply open index.html in the browser of your choice.

## Code description
[(Back to top)](#table-of-contents)

### Global constants and variables
[(Back to top)](#table-of-contents)

sections: all elements with tagname <section> that are present on the page.
navList: the unsorted list in the navigation menu which will contain the different navigation items.
navBar: the container of navList, represents the whole nav menu on the top of the page.
navBarHeight: the clientHeight of navBar. Used to calculate remaining viewport space.
contentHeight: the space which is available to display content.
navLinks: all anchors in the navigation menu. Used to add eventListeners to all of them.

### Building navigation menu
[(Back to top)](#table-of-contents)

The function buildNav(); searches for all sections on the page, creates list items with anchors for each of them and appends them to a document fragment. After that, the document fragment is appended to the navigation list.
Lastly, the function calculates the height of the naviagtion menu for further usage.

### Check which section is the one being viewed
[(Back to top)](#table-of-contents)

The function isScrolledIntoView(element) checks if the provded element (in this case, a section of the page) is currently being viewed by the user.
To achieve this, the function determines whether the elements top border is on the top half of contentHeight AND if the bottom border of the given element is on the lower half of contentHeight. The function returns a boolean value - 'true' means the element is currently visible, 'false' means it isn't.

### Set active class for the section currently being viewed
[(Back to top)](#table-of-contents)

The function setActiveSection loops through all sections and calls the function isScrolledIntoView for each of them. If it returns true, the class 'active-section" gets added to the section element. If isScrolledIntoView returns false, the class 'active-section' gets removed.

### Scroll to the corresponding section when clicking on a navigation item
[(Back to top)](#table-of-contents)

The function scrollToSection(sectionID) looks for the element with the provided ID and looks for its position in the document. Afterwards, it substracts an offset for the height of the navigation menu and a little extra space and scrolls to the calculated Y coordinate.
I opted to write the scroll function manually instead of using href="#id-of-target" so I could implement smooth scrolling without using only JavaScript and implement an offset for the navigation menu.

## Dependencies
[(Back to top)](#table-of-contents)

None.


