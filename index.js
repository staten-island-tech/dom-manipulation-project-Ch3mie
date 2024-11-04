const DOMSelectors = {
  h1: document.querySelector("title"),
  button: document.querySelector("button"),
  input: document.querySelector("#input"),
  value: document.querySelector("password"),
  container: document.querySelector(".container"),
  form: document.querySelector("form"),
  pics: document.querySelector("#pic"),
  name: document.querySelector("#name"),
};

function createCard() {
  DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    const cardCount1 = document.querySelectorAll(".box").length;
    const cardCount = cardCount1 + 1;
    const card = {
      name: DOMSelectors.name.value,
      header: DOMSelectors.input.value,
      image: DOMSelectors.pics.value,
      id: cardCount,
    };
    addCard(card);
    clearInputs();
  });
}

function addCard(card) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="box" id="card${card.id}">
      <h4>${card.name}</h4>
       <p>${card.header}</p>
       <img src="${card.image}" class="inimage" alt="image">
       <button type="button" class="remove-button" id="${card.id}">Remove</button>
     </div>`
  );
  removeCard();
}

function clearInputs() {
  DOMSelectors.name.value = "";
  DOMSelectors.input.value = "";
  DOMSelectors.pics.value = "";
}

function removeCard() {
  const removeButtons = document.querySelectorAll(".remove-button");
  removeButtons.forEach((el) =>
    el.addEventListener("click", function (event) {
      const buttonId = el.getAttribute("id");
      const id = "card" + buttonId;
      const card = document.getElementById(id);
      if (card) card.remove();
    })
  );
}

createCard();
