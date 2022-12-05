let colbasaa = document.querySelector(".colbasaa");
let pomidor = document.querySelector(".pomidor");
let bodring = document.querySelector(".bodring");
let gushtt = document.querySelector(".gushtt");

// Colors
let colbasa = document.querySelectorAll(".colbasa");
let pom = document.querySelectorAll(".pom");
let bod = document.querySelectorAll(".bod");
let gusht = document.querySelectorAll(".gusht");

// Working
let pul = document.querySelector(".pul");

colbasaa.addEventListener("click", function () {
  for (let i = 0; i < colbasa.length; i++) {
    console.log(colbasa);
    colbasa[i].classList.toggle("open");
  }
  if (colbasaa.classList.toggle("open10")) {
    pul.textContent--;
  } else {
    pul.textContent++;
  }
});
pomidor.addEventListener("click", function () {
  for (let i = 0; i < pom.length; i++) {
    pom[i].classList.toggle("open1");
  }
  if (pomidor.classList.toggle("open10")) {
    pul.textContent--;
  } else {
    pul.textContent++;
  }
});
bodring.addEventListener("click", (e) => {
  for (let i = 0; i < bod.length; i++) {
    bod[i].classList.toggle("open2");
  }
  if (bodring.classList.toggle("open10")) {
    pul.textContent--;
  } else {
    pul.textContent++;
  }
});
gushtt.addEventListener("click", function () {
  for (let i = 0; i < gusht.length; i++) {
    gusht[i].classList.toggle("open3");
  }
  if (gushtt.classList.toggle("open10")) {
    pul.textContent--;
  } else {
    pul.textContent++;
  }
});
