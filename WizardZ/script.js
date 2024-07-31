// ############### for header scroll animation ####################
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if(this.scrollY >= 50) {
        header.style.boxShadow = '0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12)';
    }
    else {
        header.style.boxShadow = 'none';
    }
})

let copy = document.querySelector('.logos_slide').cloneNode(true);
document.querySelector('.logos').appendChild(copy);

let tl = gsap.timeline();

tl.to('#nav_anim', {
    top: 0,
    duration: 0.65,
    ease: 'power5.out'
})

tl.from('#nav_anim_links', {
    x: 100,
    duration: 0.5,
    delay: 0.5,
    opacity: 0,
    stagger: 0.15
})

tl.from('#nav_anim_close', {
    scale: 0.2,
    opacity: 0,
    duration: 0.5,
    delay: 0.2,
    ease: 'elastic.out(1,0.4)'
})

tl.pause();

let menu_open = document.querySelector('.menu_open');
let menu_close = document.querySelector('.menu_close');
let body = document.querySelector('body');

menu_open.addEventListener('click', () => {
    tl.play();
    body.classList.add('hidden_body');
})

menu_close.addEventListener('click', () => {
    tl.reverse();
    body.classList.remove('hidden_body');
})
