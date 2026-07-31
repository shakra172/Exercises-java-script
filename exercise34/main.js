const list = document.querySelector('#list');

function addItem() {
    const Item5 = document.createElement('li')
    Item5.textContent ="item5"
    list.appendChild(Item5)
}

function removeItem() {
    if(list.lastChild) {
        list.removeChild(list.lastChild)
    }else{
        alert ('Proh shaqada wee dhamaatay Dne')
    }
}