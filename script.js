const headerEl = document.querySelector('header');

window.addEventListener('scroll',() =>{
    if (window.scrollY > 700) {
        headerEl.classList.add('header-scroll');
    }
})

window.addEventListener('scroll',() =>{
    if (window.scrollY < 700) {
        headerEl.classList.remove('header-scroll');
    }
})

 var typed = new Typed(".auto-type",{
    strings: ["Destination", "inspiration","Universe." ],
    typeSpeed: 150,
    backSpeed: 150,
    loop: false,
})

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }

}

window.addEventListener("scroll", reveal);
reveal();


function revealimgone() {
    var reveals = document.querySelectorAll(".revealimgone");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("activeimgone");
      } else {
        reveals[i].classList.remove("activeimgone");
      }
    }

}

window.addEventListener("scroll", revealimgone);
revealimgone();


function revealimgtwo() {
    var reveals = document.querySelectorAll(".revealimgtwo");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("activeimgtwo");
      } else {
        reveals[i].classList.remove("activeimgtwo");
      }
    }

}

window.addEventListener("scroll", revealimgtwo);
revealimgtwo();


function revealimgthree() {
    var reveals = document.querySelectorAll(".revealimgthree");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("activeimgthree");
      } else {
        reveals[i].classList.remove("activeimgthree");
      }
    }

}

window.addEventListener("scroll", revealimgthree);
revealimgthree();