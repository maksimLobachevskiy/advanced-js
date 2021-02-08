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
    const elements = arr.map((item, index) => {
        const {author, name, price} = item;
        try {
            if (!author) {
                throw new Error(`Error: no author in book: #${index + 1}`);
            } else if (!name) {
                throw new Error(`Error: no name in book: #${index + 1}`);
            } else if (!price) {
                throw new Error(`Error: no name in book: #${index + 1}`);
            } else {
                return `<li>BOOK #${index + 1}<br><strong>Author:</strong> ${author}<br><strong>Name:</strong> ${name}<br><strong>Price:</strong> ${price}</li>`;
            }
        } catch (Error) {
            console.error(Error);
        }
    });
    const list = document.getElementById("root");
    list.innerHTML = `<ul>${elements.join(" ")}</ul>`;
}

renderBooks(books);

