let form = document.querySelector("form");
let btnForm = form.querySelector("button");
let mainsub = form.querySelector("#last");
mainsub.onclick = function () {
  if (mainsub.checked) {
    btnForm.classList.add("accept");
    btnForm.disabled = false;
  } else {
    btnForm.classList.remove("accept");
    btnForm.disabled = true;
  }
};
