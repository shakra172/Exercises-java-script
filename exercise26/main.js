function fetchUserData(callback) {
    alert ("fetching user data");
    setTimeout(() => {
        const user = {name:"shakra" , id:1 , facult:"IT"}
        callback (user);
    }, 3000);
}

fetchUserData (function (user) {
    console.log(user)
});

function getUserDate(callback){
    alert ("get user date");
    setTimeout(()=> {
       const user = {name:"iqro", id:4,} 
       callback (user)
    }, 5000);
}
getUserDate (function (user) {
    console.log(user)
});