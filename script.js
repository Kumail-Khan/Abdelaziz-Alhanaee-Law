// varables
let sidebar = document.querySelector(".sidebar-menu");
let menuBtn = document.querySelector(".menu");
let cancelBtn = document.querySelector(".cancel");
let cancelBtn2 = document.querySelector(".cancel-2");
let searchBtn = document.querySelector(".search");
let searchBox = document.querySelector(".search-box");

// functions
function sidebarMenu() {
  if (sidebar.style.left === "-560px" || sidebar.style.left === "") {
    sidebar.style.left = "0px";
    cancelBtn.style.display = "block";
    menuBtn.style.display = "none";
  } else {
    sidebar.style.left = "-560px";
    cancelBtn.style.display = "none";
    menuBtn.style.display = "block";
  }
}

function searchBoxFunction() {
  console.log(searchBox.style.right);

  if (searchBox.style.left === "-1820px" || searchBox.style.right === "") {
    searchBox.style.left = "93px";
    cancelBtn2.style.display = "block";
    searchBtn.style.display = "none";
  } else {
    searchBox.style.left = "-1820px";
    cancelBtn2.style.display = "none";
    searchBtn.style.display = "block";
  }
}

// footer slide functions
{
  let sliderImages = document.querySelectorAll("img");
  let dots = document.querySelectorAll(".dots");

  var counter = 0;

  // slide next
  function slideNext() {
    sliderImages[counter].style.animation = "next1 0.5s ease-in forwards";
    if (counter >= sliderImages.length - 1) {
      counter = 0;
    } else {
      counter++;
    }
    if (counter === 3) {
      counter = 0;
    }
    sliderImages[counter].style.animation = "next2 0.5s ease-in forwards";
  }

  // slide back
  function slidePrev() {
    sliderImages[counter].style.animation = "prev1 0.5s ease-in forwards";
    if (counter == 0) {
      counter = sliderImages.length - 1;
    } else {
      counter--;
    }
    sliderImages[counter].style.animation = "prev2 0.5s ease-in forwards";
  }

  // auto slide
  function autoSlide() {
    deletInterval = setInterval(timer, 4000);
    function timer() {
      slideNext();
      indicators();
    }
  }
  autoSlide();

  // stop + resume auto scroll
  const slideContainer = document.querySelector(".header-right");
  slideContainer.addEventListener("mouseover", () => {
    clearInterval(deletInterval);
  });
  slideContainer.addEventListener("mouseout", autoSlide);

  // indeicators dots logic
  function indicators() {
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[counter].className += " active";
  }

  // indicators click event
  function switchImage(currentImage) {
    currentImage.classList.add("active");
    var imageId = currentImage.getAttribute("attr");
    if (imageId > counter) {
      sliderImages[counter].style.animation = "next1 0.5s ease-in forwards";
      counter = imageId;
      sliderImages[counter].style.animation = "next2 0.5s ease-in forwards";
    } else if (imageId == counter) {
      return;
    } else {
      sliderImages[counter].style.animation = "prev1 0.5s ease-in forwards";
      counter = imageId;
      sliderImages[counter].style.animation = "prev2 0.5s ease-in forwards";
    }
  }
  indicators();
}
// footer slide functions end

// testamonial slide function
{
  let testamonialSlides = document.querySelectorAll(".testamonial-info");
  let dots = document.querySelectorAll(".indicator");

  var counter = 0;

  function slideNext() {
    testamonialSlides[counter].style.animation = "next1 0.5s ease-in forwards";
    if (counter >= testamonialSlides.length - 1) {
      counter = 0;
    } else {
      counter++;
    }
    if (counter === 5) {
      counter = 0;
    }
    testamonialSlides[counter].style.animation = "next2 0.5s ease-in forwards";
  }
  function slidePrev() {
    testamonialSlides[counter].style.animation = "prev1 0.5s ease-in forwards";
    if (counter == 0) {
      counter = testamonialSlides.length - 1;
    } else {
      counter--;
    }
    testamonialSlides[counter].style.animation = "prev2 0.5s ease-in forwards";
  }

  // indicators logic
  function indeicators() {
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[counter].className += " active";
  }

  // indicators click event
  function switchImage(currentImage) {
    currentImage.classList.add("active");
    var imageId = currentImage.getAttribute("attr");
    if (imageId > counter) {
      testamonialSlides[counter].style.animation =
        "next1 0.5s ease-in forwards";
      counter = imageId;
      testamonialSlides[counter].style.animation =
        "next2 0.5s ease-in forwards";
    } else if (imageId == counter) {
      return;
    } else {
      testamonialSlides[counter].style.animation =
        "prev1 0.5s ease-in forwards";
      counter = imageId;
      testamonialSlides[counter].style.animation =
        "prev2 0.5s ease-in forwards";
    }
  }
  indeicators();

  function autoSlide() {
    let deletInterval = setInterval(timer, 2000);
    function timer() {
      slideNext();
      indeicators();
    }
  }
  autoSlide();
}
// testamonial slide function end

// numbers of clients
const counterFun = () => {
  let client = document.getElementById("client");
  let counter = 0;

  setInterval(() => {
    if (counter === 500) {
      clearInterval();
    } else {
      counter += 10;
      client.innerHTML = counter;
    }
  }, 15);
  {
    let experience = document.getElementById("experience");
    let counter = 0;

    setInterval(() => {
      if (counter === 15) {
        clearInterval();
      } else {
        counter += 1;
        experience.innerHTML = counter;
      }
    }, 65);
  }
};
// numbers of clients end

const aboutUsSection = document.getElementById("aboutUsSection").offsetTop;

document.addEventListener("scroll", (e) => {
  const scrollTop = window.scrollY;

  if (scrollTop > aboutUsSection) {
    counterFun();
  }
});
