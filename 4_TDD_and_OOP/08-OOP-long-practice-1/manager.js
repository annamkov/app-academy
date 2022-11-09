const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, salary, title, manager){
        super(name, salary, title, manager);
        this.employees = [];
    }

    addEmployee(employee){
        if(employee instanceof Employee){
            this.employees.push(employee);
        }else{
            throw new Error('Invalid employee');
        }
    }

    calculateBonus(multiplier){
        return (this.salary + this._totalSubSalary()) * multiplier;
    }

    _totalSubSalary(){
        let sum = 0;
        this.employees.forEach(employee => {
            sum += employee.salary;
            if(employee instanceof Manager){
                sum += employee._totalSubSalary();
            }
        });
        return sum;
    }
}


module.exports = Manager;