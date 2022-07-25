


/*function pokreniMe() {
    let inputforma = document.getElementById('#text')
    let button = document.getElementById('#dugme');
    let divcontainer = document.getElementById('#Uradjeno');
      
    console.log()
} 
*/

let lista = document.getElementById("lista") // uneli smo div iz html-a pod id lista.

let inputforma = document.getElementById('#text');
let button = document.getElementById('#dugme');

function pokreniMe() {
 let inputforma = document.getElementById('text').value;    

 let id = lista.children.length

 lista.innerHTML += `<div class="new-value" id="${id}" onclick="obrisiElement('${id}')">${inputforma}</div>`
 
 document.getElementById('text').value = ""  // da kad unesemo text u input i stisnemo submit text se obrise


// let newElement = document.createElement('div');
// newElement.className = 'new-value';   
// newElement.innerText = `${inputforma}`;
// newElement.id = lista.children.length

// lista.appendChild(newElement)



}

function obrisiMe(){
   lista.innerHTML = '' 
}

function obrisiElement(id) {
   document.getElementById(id).remove()
}