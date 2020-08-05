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
        console.log(error.message);
    });

    let configDom = (json) =>{
        let body = document.getElementById('body');
        if (ul = document.getElementById('ul')) {
            let li = document.createElement('li');
            li.innerText = json.id + '. ' + json.name;
            ul.appendChild(li);
        } else {
            let ul = document.createElement('ul');
            let li = document.createElement('li');
            li.innerText = `${json.id}. ${json.name}`;
            ul.appendChild(li);
            body.appendChild(ul);
        }
    };
};