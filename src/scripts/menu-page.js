import burgerImage from "../imgs/burger.png";

export class MenuDisplay {
  #mainBlock;
  #document;

  constructor(mainBlock, document) {
    this.#mainBlock = mainBlock;
    this.#document = document;
  }

  #createCard() {
    const cardHolder = this.#document.createElement("div");
    cardHolder.classList.add("menu__card");

    const cardHeader = this.#document.createElement("h3");
    cardHeader.classList.add("card__header");
    cardHeader.textContent = "Default Burger";

    const cardImage = this.#document.createElement("img");
    cardImage.classList.add("card__image");
    cardImage.setAttribute("width", "152");
    cardImage.setAttribute("src", burgerImage);
    cardImage.setAttribute("alt", "Burger image");

    const cardDescription = this.#document.createElement("p");
    cardDescription.classList.add("card__description");
    cardDescription.textContent = "A succulent, fire-kissed patty nestled in a golden bun, dripping with melted cheese and freshness.";

    const cardButton = this.#document.createElement("button");
    cardButton.classList.add("card__button");
    cardButton.textContent = "Add";

    cardHolder.appendChild(cardHeader);
    cardHolder.appendChild(cardImage);
    cardHolder.appendChild(cardDescription);
    cardHolder.appendChild(cardButton);

    return cardHolder;
  }

  displayMenuElements() {
    const menuBlock = this.#document.createElement("div");
    menuBlock.classList.add("menu__block");

    const menuHeader = this.#document.createElement("h2");
    menuHeader.classList.add("menu__header");
    menuHeader.textContent = "Menu";

    const menuCardsHolder = this.#document.createElement("div");
    menuCardsHolder.classList.add("menu__cards--holder");

    menuCardsHolder.appendChild(this.#createCard());
    menuCardsHolder.appendChild(this.#createCard());
    menuCardsHolder.appendChild(this.#createCard());
    menuCardsHolder.appendChild(this.#createCard());
    menuCardsHolder.appendChild(this.#createCard());
    menuCardsHolder.appendChild(this.#createCard());

    menuBlock.appendChild(menuHeader);
    menuBlock.appendChild(menuCardsHolder);

    this.#mainBlock.appendChild(menuBlock);
  }
}
