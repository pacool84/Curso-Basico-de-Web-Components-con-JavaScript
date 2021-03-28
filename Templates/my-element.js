class myElement extends HTMLElement {
  constructor() {
    super();
  }
  /* Se genera un metodo para manegar el template, puede llevar el nombre que sea */
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
    ${this.getStyles()}
    <section>
    <h2> Hello my web component from TEMPLATE API </h2>
    <div>
    <p> Este es un ejemplo de la API de Template </p>
    </div>
    </section>
    `;
    return template;
  }
  getStyles() {
    return `
    <style>
      h2 {
        color: red
      }
    </style>
    `;
  }
  render() {
    this.appendChild(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback() {
    this.render();
  }
}

customElements.define("template-wc", myElement);
