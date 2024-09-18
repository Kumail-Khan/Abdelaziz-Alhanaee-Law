// varables
let sidebar = document.querySelector(".sidebar-menu");
let menuBtn = document.querySelector(".menu");
let cancelBtn = document.querySelector(".cancel");
let cancelBtn2 = document.querySelector(".cancel-2");
let searchBtn = document.querySelector(".search");
let searchBox = document.querySelector(".search-box");

// functions
function sidebarMenu() {
    if (sidebar.style.left === "-580px" || sidebar.style.left === "") {
        sidebar.style.left = "0px";
        cancelBtn.style.display = "block";
        menuBtn.style.display = "none";
    } else {
        sidebar.style.left = "-580px";
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
counterFun();
// numbers of clients end


// faqs dropdown function
const faqs = document.querySelectorAll(".faq")

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active')
    })
})
// faqs dropdown function end



// teams dropdown function
const faqs2 = document.querySelectorAll(".faq2")

faqs2.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active')
    })
    if (faq.classList === "active") {

    }
})
// teams dropdown function end



