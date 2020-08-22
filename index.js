// Add your code here
let users = 'http://localhost:3000/users';

function submitData(name, email) {
    return fetch(users, {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name,
            email
        })
    }).then(resp => {
        return resp.json();
    }).then(obj => {
      let id = obj.id;
      const h = document.createElement('h1');
      h.innerHTML = id;
      document.body.appendChild(h);
    }).catch(error => {
        const h = document.createElement('h1');
        h.innerHTML = error.message;
        document.body.appendChild(h);
    })
}

