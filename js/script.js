var card = document.querySelectorAll(".wworkcard");
var text = document.querySelectorAll(".wworktext");


let texting = function(){
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
}
texting();










let itemAll = document.querySelectorAll('.item');
console.log(itemAll)
let number = 0;

for (let i = 0; i<itemAll.length; i++) {
  itemAll[i].addEventListener('mouseover', function() {
    for(let key of itemAll){
      key.classList.add('blur')
    }
    itemAll[i].classList.remove('blur');
  })
  itemAll[i].addEventListener('mouseout', function() {
    for(let key of itemAll){
      key.classList.remove('blur');
    }
  })
}