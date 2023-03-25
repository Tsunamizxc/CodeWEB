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
});
bgcgrayModal.addEventListener("click", function () {
  modal.classList.remove('range-cb')
});

for (let i = 0; i < btnmodal.length; i++) {
  btnmodal[i].addEventListener("click", function () {
    modal.classList.add('range-cb')
    bgcgrayModal.classList.add("visib");
    burgerMenu.classList.remove("range");
    firstLines.classList.remove("firstLine");
    secondLines.classList.remove("secondLine");
    threeLines.classList.remove("threeLine");
  });
}

// карточки
let card = document.querySelectorAll(".wworkcard");
let text = document.querySelectorAll(".wworktext");

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

let formeds = document.querySelectorAll(".formed");
for (let i = 0; i < formeds.length; i++) {
  formeds[i].onsubmit = function () {
    location.reload(true);
  }
}

let form = document.querySelector(".cbform");
console.log(form)
let btnForm = form.querySelector("button");
console.log(btnForm)
let mainsub = form.querySelector("#last");
console.log(mainsub)

mainsub.onclick = function () {
  if (mainsub.checked) {
    btnForm.classList.add("accept");
    btnForm.disabled = false;
  } else {
    btnForm.classList.remove("accept");
    btnForm.disabled = true;
  }
};
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.btn-question-pop').disabled = 'true';
});