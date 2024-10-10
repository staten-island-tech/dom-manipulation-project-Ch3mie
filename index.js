const Domselectors = {
  h1: document.querySelector("title"),
  button: document.querySelector("button"),
  input: document.querySelector("#input"),
  value: document.querySelector("text"),
};

function stealSSN() {
  let form = document.querySelector("form");
  GamepadButton.addEven;
  Domselectors.button.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(event.target);
  });
}
stealSSN();

Domselectors.button.addEventListener("click", function (event) {
  let input = Domselectors.input.text;
  Domselectors.box.insertedAdjacentHTML("afterend", <p>${input}</p>);
  event.preventDefault();
});
