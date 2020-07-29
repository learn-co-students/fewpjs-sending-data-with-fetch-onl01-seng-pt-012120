function submitData(userName, userEmail) {

  let userData = {
    name: userName,
    email: userEmail
  }

  let config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    // apparently with the below it automatically adds the keys based on the variables
    // body: JSON.stringify({name, email})
    body: JSON.stringify(userData)
  }

  function renderInfo(json) {
    const main = document.querySelector('main')
    const id = json.id
    const h1 = document.createElement("h1")
    h1.innerHTML = id
    main.appendChild(h1)
  }

  function renderError(msg) {
    const main = document.querySelector('main')
    let h1 = document.createElement('h1');
    h1.innerHTML = msg
    main.appendChild(h1)
  }

  const url = "http://localhost:3000/users"

  return fetch(url, config)
    .then(response => response.json())
    // .then(json => document.body.innerHTML = json['id'])
    .then(json => renderInfo(json))
    // .catch(error => document.body.innerHTML = error.message)
    .catch(error => renderError(error.message))
}

// document.addEventListener('click', () => alert('u clicked'))