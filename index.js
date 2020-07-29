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
    body: JSON.stringify(userData)
  }

  const url = "http://localhost:3000/users"

  function renderInfo(json) {
    const main = document.querySelector('main')
    let id = json.id
    let h1 = document.createElement("h1")
    h1.innerText = id
    main.appendChild(h1)
  }

  function renderError(msg) {
    const main = document.querySelector('main')
    let h1 = document.createElement('h1');
    h1.innerText = msg
    main.appendChild(h1)
  }

  fetch(url, config)
    .then(response => response.json())
    // .then(json => console.log(json))
    .then(json => renderInfo(json))
    // .catch(error => console.log(error.message))
    .catch(error => renderError(error.message))
}

// document.addEventListener('click', () => alert('u clicked'))