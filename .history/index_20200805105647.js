// Add your code here
let submitData = (name,email) => {
    let formData = {name: name, email: email}
    let configObj = {
        method: "post",
        headers:{
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        },
        body: JSON.stringify(formData)
    };
    fetch('http://localhost:3000/users', configObj)
        .then(resp => resp.json())
        // .then(json => console.log(json)
        .catch (function (error) {
            alert("Bad things! Ragnarők!");
            console.log(error.message);
        });
};