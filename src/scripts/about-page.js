export class AboutDisplay {
  #mainBlock;
  #document;

  constructor(mainBlock, document) {
    this.#mainBlock = mainBlock;
    this.#document = document;
  }

  displayAboutElements() {
    const aboutBlock = this.#document.createElement("div");
    aboutBlock.classList.add("about__block");

    const mapBlock = this.#document.createElement("div");
    mapBlock.classList.add("map__block");

    const textHolder = this.#document.createElement("div");

    const header = this.#document.createElement("h2");
    header.classList.add("map__header");
    header.textContent = "Our location";
    textHolder.appendChild(header);

    const para = this.#document.createElement("p");
    para.classList.add("map__description");
    para.textContent = "Yes! Right in the center of Paris!";
    textHolder.appendChild(para);

    const map = this.#document.createElement("iframe");
    map.classList.add("map__ref");
    map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916246075636!2d2.2944812999999997!3d48.858370099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2z0K3QudGE0LXQu9C10LLQsCDQsdCw0YjQvdGP!5e0!3m2!1sru!2skg!4v1773688283506!5m2!1sru!2skg",);
    map.setAttribute("width", "600");
    map.setAttribute("height", "450");
    map.setAttribute("style", "border:0;");
    map.setAttribute("allowfullscreen", "");
    map.setAttribute("loading", "eager");
    map.setAttribute("referrerpolicy", "no-referrer-when-downgrade");

    mapBlock.appendChild(textHolder);
    mapBlock.appendChild(map);
    aboutBlock.appendChild(mapBlock);
    this.#mainBlock.appendChild(aboutBlock);
  }
}
