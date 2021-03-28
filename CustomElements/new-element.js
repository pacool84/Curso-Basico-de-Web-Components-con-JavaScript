const plantilla = document.createElement("section");

plantilla.innerHTML = `
<header>
<ul>
<li> Primer Item </li>
<li> Segundo Item </li>
</ul>
</header>
`;

class newElement extends HTMLElement {
  constructor() {
    super();
    this.h1 = document.createElement("h1");
  }
  connectedCallback() {
    this.h1.textContent = "Este es un H1 personalizado";
    this.appendChild(this.h1);
    this.appendChild(plantilla);
  }
}

customElements.define("new-element", newElement);
