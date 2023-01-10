function ShowMenu() {
  let aside = document.querySelector("aside");

  aside.classList.toggle("hide");

  aside.addEventListener("touchmove", () => {
    aside.classList.add("hide");
  });
}

// acessibility functions

function ShowMenuAcess() {
  let aside = document.querySelector("aside");
  let iconMenu = document.querySelector(".icon-menu");

  iconMenu.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
      e.target.click;
    }
  });

  aside.addEventListener("keyup", (event) => {
    if (event.keyCode === 27) {
      aside.classList.add("hide");
    }
  });

  aside.classList.toggle("hide");
}

function Modal() {
  return console.log("Calma meu filho, calma!!");
}