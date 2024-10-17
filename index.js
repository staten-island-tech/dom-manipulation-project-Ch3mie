const Domselectors = {
  h1: document.querySelector("title"),
  button: document.querySelector("button"),
  input: document.querySelector("#input"),
  value: document.querySelector("password"),
  container: document.querySelector(".container"),
  form: document.querySelector("form"),
  pics: document.querySelector("#pic"),
};

function create() {
  Domselectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    let input = Domselectors.input.value;
    let image = Domselectors.pics.value;
    Domselectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class="box"><p>${input}</p><img src="${image}" class="inimage" alt="e"></div>`
    );

    Domselectors.form.reset();
  });
}

create();

const deleted = document.getElementsByClass("box");
deleted.remove;
