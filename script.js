function sidebarMenu() {
    let sidebar = document.querySelector(".sidebar-menu")
    let menu = document.querySelector(".menu")
    let cancel = document.querySelector(".cancel")

    // sidebar.style.marginLeft = "560px"
    // console.log(sidebar)

    if (sidebar.style.left === "-560px" || sidebar.style.left === "") {
        console.log(sidebar.style.left)
        sidebar.style.left = "0px"
        cancel.style.display = "block"
        menu.style.display = "none"
    }
    else {
        console.log(sidebar.style.left)
        sidebar.style.left = "-560px"
        cancel.style.display = "none"
        menu.style.display = "block"
    }


}




// let menu = document.querySelector(".menu")
// let cancel = document.querySelector(".cancel")
// let sidebarMenu = document.querySelector(".sidebar-menu")

// sidebarMenu

// menu.addEventListener("click", () => {

// })