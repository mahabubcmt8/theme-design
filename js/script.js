// Preloder >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
$(window).on('load', function () { // makes sure the whole site is loaded 
    $('#status').fadeOut(); // will first fade out the loading animation 
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(550).css({ 'overflow': 'visible' });
})

// Settings Button >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
$(".settings-btn").on('click', function () {
    var themeBox = document.querySelector('.themeBox');
    if (themeBox.style.display == "none") {
        themeBox.style.display = "inline-block";
    } else {
        themeBox.style.display = "none";
    }
});

// aos >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
AOS.init({
    duration: 1500,
});
// Cursor >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
new kursor({
    type: 2,
    removeDefaultCursor: false,
    color: '#ffd32a',
})
// Typewriter Function >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var typed = new Typed('.type', {
    strings: [
        "Graphic Deisgn...",
        "Web Design...",
        "Web Development...",
        "App Development...",
        "SEO(Search Engine Optimization)"
    ],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
});

// Tilt Animation >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
VanillaTilt.init(document.querySelector(".features-img"), {
    max: 25,
    speed: 400
});

