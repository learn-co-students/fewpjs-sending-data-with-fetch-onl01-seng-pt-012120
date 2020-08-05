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
    .then(json => configDom(json))
    .catch (function (error) {
        alert('Unauthorized Access');
    });

    let configDom = (json) =>{
        let body = document.getElementById('body');
        let div = document.createElement('div');
        div.innerText = json.id;
        body.appendChild(div);
    };
};