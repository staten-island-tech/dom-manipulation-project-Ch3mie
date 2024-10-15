const Domselectors = {
  h1: document.querySelector("title"),
  button: document.querySelector("button"),
  input: document.querySelector("#input"),
  value: document.querySelector("password"),
  container: document.querySelector(".container"),
  form: document.querySelector("form"),
  pics: document.querySelector("#pic"),
};

Domselectors.button.addEventListener("click", function (event) {
  event.preventDefault();
  let input = Domselectors.input.value;
  let image = Domselectors.pics.value;
  Domselectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="box"><p>${input}</p><img src="${image}" class="inimage" alt="e"></div>`
  );

  Domselectors.form.reset();
});

//function stealSSN() {
//let form = document.querySelector("form");
//GamepadButton.addEven;
//Domselectors.button.addEventListener("click", function (event) {
//event.preventDefault();
//console.log(event.target);
//});
//}
