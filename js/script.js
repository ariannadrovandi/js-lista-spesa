const listaSpesa = [
    'pasta',
    'carne',
    'patate',
    'pane',
    'salse'
];

const lista = document.querySelector('ul');

let oggetti = '';
let counter = 0;
while (counter < listaSpesa.length) {
    oggetti += `
    <li class="fs-5 text-black font-monospace">${listaSpesa[counter]}</li>
    `
    counter++;
}
lista.innerHTML = oggetti;
