const header = document.querySelector('#header');
console.log(header)

const pragraph = document.querySelectorAll('.divi')[1]
console.log(pragraph);

function changeContent() {
    header.textContent = "Welcome My Name is Updishakuur"
}

function changeElement() {
    pragraph.innerHTML = "Hi There I am a web developer";
}
