

function mainFunction() {
    creatingNavBarAuto();
    highlightSection();
    sectionScroll();
    logoPageScroll();
    menuSlide();
}
mainFunction();




// AUTOMATICALLYL CREATE AN ANCHOR TAG INSIDE A LIST ITEM TAG AND APPEND THE TO THE NAV LIST
function creatingNavBarAuto() {
    "use strict";

    const navList = document.getElementById("navbar__list"),
        sections = document.getElementsByTagName("section");
    let sectionNum = 1,
        section;

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



// HIGHLIGHT THE SECTION THAT IS ON THE SCREEN VIEW AND HIGHLIGHT IT EQUIVELENT NAV ITEM (LINK)
function highlightSection() {
    const sectionsToObserve = document.querySelectorAll("section");
    const options = {                                                                     // select the proparties & margins of the virtual viewPort
        root: null,
        threshold: 0.2,
        rootMargin: "-200px 0px -200px 0px"
    };
    const observer = new IntersectionObserver(function                                                      //Make the Observer Function
        (entries) {

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
    }, options);
    sectionsToObserve.forEach(section => {
        observer.observe(section);                                         //Call the Observer Function To Observe each Section
    });
}

//SMOOTH SCROLLING
//HIT ANY ITEM IN THE NAV BAR TO SCROLL TO ITS EQUIVELENT SECTION
function sectionScroll() {

    const linksOfSectionsToScrollTo = document.querySelectorAll('.menu__link');
    linksOfSectionsToScrollTo.forEach(link => {

        link.addEventListener('click', function (event) {
            event.preventDefault();                                        // Prventing if the link hit , jump to the equivelent section
            const equivelentSection = document.querySelector(link.getAttribute('href'));

            equivelentSection.scrollIntoView({ behavior: "smooth" }); //scroll instead

        });


    });
}
//HIT THE LOGO TO SCROLL SMOOTHLY TO THE TOP OF THE PAGE
function logoPageScroll() {
    const logo = document.querySelector('.logo');
    logo.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });
}


//MAKING A COMPATIBLE NAV MENU TO THE MOBLILE STYLE
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
                item.style.animation = ``;                                // if items is already appeared (animated in)=> make it disappear
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
                    item.style.animation = ``;
                }

            });

        });
    });
}







