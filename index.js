const Domselectors = {
  h1: document.querySelector("title"),
  button: document.querySelector("button"),
  input: document.querySelector("#input"),
  value: document.querySelector("text"),
};

Domselectors.button.addEventListener("click", function (happen) {
  let input = Domselectors.input.text;
  Domselectors.box.insertedAdjacentHTML("afterend", `<p>${input}</p>`);
  happen.preventDefault();
});

//function stealSSN() {
//let form = document.querySelector("form");
//GamepadButton.addEven;
//Domselectors.button.addEventListener("click", function (event) {
//event.preventDefault();
//console.log(event.target);
//});
//}
