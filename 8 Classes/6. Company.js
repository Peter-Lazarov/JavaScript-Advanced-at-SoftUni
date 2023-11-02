function isNotEmpty(parameter){
    if(parameter == undefined || parameter == "" || parameter == null){
        throw new Error("Invalid input!");
    }else{
        return true;
    }
}

function compare(a, b){
    if(a.salary != b.salary){
        return b.salary - a.salary;
    }else {
        return a.name.localeCompare(b.name);
    }
}

class Company{
    constructor(){
        this.departments = {};
    }

    addEmployee(name, salary, position, department){
        let newEmployee = {};

        if(isNotEmpty(name)){
            newEmployee.name = name;
        }

        if(isNotEmpty(salary)){
            salary = Number(salary);
            if(salary < 0){
                throw new Error("Invalid input!");
            }else{
                newEmployee.salary = salary;
            }
            
        }

        if(isNotEmpty(position)){
            newEmployee.position = position;
        }

        if(isNotEmpty(department)){
            if(!this.departments.hasOwnProperty(department)){
                this.departments[department] = {Employees: [], AverageSalary: 0};
            }
            this.departments[department].Employees.push(newEmployee);
            this.departments[department].AverageSalary += salary;

            console.log(`New employee is hired. Name: ${name}. Position: ${position}`);
        }
    }

    bestDepartment(){
        for (const department of Object.keys(this.departments)) {
            this.departments[department].AverageSalary = this.departments[department].AverageSalary/this.departments[department].Employees.length;
        }

        let bestDepartmentInstance = Object.entries(this.departments).sort((a,b) => b[1].AverageSalary - a[1].AverageSalary)[0];
        bestDepartmentInstance[1].Employees.sort(compare);
        
        console.log(`Best Department is: ${bestDepartmentInstance[0]}`);
        console.log(`Average salary: ${bestDepartmentInstance[1].AverageSalary}`);
        for (const Employee of bestDepartmentInstance[1].Employees) {
            console.log(`${Employee.name} ${Employee.salary} ${Employee.position}`);
        }
    }
}

// This function should return the department with the highest average salary rounded to the second digit 
// after the decimal point and 

// its employees sorted by their salary by descending order 
// and by their name in ascending order as a second criterion:

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
