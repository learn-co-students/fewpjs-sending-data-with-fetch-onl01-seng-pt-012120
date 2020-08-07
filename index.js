// Add your code here
const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: "Steve",
      email: "steve@steve.com"
    })
  }
  function submitData() {
    return fetch('http://localhost:3000/users',configurationObject)
      .then(function(response){
        return response.json();
      })
      .then(function(object){
        let h1 = document.createElement('h1')
        h1.textContent = object.id
        document.body.appendChild(h1)
        console.log(object);
      })
      .catch(function(error){
        let h2 = document.createElement('h2')
        h2.textContent = error.message
        document.body.appendChild(h2);
      })
  }