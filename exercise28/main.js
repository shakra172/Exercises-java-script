function fetchUserData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = false;
            if (success) {
                resolve({name: "Updishakuur" , id:"C1230720"})
            } else {
                reject("fieled to fetch user data");
            }
        }, 2000);
    })
}

async function showFetchData() {
    try {
        const user = await fetchUserData();
        console.log(user)
    } catch (err) {
        console.log(err)
    }
}

showFetchData();