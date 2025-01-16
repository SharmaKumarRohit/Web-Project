var tl = gsap.timeline();

function time() {
    var a = 0;
    setInterval(function() {
        a = a + Math.floor(Math.random()*15);
        if(a < 100) {
            document.querySelector("#loader h1").innerHTML = a+"%";
        }
        else {
            a = 100;
            document.querySelector("#loader h1").innerHTML = a+"%";
        }
    },150)
}

tl.to("#loader h1", {
    delay: 0.2,
    duration: 1,
    onStart: time(),
})
tl.to("#loader", {
    top: "-100vh",
    duration: 1.5,
    delay: 1,
})

tl.
   from("nav", {
    y: 30,
    opacity: 0,
    duration: 1,
   })
tl.
   from(".logo", {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power2.inOut",
   })

   tl.
      from(".menu__items li, i", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.inOut",
      })

      tl.
         from(".left h2", {
            x: -30,
            opacity: 0,
            duration: 1,
         })

      tl.
         from(".left p", {
            x: 30,
            opacity: 0,
            duration: 1,
         })

         tl.from(".left .effect", {
            opacity: 0,
            scale: 0,
            duration: 1,
         })

         tl.from(".right img", {
            x: 30,
            opacity: 0,
            duration: 1,
         })