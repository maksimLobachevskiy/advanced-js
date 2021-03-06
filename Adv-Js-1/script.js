//TASK1////////////////////////////
const clients1 = ["Гилберт", "Сальваторе", "Пирс", "Соммерс", "Форбс", "Донован", "Беннет"];
const clients2 = ["Пирс", "Зальцман", "Сальваторе", "Майклсон"];
function uniqueArr(arr) {
let clients3 = [];
    for (let str of arr) {
        if (!clients3.includes(str)) {
            clients3.push(str);
        }
    }
    return clients3;
}
console.log(uniqueArr([...clients2, ...clients1]));

//TASK2////////////////////////////
const characters = [
    {
        name: "Елена",
        lastName: "Гилберт",
        age: 17,
        gender: "woman",
        status: "human"
    },
    {
        name: "Кэролайн",
        lastName: "Форбс",
        age: 17,
        gender: "woman",
        status: "human"
    },
    {
        name: "Аларик",
        lastName: "Зальцман",
        age: 31,
        gender: "man",
        status: "human"
    },
    {
        name: "Дэймон",
        lastName: "Сальваторе",
        age: 156,
        gender: "man",
        status: "vampire"
    },
    {
        name: "Ребекка",
        lastName: "Майклсон",
        age: 1089,
        gender: "woman",
        status: "vempire"
    },
    {
        name: "Клаус",
        lastName: "Майклсон",
        age: 1093,
        gender: "man",
        status: "vampire"
    }
];

let charactersShortInfo = characters.map(({name, lastName, age}) => {
    return {name, lastName, age};
});


//
// function newChar() {
//     characters.forEach(({name, lastName, age}) => {
//         charactersShortInfo.push({name, lastName, age});
//     });
//     return charactersShortInfo;
// }

console.log(charactersShortInfo);

//TASK3////////////////////////////
const user1 = {
    name: "John",
    years: 30,
};
let {name, years: age, isAdmin = false} = user1;
console.log(name, age, isAdmin);

//TASK 4/////////////////////////////
const satoshi2020 = {
    name: 'Nick',
    surname: 'Sabo',
    age: 51,
    country: 'Japan',
    birth: '1979-08-21',
    location: {
        lat: 38.869422,
        lng: 139.876632
    }
}

const satoshi2019 = {
    name: 'Dorian',
    surname: 'Nakamoto',
    age: 44,
    hidden: true,
    country: 'USA',
    wallet: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
    browser: 'Chrome'
}

const satoshi2018 = {
    name: 'Satoshi',
    surname: 'Nakamoto',
    technology: 'Bitcoin',
    country: 'Japan',
    browser: 'Tor',
    birth: '1975-04-05'
}

const fullProfile = {...satoshi2018, ...satoshi2019, ...satoshi2020};
console.log(fullProfile);

//TASK 5////////////////////////////
const books = [{
    name: 'Harry Potter',
    author: 'J.K. Rowling'
}, {
    name: 'Lord of the rings',
    author: 'J.R.R. Tolkien'
}, {
    name: 'The witcher',
    author: 'Andrzej Sapkowski'
}];

const bookToAdd = {
    name: 'Game of thrones',
    author: 'George R. R. Martin'
}
const books2 = [...books, {name, author} = bookToAdd];
console.log(books2);

//TASK6////////////////////////////
const employee = {
    name: 'Vitalii',
    surname: 'Klichko'
}

const employee2 = {...employee, age: 40, salary: 2000};
console.log(employee2);

//TASK7////////////////////////////
const array = ['value', () => 'showValue'];

// Допишите ваш код здесь
let [value, showValue] = array;

alert(value); // должно быть выведено 'value'
alert(showValue());  // должно быть выведено 'showValue'
