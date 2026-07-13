function fetchUserData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve({name: "Updishakuur" , id:"C1230720"})
            } else {
                reject("fieled to fetch user data");
            }
        }, 2000);
    })
}

fetchUserData()
    .then((data) => console.log("user data", data))
    .catch((err) => console.log(err));