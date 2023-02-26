let form = document.querySelector("form");
let btnForm = form.querySelector("button");
let mainsub = form.querySelector("#last");
mainsub.onclick = function () {
  if (mainsub.checked) {
    btnForm.classList.add("accepted");
    btnForm.disabled = false;
  } else {
    btnForm.classList.remove("accepted");
    btnForm.disabled = true;
  }
};

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
