class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    get salaryInfo() {
        return this.salary;
    }

    set salaryInfo(salary) {
        this.salary = salary;
    }

    get ageInfo() {
        return this.age;
    }
    set ageInfo(age) {
        this.age = age;
    }

    get nameInfo() {
        return this.name;
    }
    set nameInfo(age) {
        this.name = name;
    }
}

const employee = new Employee("Edward", 45, 2500);

console.log(employee);

class Programmer extends Employee {
    constructor(name, age, salary, lang) {
        super(name, age, salary);
        this.lang = lang;
    }
    get salaryInfo() {
        return this.salary * 3;
    }

    get langInfo() {
        return this.lang;
    }

    set langInfo(lang) {
        this.lang = lang;
    }

}

const phpDeveloper = new Programmer("Paul", 34, 1500, ["English", "Russian"]);
const javaDeveloper = new Programmer("Edward", 30, 3000, ["English", "German"]);

console.log(phpDeveloper, phpDeveloper.salaryInfo);
console.log(javaDeveloper, javaDeveloper.salaryInfo, javaDeveloper.langInfo);
