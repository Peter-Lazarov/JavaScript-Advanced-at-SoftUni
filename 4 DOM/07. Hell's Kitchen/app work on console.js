function solve(dataArray) {
   //document.querySelector('#btnSend').addEventListener('click', onClick);

   // function onClick () {
   //    //   TODO:

   // }
   //console.log(dataArray);
   let companiesAll = {};
   dataArray.forEach(element => {
      let companyName = element.replace(new RegExp(` -.*`), "");
      if(!companiesAll.hasOwnProperty(companyName)){
         companiesAll[companyName] = {
            employees: {},
         };
      }

      let employeesAllString = element.replace(new RegExp(`^.*?- `), "");
      let employeesAllArray = employeesAllString.split(", ");
      let calculateAverage = 0;
      let measuringMax = 0;

      employeesAllArray.forEach(employee => {
         let [name, salary] = employee.split(" ");
         salary = Number(salary)

         companiesAll[companyName].employees[name] = salary;
         calculateAverage += salary;
         if(salary > measuringMax){
            measuringMax = salary;
         }
      });

      companiesAll[companyName].averageSalary = calculateAverage / employeesAllArray.length;
      companiesAll[companyName].maxSalary = measuringMax;
   });

   let currentAverageSalary = 0;
   let bestCompany = "";
   let keysOfCompanies = Object.keys(companiesAll);
   for (const company of keysOfCompanies) {
      //console.log(companiesAll[company].averageSalary);
      if(companiesAll[company].averageSalary > currentAverageSalary){
         currentAverageSalary = companiesAll[company].averageSalary;
         bestCompany = company;
      }
   }
   console.log(`Name: ${bestCompany} Average Salary: ${companiesAll[bestCompany].averageSalary.toFixed(2)} Best Salary: ${companiesAll[bestCompany].maxSalary.toFixed(2)}`);
   
   let keysOfEmployees = Object.keys(companiesAll[bestCompany].employees);
   for (const employee of keysOfEmployees) {
      console.log(`Name: ${employee} With Salary: ${companiesAll[bestCompany].employees[employee]}`);
   }
   

   console.log();
}

solve(["PizzaHut - Peter 500",
   "TheLake - Bob 300",
   "PizzaHut - George 300, Mark 800"]);
