console.log("Hello wolrld");

const yearEl = document.querySelector(".year");
const currentYear =new Date().getFullYear();
yearEl.textContent = currentYear + " ";

// Make The mobile navigation works

const btnNavigationEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavigationEl.addEventListener("click", function() {
    headerEl.classList.toggle("nav-open");
}) 

/// Smooth Animation 
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function(link) {
    link.addEventListener('click', function(e) 
    {
        e.preventDefault();
        const hrefAttr = link.getAttribute('href');

        // ScrollbacktoTop;
        if(hrefAttr === "#") 
        {
            window.scrollTo(
                {top : 0,
                behaviour : "smooth"}
                )
        }

        // Scroll to other links
        else if(hrefAttr !== "#" && hrefAttr.startsWith("#") ) 
        {
            const sectionEl = document.querySelector(hrefAttr);
            sectionEl.scrollIntoView({behavior : "smooth"})
        }

        if(link.classList.contains('main-nav-link')) 
        {
            headerEl.classList.toggle("nav-open");
        }
    });
}) 

/////////////////////////////////////////////////////////////
    // STICKY NAVIGATION
/////
const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(function(entries){
    const ent = entries[0];
    if(ent.isIntersecting === false) 
    {
        document.body.classList.add("sticky");
    }
    else 
    {
        document.body.classList.remove("sticky");
    }
}, {
    //in the viewport
    root : null,
    threshold : 0,
    rootMargin : '-120px'
}) ;

obs.observe(sectionHeroEl)



function checkFlexGap()
{
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";

    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));

    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);

    if (!isSupported) document.body.classList.add("no-flexbox-gap");
}   

checkFlexGap();
