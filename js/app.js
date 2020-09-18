
var navList = document.getElementById("navbar__list"),
    sections = document.getElementsByTagName("section"),
    linkOfSectionToScrollTo;

function creatingNavBarAuto() {
    "use strict";

    let section,
        sectionNum = 1;
    for (section of sections) {

        let sectionName = section.getAttribute('data-nav'),
            li = document.createElement("li"),
            a = document.createElement("a"),
            id = section.getAttribute('id');
        li.setAttribute('id', sectionNum);
        sectionNum = sectionNum + 1;
        a.textContent = sectionName;
        a.setAttribute('href', "#" + id);
        a.setAttribute('class', 'aSectionToBeScrolledTo');
        li.appendChild(a);
        navList.appendChild(li);

        // a.addEventListener('click', function scrollTo(hash) {
        //location.hash = "#" + hash;})
    }
}
creatingNavBarAuto();

//viewPort

const sectionsToObserve = document.querySelectorAll("section")
const options = {
    root: null,
    threshold: 0.2,
    rootMargin: "-150px"
};
const observer = new IntersectionObserver(function
    (entries, observer) {

    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            entry.target.classList.remove('your-active-class')
            console.log("active class removed from" + entry.target)
            return;
        }
        entry.target.classList.add('your-active-class')
        console.log("active class added to" + entry.target);
    });
}
    , options);
sectionsToObserve.forEach(section => {
    observer.observe(section);
});








/*function scroll() {
    linkOfSectionToScrollTo = document.querySelectorAll('.aSectionToBeScrolledTo');
    console.log(linkOfSectionToScrollTo)
    for (link of linkOfSectionToScrollTo) {
        let elmthref = link.getAttribute('href');
        console.log(elmthref);
        //element_to_scroll_to.scrollIntoView();
    }
}

//scroll();
var link;
linkOfSectionToScrollTo = document.querySelectorAll('.aSectionToBeScrolledTo');
for (i = 0; i > linkOfSectionToScrollTo.length, i += 1;) {
    link = linkOfSectionToScrollTo[i];

    link.addEventListener('click', function () {
        console.log(link);
        window.scrollTo(0, link.getBoundingClientRect().top);
    });
}
console.log(linkOfSectionToScrollTo);*/



/*let scrollSecS = document.querySelectorAll('.aSectionToBeScrolledTo'),
    scrollSec;
console.log(scrollSecs);
for (scrollSec of scrollSecS) {
    scrollSec.addEventListener('click', function () {
        console.log(scrollSec.getAttribute("id"));
    })
}*/
//function scrolling (){document.getElementById('section3').scrollIntoView(true);}

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


