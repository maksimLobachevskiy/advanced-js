const btn = document.getElementById('ip-request');
const root = document.getElementById('root');

btn.addEventListener('click', postData);
async function postData() {
    const response = await fetch('https://api.ipify.org/?format=json', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },

    }).then(response => response.json());

    const getResponse = await fetch(`http://ip-api.com/json/${response.ip}?fields=continent,country,regionName,city,district`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(getResponse => getResponse.json());

    let ul = document.createElement('ul')
    let html = `<li class="list-group-item">Your IP: ${response.ip}</li><li class="list-group-item">Continent: ${getResponse.continent}</li><li class="list-group-item">Country: ${getResponse.country}</li><li class="list-group-item">Region: ${getResponse.regionName}</li><li class="list-group-item">City: ${getResponse.city}</li>
<li class="list-group-item">District: ${getResponse.district}</li>`
    ul.classList.add('list-group');
    ul.innerHTML = html;
    root.append(ul);
}

