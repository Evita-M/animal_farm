const body = document.querySelector("body");
body.addEventListener("keydown", klavesaDolu);
body.addEventListener("keydown", klavesaDoluZvuk);
body.addEventListener("keyup", klavesaNahoru);

function klavesaDolu(event) {
    const idcko = "#zvire-" + event.key;
    const klavesa = document.querySelector(idcko);
    klavesa.classList.add("hraje")
    klavesa.style.transform = "scale(1.2)";
}
function klavesaNahoru(event) {
  const idcko = "#zvire-" + event.key;
  const klavesa = document.querySelector(idcko);
  klavesa.classList.remove("hraje")
  klavesa.style.transform = "scale(1)";
}

/*Play audio*/
function klavesaDoluZvuk(event) {
  const idckoZvuk = "#zvuk-" + event.key;
  const prehraj = document.querySelector(idckoZvuk);
  prehraj.play();
}


