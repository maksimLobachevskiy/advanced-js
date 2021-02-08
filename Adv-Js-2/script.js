const books = [
    {
        author: "Скотт Бэккер",
        name: "Тьма, что приходит прежде",
        price: 70
    },
    {
        author: "Скотт Бэккер",
        name: "Воин-пророк",
    },
    {
        name: "Тысячекратная мысль",
        price: 70
    },
    {
        author: "Скотт Бэккер",
        name: "Нечестивый Консульт",
        price: 70
    },
    {
        author: "Дарья Донцова",
        name: "Детектив на диете",
        price: 40
    },
    {
        author: "Дарья Донцова",
        name: "Дед Снегур и Морозочка",
    }
];

function renderBooks(arr) {
    try {
        const elements = arr.map((item, index) => {
            const {author, name, price} = item;
            if (!author) {
                return console.log(`Error: no author in book: #${index + 1}`);
            } else if (!name) {
                return console.log(`Error: no name in book: #${index + 1}`);
            } else if (!price) {
                return console.log(`Error: no price in book: #${index + 1}`);
            }
            return `<li>BOOK #${index + 1}<br><strong>Author:</strong> ${author}<br><strong>Name:</strong> ${name}<br><strong>Price:</strong> ${price}</li>`;
        });
        const list = document.getElementById("root");
        list.innerHTML = `<ul>${elements.join(" ")}</ul>`;
    } catch (e) {
        console.log(e);
    }
}
renderBooks(books);