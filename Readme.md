#Que son los web Components?

##Son bloques de codigo que pueden ser reutilizables, estos bloques de código estan generalemente encapzulados y son como piezas de LEGO.

Son primitivos de bajo nivel que te permiten definir tus propios elementos de HTML ademas de que nos ayudan a utilizar estandares WEB para construirlos.

Los WEB components estan construidos con API´s que estan en el navegador:

HTML Templates
Custom Elements
Shadow DOM (encapzular)
ES Modules

Custom Elements.- Permite definir mi etiqueta, para que el navegador entienda que el web component es una etiqueta.

La regla que se debe de seguir para la creacion de tus etiquetas es que tengan dos palabras <my-map> </my-map>.

Shadow DOM .- Contiene codigo interno que no convive con el codigo externo, Contiene dentro el shadow root, ejemplo seria la etiqueta de video, boton play, boton de pausa.

HTML Template.- <template> </template> No es posible utilizarla en HTML, para poder utilizarla necesitas un match con Javascript. Regresa un document fragment.

ES Modules.- Utilizar codigo javascript de un documento en otro documento.

Beneficios

*Reutilizacion .- Don´t repeat yourself
*Legibilidad .- Agrega entendimiento al codigo
*Mantenibilidad .- Cada uno de los componentes pueden ser escritos y probados individualmente
*Interoperabilidad .- Estan hechos para coexistir entre frameworks y librerias
\*Consistencia .- No es necesario crear los mismos componentes mas de una vez, Template.

Ciclo de Vida de los Web Components
Constructor
|
connectedCallback - disconnectedCallback
|
attributeChangedCallback

adoptedCallback
