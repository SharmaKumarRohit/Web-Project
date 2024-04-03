const open_menu = document.getElementById('open');
const close_menu = document.getElementById('close');
const menu = document.querySelector('.center');

open_menu.addEventListener('click', function() {
    menu.classList.remove('menu_items');
})

close_menu.addEventListener('click', function() {
    menu.classList.add('menu_items');
})
