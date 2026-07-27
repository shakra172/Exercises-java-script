async function fetchData() {
    console.log("Starting fetching user data");
    
    const response = await fetch ('data.json');

    const data = await response.json();

    console.log("response", data);
}

fetchData();

function greet (name) {
    console.log("Hello ", name);
}

function processUserInput (callback) {
    const name = prompt ("Enter your name");

    callback(name);
}

processUserInput(greet);