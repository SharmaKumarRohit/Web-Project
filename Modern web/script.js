let open_menu = document.querySelector("#open_menu");
let close_menu = document.querySelector("#close_menu");
let menu = document.querySelector("div.menu");

open_menu.addEventListener('click', () => {
    menu.classList.remove("menu");
})

close_menu.addEventListener('click', () => {
    menu.classList.add("menu");
})