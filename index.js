// Add your code here
function submitData(name, email){
    let formData = {
        name: `${name}`,
        email: `${email}`
      };
       
      let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      };
       
      return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            myFunction(object.id);
        })
        .catch(function(error) {
            alert("Bad things! Ragnarők!");
            myFunction(error.message);
        });
}

function myFunction(object) {
    var node = document.createElement("h1");
    var textnode = document.createTextNode(object);
    node.appendChild(textnode);
    document.querySelector("body").appendChild(node);
  }