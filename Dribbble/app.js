const copy = document.querySelector(".scroll").cloneNode(true);
document.querySelector(".scroll_container").append(copy);

const exploreArea = document.querySelector(".explore_area");

const exploreGallery = [
  {
    image: "./images/explore1.png",
    brandName: "SSENCE - Ecommerc",
    title: "Pixelate Studio",
    like: 112,
    view: 8.3,
    subscription: "TEAM",
  },
  {
    image: "./images/explore2.jpg",
    brandName: "Art of design",
    title: "Oleg Coada",
    like: 43,
    view: 12,
    subscription: "PRO",
  },
  {
    image: "./images/explore3.png",
    brandName: "Pointed Pony",
    title: "Dan Lehman",
    like: 22,
    view: 12,
    subscription: "PRO",
  },
  {
    image: "./images/explore4.jpg",
    brandName: "Branding: Pleasure",
    title: "DigiCo",
    like: 53,
    view: 1.6,
    subscription: "PRO",
  },
  {
    image: "./images/explore5.png",
    brandName: "Kia Logo Redesign",
    title: "Lepisov Branding",
    like: 148,
    view: 18.7,
    subscription: "TEAM",
  },
  {
    image: "./images/explore6.png",
    brandName: "LAFC x Target",
    title: "Matt Erickson",
    like: 25,
    view: 1.2,
    subscription: "PRO",
  },
  {
    image: "./images/explore7.jpg",
    brandName: "Bacteria",
    title: "Mary Maka",
    like: 52,
    view: 1.7,
    subscription: "PRO",
  },
  {
    image: "./images/explore8.jpg",
    brandName: "Illustration For Order",
    title: "Vedant Hegde",
    like: 53,
    view: 2.9,
    subscription: "PRO",
  },
  {
    image: "./images/explore9.png",
    brandName: "Teller Logotype",
    title: "Jordan Jenkins",
    like: 89,
    view: 5.4,
    subscription: "PRO",
  },
  {
    image: "./images/explore10.png",
    brandName: "#1 Windergy",
    title: "Moyra",
    like: 119,
    view: 8.8,
    subscription: "TEAM",
  },
  {
    image: "./images/explore11.jpg",
    brandName: "Halftone illustration",
    title: "Ramy Wafaa",
    like: 93,
    view: 5.7,
    subscription: "PRO",
  },
  {
    image: "./images/explore12.jpg",
    brandName: "Moover Logistics",
    title: "HALO LAB",
    like: 114,
    view: 4.1,
    subscription: "TEAM",
  },
  {
    image: "./images/explore13.png",
    brandName: "Real World Assets",
    title: "Demyanchuk Art",
    like: 123,
    view: 4.3,
    subscription: "TEAM",
  },
  {
    image: "./images/explore14.jpg",
    brandName: "Fox Plumber",
    title: "Alfrey Davilla",
    like: 61,
    view: 8.6,
    subscription: "PRO",
  },
  {
    image: "./images/explore15.png",
    brandName: "Crypto Landing Page",
    title: "Awsmd",
    like: 122,
    view: 9.3,
    subscription: "TEAM",
  },
  {
    image: "./images/explore16.jpg",
    brandName: "Wallet Page for Crypto",
    title: "Extej UI UX Design",
    like: 181,
    view: 3.8,
    subscription: "PRO",
  },
  {
    image: "./images/explore17.png",
    brandName: "-From Archive (Pt. 5)",
    title: "Antonio Calvino",
    like: 65,
    view: 11.3,
    subscription: "PRO",
  },
  {
    image: "./images/explore18.png",
    brandName: "Music Streaming App",
    title: "Yehor Kosinov",
    like: 91,
    view: 13.7,
    subscription: "PRO",
  },
  {
    image: "./images/explore19.png",
    brandName: "99finder - Logo",
    title: "woop",
    like: 97,
    view: 13.8,
    subscription: "TEAM",
  },
  {
    image: "./images/explore20.png",
    brandName: "Mobile App Design",
    title: "Microsoft Design",
    like: 24,
    view: 9,
    subscription: "TEAM",
  },
];

let clutter = "";

exploreGallery.forEach((content, idx) => {
  clutter += `            <div class="explore_box">
              <div class="explore_image">
                <img src="${content.image}" alt="explore${idx}">
                <div class="explore_overlay">
                  <p>${content.brandName}</p>
                  <i class="ri-heart-3-line"></i>
                </div>
              </div>
              <div class="explore_content">
                <p>${content.title} <span>${content.subscription}</span></p>
                <div class="explore_icon">
                  <p><i class="ri-heart-fill"></i> ${content.like}</p>
                  <p><i class="ri-eye-fill"></i> ${content.view}k</p>
                </div>
              </div>
            </div>`;
});

exploreArea.innerHTML = clutter;

const copyMoveElem = document.querySelector("div.move_elem").cloneNode(true);
document.querySelector("section.scroll_elem").append(copyMoveElem);

const header = document.querySelector("header");
const hamburger = document.querySelector('input[type="checkbox"]');
const body = document.body;

let mm = gsap.matchMedia();

mm.add("(width <= 768px)", () => {
  let tl = gsap.timeline();

  tl.to("nav ul.menu_items", {
    right: "0",
    duration: 0.5,
  });

  tl.from("nav ul.menu_items li", {
    x: 60,
    duration: 0.5,
    stagger: 0.2,
    opacity: 0,
    ease: "elastic.out(1,0.5)",
  });

  tl.pause();

  hamburger.addEventListener("change", () => {
    if (hamburger.checked) {
      tl.play();
      header.style.backgroundColor = "#fff";
      body.style.overflowY = "hidden";
    } else {
      tl.reverse();
      header.style.backgroundColor = "#f8f7f4";
      body.style.overflowY = "visible";
    }
  });
});

const targetPoint = document.getElementById('target_point');

function randomColorGenerator() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const randomColor = `rgb(${red}, ${green}, ${blue})`;
  return randomColor;
}

setInterval(() => {
  targetPoint.style.backgroundColor = randomColorGenerator();
}, 2000);

