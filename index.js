function submitData (a, b) {
    let user = {name: a, email: b};
    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(user)
      };
    return fetch('http://localhost:3000/users', configObj)
    .then(function(response) {return response.json();})
    .then(function(object) {showId(object);})
    .catch(function(error) {
        document.body.append(error.message);
      });
}

function showId(a) {
    let b = a.id;
    document.body.append(b)
}