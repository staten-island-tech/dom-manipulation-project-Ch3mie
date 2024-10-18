const DOMSelectors = {
  h1: document.querySelector("title"),
  button: document.querySelector("button"),
  input: document.querySelector("#input"),
  value: document.querySelector("password"),
  container: document.querySelector(".container"),
  form: document.querySelector("form"),
  pics: document.querySelector("#pic"),
};

function createCard() {
  DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    const cardCount1 = DOMSelectors.card.length;
    const cardCount = cardCount1 + 1;
    const card = {
      header: DOMSelectors.input.value,
      image: DOMSelectors.pics.value,
      id: cardCount,
    };
    return card;
  });
}

function addCard(card) {
  DOMSelectors.container.addAdjacentHTML(
    "beforeend",
    `<div class="box" id="card${card.id}"><p>${card.header}</p><img src="${card.image}" class="inimage" alt="e"><button type="button" id="${card.id}"><button></button></div>`
  );
}

function clearInputs() {
  DOMSelectors.header.value = "";
  DOMSelectors.image.value = "";
  DOMSelectors.id.value = "";
}

function removeCard() {
  const removeButtons = document.querySelectorAll();
  removeButtons.forEach((el) =>
    el.addEventListener("click", function (event) {
      const buttonId = event.getAttribute("id");
      const id = "card" + buttonId;
      const card = document.getElementById(id);
      card.remove();
    })
  );
}
const card = createCard();
addCard(card);
clearInputs();
removeCard();
