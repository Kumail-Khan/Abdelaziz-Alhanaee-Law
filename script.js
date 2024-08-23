// varables
let sidebar = document.querySelector(".sidebar-menu")
let menuBtn = document.querySelector(".menu")
let cancelBtn = document.querySelector(".cancel")
let cancelBtn2 = document.querySelector(".cancel-2")
let searchBtn = document.querySelector(".search")
let searchBox = document.querySelector(".search-box")

// functions
function sidebarMenu() {
    if (sidebar.style.left === "-560px" || sidebar.style.left === "") {
        sidebar.style.left = "0px"
        cancelBtn.style.display = "block"
        menuBtn.style.display = "none"
    } else {
        sidebar.style.left = "-560px"
        cancelBtn.style.display = "none"
        menuBtn.style.display = "block"
    }
}

function searchBoxFunction() {
    console.log(searchBox.style.right)

    if (searchBox.style.left === "-1820px" || searchBox.style.right === "") {
        searchBox.style.left = "93px"
        cancelBtn2.style.display = "block"
        searchBtn.style.display = "none"
    } else {
        searchBox.style.left = "-1820px"
        cancelBtn2.style.display = "none"
        searchBtn.style.display = "block"
    }
}

// slide functions
var slideIdx = 1;
showSlides(slideIdx);

function currentSlide(n) {
    showSlides(slideIdx = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide-area")
    var dots = document.getElementsByClassName("fa-circle")
    if (n > slides.length) {
        slideIdx = 1
    }
    if (n < 1) {
        slideIdx = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    for (let i = 0; i < slides.length; i++) {
        dots[i].className = dots[i].className.replace("active", "")
    }
    slides[slideIdx - 1].style.display = "block"
    dots[slideIdx - 1].className += " active";
}

// auto slides

var slideIdx = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide-area")
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    slideIdx++;
    if (slideIdx > slides.length) {
        slideIdx = 1
    }
    slides[slideIdx - 1].style.display = "block";
    setTimeout(showSlides, 2000)
}