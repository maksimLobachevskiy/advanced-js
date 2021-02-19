function fetchFilms(url) {
    fetch(url).then((res) => {
        if (res.ok) {
            return res.json();
        } else {
            throw new Error('Something went wrong');
        }
    }).then((data) => {
        const characters = getActors(data);
        displayData(data);
        const loadChars = document.querySelectorAll(".chars");
        characters.forEach(displayCharacters(loadChars));
    }).catch((error) => {
        console.log(error)
    });

    function getActors({results}) {
        return results.map(({characters}) => {
            return characters;
        });
    }
}

function displayData(data) {
    let output = '';
    data.results.forEach(item => {
        output += `<div>Film ID: ${item["episode_id"]}</div><h3>${item.title}</h3>
                    <p><strong>Short description:</strong> ${item["opening_crawl"]}</p><h3>Characters:</h3><ul class="chars"></ul>`

    })
    document.body.innerHTML = output;
}

function displayCharacters(loadChars) {
    return function (charList, filmId) {
        loadChars[filmId].innerHTML = `<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`;
        const fetchChars = charList.map(charURL => {
            return fetch(charURL).then((res) => {
                return res.json();
            })
        });
        Promise.all(fetchChars).then((data) => {
            loadChars[filmId].innerHTML = "";
            const charNames = data.map(({name}) => name);
            charNames.forEach(item => {
                const li = document.createElement("li");
                li.innerText = item;
                loadChars[filmId].append(li);
            });
        });
    }
}

fetchFilms('https://swapi.dev/api/films/');