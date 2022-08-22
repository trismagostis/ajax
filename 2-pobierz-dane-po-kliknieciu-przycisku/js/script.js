console.log(`AJAX - Warsztat - Pobierz dane po kliknięciu przycisku`);

let btnGetData = document.getElementById('get-data');

const getData = () => {

    fetch('https://akademia108.pl/api/ajax/get-post.php')
        .then(res => res.json())
        .then(data => {

            let pId = document.createElement('p');
            let pUserId = document.createElement('p');
            let pTitle = document.createElement('p');
            let pBody = document.createElement('p');
            let hr = document.createElement('hr');

            pId.innerText = `Post ID: ${data.id}`;
            pUserId.innerText = `User ID: ${data.userId}`;
            pTitle.innerText = `Title: ${data.title}`;
            pBody.innerText = `Body: ${data.body}`;

            document.body.appendChild(pId);
            document.body.appendChild(pUserId);
            document.body.appendChild(pTitle);
            document.body.appendChild(pBody);
            document.body.appendChild(hr);

            // console.log(data);
        })
        .catch(error => {
            console.error(error);
        })

    // console.log(`getData()`);
}

btnGetData.addEventListener('click', getData);