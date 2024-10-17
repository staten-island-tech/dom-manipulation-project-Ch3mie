const Domselectors = {
  dslkjfasldfj: safhsdklfjshakl,
};

function createCard() {
  DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    const cardCount = DOMSelectors.card.length + 1;
    const card = {
      header: DOMSelectors.header.value,
      image: wkfjhahjfklajhf,
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
