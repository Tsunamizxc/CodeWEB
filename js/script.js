var card = document.querySelectorAll(".wworkcard");
var text = document.querySelectorAll(".wworktext");

let texting = function () {
  for (let i = 0; i < text.length; i++) {
    card[i].addEventListener("mouseover", function () {
      text[i].classList.add("block");
      card[i].style.filter = "brightness(0.6)";
    });
    card[i].addEventListener("mouseout", function () {
      text[i].classList.remove("block");
      card[i].style.filter = "brightness(1)";
    });
    text[i].addEventListener("mouseover", function () {
      text[i].classList.add("block");
      card[i].style.filter = "brightness(0.4)";
    });
    text[i].addEventListener("mouseout", function () {
      text[i].classList.add("block");
      card[i].style.filter = "brightness(1)";
    });
  }
};
texting();

let itemAll = document.querySelectorAll(".item");
console.log(itemAll);
let number = 0;

for (let i = 0; i < itemAll.length; i++) {
  itemAll[i].addEventListener("mouseover", function () {
    for (let key of itemAll) {
      key.classList.add("blur");
    }
    itemAll[i].classList.remove("blur");
  });
  itemAll[i].addEventListener("mouseout", function () {
    for (let key of itemAll) {
      key.classList.remove("blur");
    }
  });
}

function noDigits(event) {
  if ("1234567890".indexOf(event.key) != -1) event.preventDefault();
}

document.addEventListener("DOMContentLoaded", function () {
  var eventCalllback = function (e) {
    var el = e.target,
      clearVal = el.dataset.phoneClear,
      pattern = el.dataset.phonePattern,
      matrix_def = "+7(___) ___-__-__",
      matrix = pattern ? pattern : matrix_def,
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = e.target.value.replace(/\D/g, "");
    if (clearVal !== "false" && e.type === "blur") {
      if (val.length < matrix.match(/([\_\d])/g).length) {
        e.target.value = "";
        return;
      }
    }
    if (def.length >= val.length) val = def;
    e.target.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length
        ? val.charAt(i++)
        : i >= val.length
        ? ""
        : a;
    });
  };
  var phone_inputs = document.querySelectorAll("[data-phone-pattern]");
  for (let elem of phone_inputs) {
    for (let ev of ["input", "blur", "focus"]) {
      elem.addEventListener(ev, eventCalllback);
    }
  }
});

let arrow = document.querySelector(".scrollTop");
arrow.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
let burger = document.querySelector(".header__row_burger-btn");
let burgerMenu = document.querySelector(".burger");
let firstLines = document.querySelector(".top-bun");
let secondLines = document.querySelector(".meat");
let threeLines = document.querySelector(".bottom-bun");
let bgcgray = document.querySelector(".bgcgray");
burger.addEventListener("click", function () {
  firstLines.classList.toggle("firstLine");
  secondLines.classList.toggle("secondLine");
  threeLines.classList.toggle("threeLine");
  burgerMenu.classList.toggle("range");
  bgcgray.classList.toggle("visib");
});
bgcgray.addEventListener("click", function () {
  firstLines.classList.remove("firstLine");
  secondLines.classList.remove("secondLine");
  threeLines.classList.remove("threeLine");
  burgerMenu.classList.remove("range");
  bgcgray.classList.toggle("visib");
  modal.style.display = "none";
});

let abUsVis = document.querySelector(".ab-us__visibled");
let abUsHid = document.querySelector(".ab-us__hidden");
abUsVis.addEventListener("click", function () {
  abUsHid.classList.toggle("visiblesss");

  if (
    abUsVis.innerHTML ===
    '<p class="ab-us__visibled"> <img src="image/arrowback.png" alt=""></p>'
  ) {
    abUsVis.innerHTML =
      '<p class="ab-us__visibled"> <img src="image/Arrow3.png" alt=""></p>';
    abUsVis.style.left = "0px";
  } else {
    abUsVis.innerHTML =
      '<p class="ab-us__visibled"> <img src="image/arrowback.png" alt=""></p>';
    abUsVis.style.left = "0px";
  }
});

$(".stages__cards-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  dots: true,
  arrows: false,
});

let btnmodal = document.querySelectorAll(".popup");
let modal = document.querySelector(".callback");
let vismodal = document.querySelector(".popup-vis");
let closeModal = document.querySelector(".callback-close");
console.log(closeModal)
let bgcgrayModal = document.querySelector(".bgcgray-modal");
closeModal.addEventListener("click", function () {
  modal.style.display = "none";
  bgcgrayModal.classList.remove("visib");
  firstLines.classList.remove("firstLine");
  secondLines.classList.remove("secondLine");
  threeLines.classList.remove("threeLine");
});


for(let i = 0;i<btnmodal.length;i++){
  btnmodal[i].addEventListener("click", function () {
    modal.style.display = "block";
    bgcgrayModal.classList.add("visib");
    burgerMenu.classList.remove("range");
    firstLines.classList.remove("firstLine");
    secondLines.classList.remove("secondLine");
    threeLines.classList.remove("threeLine");
  });
}

