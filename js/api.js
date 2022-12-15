let url = 'https://jsonplaceholder.typicode.com/users';
fetch(url)
    .then(response => response.json())
    .then(data => showData(data))
    .catch(error => console.log(error))

    const showData = (data) => {
        console.log(data);
        let body='';

        for (let i=0; i<data.length; i++){
            body += `<tr> <td>${data[i].id}</td> <td>${data[i].name}</td> <td>${data[i].username}</td> <td>${data[i].email}</td>  <td>${data[i].phone}</td> <td>${data[i].website}</td>  </tr>`
        }
        document.getElementById('data').innerHTML = body;
    }

