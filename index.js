// Add your code here


function submitData(name,email){
    
    let configObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        name: name,
        email: email
    })
};

     return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        const element = document.querySelector("body");
        const h1 = document.createTextNode(object.id);
        element.appendChild(h1);
        console.log(object);
      })

      .catch(function(error) {
        alert("We've encountered an error");
        const element = document.querySelector("body");
        const h2 = document.createTextNode(error.message);
        element.appendChild(h2)
        console.log(error.message);
      });
    
}