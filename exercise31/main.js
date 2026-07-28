async function fetchUsers(){
    try{

        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        if(!response.ok){
            throw new Error ('HTTP error! status ${response.status}');
        }

        console.log(response);

        const data = await response.json();
        console.log("response", data);
    }catch(error){
        console.log(error);
    }
}

fetchUsers();