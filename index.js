// Add your code here




function submitData(name, email)  {

var user = {}
Object.assign(user, {name: name, email: email});
let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(user)
  };
//    console.log(user)
  fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
    //   console.log(object);
      document.body.innerHTML += object.id
    });
  
};
   
  