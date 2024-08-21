function sidebarMenu() {
    let sidebar = document.querySelector(".sidebar-menu")
    let menuBtn = document.querySelector(".menu")
    let cancelBtn = document.querySelector(".cancel")



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
    let cancelBtn = document.querySelector(".cancel-2")
    let searchBtn = document.querySelector(".search")
    let searchBox = document.querySelector(".search-box")

    console.log(searchBox.style.right)

    if (searchBox.style.right === "1820px" || searchBox.style.right === "") {
        searchBox.style.left = "93px"
        cancelBtn.style.display = "block"
        searchBtn.style.display = "none"
    } else {
        searchBox.style.right = "1820px"
        cancelBtn.style.display = "none"
        searchBtn.style.display = "block"
    }


}

