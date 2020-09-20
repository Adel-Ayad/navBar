
var navList = document.getElementById("navbar__list"),
    sections = document.getElementsByTagName("section"),
    linksOfSectionsToScrollTo;
const logo = document.querySelector('.logo');

// automaticallyl create an anchor tag inside a list item tag and append the to the nav list
function creatingNavBarAuto() {
    "use strict";

    let section,
        sectionNum = 1;
    for (section of sections) {

        let sectionName = section.getAttribute('data-nav'),
            li = document.createElement("li"),                              // for each section create a list item
            a = document.createElement("a"),                                // for each section create an anchor
            id = section.getAttribute('id');
        a.classList.add('menu__link', `section${sectionNum}`);
        //adding some classes to create anchor the 1st for styling and scroll func while the 2nd for Highlighting of nav bar links
        sectionNum = sectionNum + 1;
        a.textContent = sectionName;                                        //using section data-nav to make anchor text
        a.setAttribute('href', `#${id}`);                                   //using section id to make anchor href

        li.appendChild(a);                                                  // append the ancher to the list item
        navList.appendChild(li);                                            // append the list item to the nav bar list


    }
}
creatingNavBarAuto();
// highlight the section that is on the screen view and highlight it equivelent nav item (link)

const sectionsToObserve = document.querySelectorAll("section")
const options = {                                                                     // select the proparties & margins of the virtual viewPort
    root: null,
    threshold: 0.2,
    rootMargin: "-195px 0px -195px 0px"
};
const observer = new IntersectionObserver(function                                                      //Make the Observer Function
    (entries, observer) {

    entries.forEach(entry => {
        if (!entry.isIntersecting) {                                                                     //if sections are not in the viewPort
            entry.target.classList.remove('active-section');                                             //remove the highlight from them
            // console.log("active class removed from " + entry.target.getAttribute("id"))
            document.querySelector(`.${entry.target.getAttribute("id")}`).classList.remove('active-link'); //and from their equivelent links
            return;
        }
        else {                                                                                              //if section is in the viewPort
            entry.target.classList.add('active-section');                                                //add the highlight to them
            // console.log("active class added to " + entry.target.getAttribute('id'));
            document.querySelector(`.${entry.target.getAttribute("id")}`).classList.add('active-link');    //and to their equivelent links
        }
    });
}
    , options);
sectionsToObserve.forEach(section => {
    observer.observe(section);                                                  //Call the Observer Function
});



//smooth scrolling
function smoothScroll() {
    //Hit any item in the Nav Bar to Scroll to its Equivelent Section
    linksOfSectionsToScrollTo = document.querySelectorAll('.menu__link');
    linksOfSectionsToScrollTo.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();                                        // Prventing if the link hit , jump to the equivelent section
            document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: "smooth" }); //scroll instead

        });
    })
    //Hit the Logo to scroll smoothly to the Top of the Page
    logo.addEventListener('click', () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    })
}

smoothScroll();



//Making a Compatible nav menu to the Moblile Style
function menuSlide() {
    const menuLines = document.querySelector('.menu__lines');
    const menu = document.querySelector('.navbar__list');
    const menuItems = document.querySelectorAll('.menu__link');


    // hit item menu button (burger button) to show or hide the menu list 
    menuLines.addEventListener('click', function () {
        // hide and show menu bar
        menu.classList.toggle('show__menu');


        //animate menu items
        menuItems.forEach((item, index) => {
            if (item.style.animation) {
                item.style.animation = ``                                 // if items is already appeared (animated in)=> make it disappear
            }
            else {
                item.style.animation = `menu__items__fade 0.5s ease forwards ${index / 7 + 0.5}s`; // if items is hiddens, apears items by animated way with @keyframe which is coded in css file

            }
        });
        menuLines.classList.toggle('active__menu__lines');               // animate item menu button (burger button) as coded in the stylesheet
    });


    // if an item is choosen , hide the menu list and disanimate(hide) items and disanimate item menu button (burger button)
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.toggle('show__menu');                         //hide the menu list
            menuLines.classList.toggle('active__menu__lines');           //disanimate item menu button (burger button)
            menuItems.forEach((item) => {                                //disanimate(hide) items
                if (item.style.animation) {
                    item.style.animation = ``
                }

            });

        });
    });
}
menuSlide();


//console.log(linksOfSectionsToScrollTo);








/*function scroll() {
    linksOfSectionsToScrollTo = document.querySelectorAll('.menu__link');
    console.log(linksOfSectionsToScrollTo)
    for (link of linksOfSectionsToScrollTo) {
        let elmthref = link.getAttribute('href');
        console.log(elmthref);
        //element_to_scroll_to.scrollIntoView();
    }
}

scroll();
var link;
linkOfSectionToScrollTo = document.querySelectorAll('.menu__link');
forEach {
    link = linkOfSectionToScrollTo[i];

    link.addEventListener('click', function () {
        pr
        console.log(link);
        window.scrollTo(0, link.getBoundingClientRect().top);
    });
}
console.log(linkOfSectionToScrollTo);*/



/*let scrollSecS = document.querySelectorAll('.menu__link'),
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


