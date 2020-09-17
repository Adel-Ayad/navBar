
var navList = document.getElementById("navbar__list"),
    sections = document.getElementsByTagName("section");

function creatingNavBarAuto() {
    "use strict";
    
    let section,
        sectionNum = 1;
    for (section of sections){
        //let id = section.getAttribute('id');
        let sectionName = section.getAttribute('data-nav'),
            li = document.createElement("li");
        li.textContent = sectionName;
        li.setAttribute('id', sectionNum);
        sectionNum = sectionNum + 1;
        navList.append(li);}
        
}
creatingNavBarAuto();
function scrolling (){document.getElementById('section3').scrollIntoView(true);}

//scrolling();


//function creatingAndAddingNavLIs ()

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


