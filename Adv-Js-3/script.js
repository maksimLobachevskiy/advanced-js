class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    get salaryInfo() {
        return this.salary;
    }
    set salaryInfo(newSalary) {
        this.salary = newSalary;
    }
}

const employee = new Employee("Edward", 45, 2500);

class Programmer extends Employee {
    constructor(name, age, salary) {
        super(name, age, salary);

    }
    get salaryInfo() {
        return this.salary * 3;
    }
    set salaryInfo(newSalary) {
        this.salary = newSalary;
    }
}

const programmer = new Programmer("Paul", 34, 1500);

console.log(programmer, programmer.newSalary);