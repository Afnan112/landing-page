var bur_link = document.getElementsByClassName("bur-link")[0]
var menu = document.getElementsByClassName("menu")[0]
bur_link.addEventListener("click", () => {
    menu.classList.toggle("active")
})