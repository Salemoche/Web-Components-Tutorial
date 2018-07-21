// Simply add a certain Template Component to the container element


// window.addEventListener( "DOMContentLoaded", e => {
//   document.getElementById('button').addEventListener( "click", e => {
//     console.log('hi');
//
//     const temp = document.getElementById('template');
//     const newNode = document.importNode(temp.content, true);
//
//     newNode.querySelector('p').textContent = 'yo';
//
//     document.getElementById('container').appendChild(newNode);
//
//   })
// });



// adds component from an importet file

// window.addEventListener( "DOMContentLoaded", e => {
//   document.getElementById('button').addEventListener( "click", e => {
//     console.log('hi');
//
//     const tmplLink = document.querySelector('#tmplFile'); // gets the file from the link id
//
//     const tmplFile = tmplLink.import; // imports it into the file
//
//     const tmpl = tmplFile.querySelector('#template'); // selects #template from template.html
//
//     const newNode = document.importNode(tmpl.content, true);
//
//     newNode.querySelector('p').textContent = 'yo';
//
//     document.getElementById('container').appendChild(newNode);
//
//   })
// });




// Create a class for the custom element 1
// 
// class CustomElement1 extends HTMLElement {
//
//   constructor() {
//     super();
//   }
//
//   logIt() {
//
//     var shadowRoot = this.attachShadow({mode: 'open'});
//     shadowRoot.innterHTML = '<p><slot></slot></p>';
//   }
//
//
//
//
//
// }
//
// customElements.define("custom-element-1", CustomElement1) // tells the browser to create a new tag with the name of custom-element-1 that's controlled by the CustomElement1 class
