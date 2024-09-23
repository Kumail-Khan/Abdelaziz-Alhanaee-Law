// varables
let sidebar = document.querySelector(".sidebar-menu");
let menuBtn = document.querySelector(".menu");
let cancelBtn = document.querySelector(".cancel");
let cancelBtn2 = document.querySelector(".cancel-2");
let searchBtn = document.querySelector(".search");
let searchBox = document.querySelector(".search-box");

// functions
function sidebarMenu() {
    if (sidebar.style.left === "-680px" || sidebar.style.left === "") {
        sidebar.style.left = "0px";
        cancelBtn.style.display = "block";
        menuBtn.style.display = "none";
    } else {
        sidebar.style.left = "-680px";
        cancelBtn.style.display = "none";
        menuBtn.style.display = "block";
    }
}

function searchBoxFunction() {
    console.log(searchBox.style.right);

    if (searchBox.style.left === "-1820px" || searchBox.style.right === "") {
        searchBox.style.left = "65px";
        cancelBtn2.style.display = "block";
        searchBtn.style.display = "none";
    } else {
        searchBox.style.left = "-1820px";
        cancelBtn2.style.display = "none";
        searchBtn.style.display = "block";
    }
}
