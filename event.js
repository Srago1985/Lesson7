const btn = document.getElementById('btn');
const name1 = document.getElementById('name1');
const name2 = document.getElementById('name2');
const nameBox = document.getElementById('nameBox');
const names = nameBox.children;


btn.onclick = show;
// name1.onkeyup = valueToUpperCase;
// name1.oninput = valueToUpperCase;
// name2.oninput = valueToUpperCase;

for (let i = 0; i < names.length; i++) {
    names[i].firstElementChild.oninput = valueToUpperCase;
}

function show(e) {
    // console.log(e.target);
    // console.log(e.target === btn);
    for (let i = 0; i < names.length; i++) {
        const paragraph = document.createElement('p');
        const content =  document.createTextNode(`${names[i].firstElementChild.value}`);
        paragraph.appendChild(content);
        document.body.appendChild(paragraph);
        names[i].firstElementChild.value = '';
    }
}

function valueToUpperCase(e) {
    e.target.value = e.target.value.toUpperCase();
}

