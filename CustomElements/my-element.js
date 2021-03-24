const template = document.createElement("div");

template.innerHTML = `
<style>
p {
  color: blue;
}
.titulo {
  color: red;
}
</style>
<p> Hello my friend Custom Element 2 </p>
<h1 class="titulo" >Ejemplo de un H1</h1>

`;

class myElement extends HTMLElement {
  constructor() {
    super();
    /* Aqui se crea el elemento */
    this.p = document.createElement("p");

    console.log("Hello my friend Custom Element");
  }
  connectedCallback() {
    /* Aqui se le agrega texto */
    this.p.textContent = "Hello my friend Custom Element";
    /* Aqui se agrega al DOM */
    this.appendChild(this.p);
    this.appendChild(template);
  }
}
customElements.define("my-element", myElement);
