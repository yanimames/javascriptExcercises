const xhr = new XMLHttpRequest();
console.log(xhr);

xhr.open('GET', './sample.txt')
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200) {
       const text = document.createElement('p');
       text.textContent = xhr.responseText;
       document.body.appendChild(text);

    } else {
        console.log({
            status: xhr.status,
            text:xhr.statusText
        })
    }
}

xhr.send();

console.log('hello world')
const xhr2 = new XMLHttpRequest();

let personaStartWars = {}

xhr2.open('GET', 'https://swapi.dev/api/people/1/')
xhr2.onreadystatechange = () => {
    if(xhr2.readyState === 4 && xhr2.status === 200) {
        const text = document.createElement('p');
        text.textContent = xhr2.responseText;
        personaStartWars = JSON.parse(xhr2.responseText);
        document.body.appendChild(text);
 
     } else {
         console.log({
             status: xhr2.status,
             text:xhr2.statusText
         })
     }
}

xhr2.send();