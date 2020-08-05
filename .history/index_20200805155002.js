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

    // let configDom = (json) =>{
    //     let body = document.getElementById('body');
    //     let div = document.createElement('div');
    //     div.innerText = json.id;
    //     console.log(div.innerText)
    //     body.appendChild(div);
    // };

    return fetch('http://localhost:3000/users', configObj)
    .then(resp => resp.json())
    .then(json => {
        document.body.append(json.id);
    })
    .catch (function (error) {
        if (error.code = '401') {
            alert('Unauthorized Access');
        }
    });

};