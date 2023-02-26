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
// 
let arrow = document.querySelector(".scrollTop");
arrow.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

//

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

});

// 
let btnmodal = document.querySelectorAll(".popup");
let modal = document.querySelector(".callback");
let vismodal = document.querySelector(".popup-vis");
let closeModal = document.querySelector(".callback-close");
let bgcgrayModal = document.querySelector(".bgcgray-modal");
closeModal.addEventListener("click", function () {
  modal.classList.remove('range-cb')
  bgcgrayModal.classList.remove("visib");
  firstLines.classList.remove("firstLine");
  secondLines.classList.remove("secondLine");
  threeLines.classList.remove("threeLine");
  document.body.style.overflow = 'auto';
});
bgcgrayModal.addEventListener("click", function () {
  modal.classList.remove('range-cb');
  document.body.style.overflow = 'auto';
});

for (let i = 0; i < btnmodal.length; i++) {
  btnmodal[i].addEventListener("click", function () {
    modal.classList.add('range-cb');
    bgcgrayModal.classList.add("visib");
    burgerMenu.classList.remove("range");
    firstLines.classList.remove("firstLine");
    secondLines.classList.remove("secondLine");
    threeLines.classList.remove("threeLine");
    document.body.style.overflow = 'hidden';
  });
}

let form = document.querySelector("form");
let btnForm = form.querySelector("button");
let mainsub = form.querySelector("#last");

console.log(mainsub)
mainsub.onclick = function () {
  if (mainsub.checked) {
    btnForm.classList.add("accepted");
    btnForm.disabled = false;
  } else {
    btnForm.classList.remove("accepted");
    btnForm.disabled = true;
  }
};




let formeds = document.querySelectorAll(".formed");
for(let i = 0;i < formeds.length;i++){
formeds[i].onsubmit = function() {
  location.reload(true);
}
}



let formP = document.querySelector(".cbform");
let btnFormP = formP.querySelector("button");
let mainsubP = formP.querySelector("#lastes");
mainsubP.onclick = function () {
  if (mainsubP.checked) {
    btnFormP.classList.add("accept");
    btnFormP.disabled = false;
  } else {
    btnFormP.classList.remove("accept");
    btnFormP.disabled = true;
  }
};
