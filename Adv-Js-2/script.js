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
    const list = document.getElementById("root");
    const listContainer = document.createElement('ul');
    function makeElem(arrItem, arrIndex) {
        const {author, name, price} = arrItem;
        let li = document.createElement('li');
        if (!author) {
            throw new Error(`no author in book: #${arrIndex + 1}`);
        } else if (!name) {
            throw new Error(`no name in book: #${arrIndex + 1}`);
        } else if (!price) {
            throw new Error(`no price in book: #${arrIndex + 1}`);
        }
        li.innerHTML = `<strong>Author:</strong> ${author}<br><strong>Name:</strong> ${name}<br><strong>Price:</strong> ${price}`;
        return li;
    }
    arr.map((item, index) => {
        try {
            const listElement = makeElem(item, index);
            listContainer.append(listElement);
        } catch (Error) {
            console.log(Error);
        }
    });
    return list.append(listContainer);
}

renderBooks(books);

