import restaurantImage from "../imgs/restaurant.png";

export class DisplayHome{
  #document;
  #mainBlock;
  #homeBlock;

  constructor(mainBlock, document) {
    this.#mainBlock = mainBlock;
    this.#document = document;
  }

  #addChoiceBlock() {
    const choiceBlock = this.#document.createElement("div");
    choiceBlock.classList.add("home__choice-block");

    const choiceSecondaryBlock = this.#document.createElement("div");

    const choiceHeader = this.#document.createElement("h2");
    choiceHeader.classList.add("choice__header");
    choiceHeader.textContent = "Big choice for everyone!";
    
    const choiceText = this.#document.createElement("p");
    choiceText.classList.add("choice__text");
    choiceText.textContent = "Since 1999";

    choiceSecondaryBlock.appendChild(choiceHeader);
    choiceSecondaryBlock.appendChild(choiceText);
    
    const choiceImage = this.#document.createElement("img");
    choiceImage.setAttribute("width", "512");
    choiceImage.setAttribute("src", restaurantImage);
    choiceImage.setAttribute("alt", "Los Pollos logo");
    
    choiceBlock.appendChild(choiceSecondaryBlock);
    choiceBlock.appendChild(choiceImage);

    this.#homeBlock.appendChild(choiceBlock);
  }

  #addTasteBlock() {
    const tasteBlock = this.#document.createElement("div");
    tasteBlock.classList.add("home__taste-block");

    const tasteHeader = this.#document.createElement("h3");
    tasteHeader.textContent = "A Tradition of Taste";
    
    const tasteText = this.#document.createElement("p");
    tasteText.classList.add("home__text");
    tasteText.textContent = `At Los Pollos Hermanos, we believe that food is more than just sustenance—it’s a bridge between people. Born
          from a humble vision in Michoacán, our signature slow-cooked chicken has traveled across borders to bring the
          authentic flavors of old Mexico to your table. We don't just serve meals; we serve memories, seasoned with the
          warmth of home and the spice of tradition.`;

    tasteBlock.appendChild(tasteHeader);
    tasteBlock.appendChild(tasteText);

    this.#homeBlock.appendChild(tasteBlock);
  }

  #addStandardBlock() {
    const tasteBlock = this.#document.createElement("div");
    tasteBlock.classList.add("home__standard-block");

    const tasteHeader = this.#document.createElement("h3");
    tasteHeader.textContent = "The Meticulous Standard";
    
    const tasteText = this.#document.createElement("p");
    tasteText.classList.add("home__text");
    tasteText.textContent = `What makes our chicken the best in the Southwest? It’s our commitment to the process. We use only the finest
          ingredients, hand-selected to meet our exacting standards.`;

    const uList = this.#document.createElement("ul");
    uList.appendChild(this.#createLi(`Farm-Fresh Poultry: `, `Locally sourced and never frozen.`));
    uList.appendChild(this.#createLi(`The Secret Blend: `, `A spice recipe perfected over decades.`));
    uList.appendChild(this.#createLi(`Precision Cooking: `, `Monitored at every stage to ensure the perfect
              crisp. In our kitchens, "good enough" is never an option. We strive for perfection
              because that is what you deserve.`));

    tasteBlock.appendChild(tasteHeader);
    tasteBlock.appendChild(tasteText);
    tasteBlock.appendChild(uList);

    this.#homeBlock.appendChild(tasteBlock);
  }

  #createLi(strongText, text) {
      const li = this.#document.createElement("li");
      const p = this.#document.createElement("p");
      const strong = this.#document.createElement("strong");
      
      strong.textContent = strongText;
      p.classList.add("home__text");
      p.appendChild(strong);
      p.append(text);

      li.appendChild(p);

      return li;
    }

  #addSupportBlock() {
    const tasteBlock = this.#document.createElement("div");
    tasteBlock.classList.add("home__support-block");

    const tasteHeader = this.#document.createElement("h3");
    tasteHeader.textContent = "Supporting Our Heroes";
    
    const tasteText = this.#document.createElement("p");
    tasteText.classList.add("home__text");
    tasteText.textContent = `Los Pollos Hermanos isn't just a restaurant; we are a pillar of the community. We are proud sponsors of local
          youth programs and take great pride in our partnership with local law enforcement through the "Support Our
          Blue" initiative. We believe that a strong community is built on mutual respect and a shared commitment to growth.
          We are here to stay, and we are here to help.`;

    tasteBlock.appendChild(tasteHeader);
    tasteBlock.appendChild(tasteText);

    this.#homeBlock.appendChild(tasteBlock);
  }

  displayHomeElements(){
    this.#homeBlock = this.#document.createElement("div");
    this.#homeBlock.classList.add("home__block");

    this.#addChoiceBlock();
    this.#addTasteBlock();
    this.#addStandardBlock();
    this.#addSupportBlock();

    this.#mainBlock.appendChild(this.#homeBlock);
  }
}