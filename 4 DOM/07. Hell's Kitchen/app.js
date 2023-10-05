function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let textarea = document.querySelector("body #inputs textarea").value;
      //console.log(textarea);
      textarea = textarea.replace(new RegExp(`\\n`, "g"), "");
      let dataArray = textarea.replace("[\"", "").replace("\"]", "").split("\",\"");
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
            
            employeesAllArray.forEach(employee => {
               let [name, salary] = employee.split(" ");
               salary = Number(salary)

               companiesAll[companyName].employees[name] = salary;
            });
         });

         //calculate average and max salary
         let keysOfCompanies = Object.keys(companiesAll);
         let calculateAverage = 0;
         let measuringMax = 0;

         for (const company of keysOfCompanies) {
            let keysOfObjectEmployees = Object.keys(companiesAll[company].employees);
            for (const employee of keysOfObjectEmployees) {
               calculateAverage += companiesAll[company].employees[employee];
               if(companiesAll[company].employees[employee] > measuringMax){
                  measuringMax = companiesAll[company].employees[employee];
               }
            }
            calculateAverage = calculateAverage / keysOfObjectEmployees.length;
            companiesAll[company].averageSalary = calculateAverage;
            companiesAll[company].maxSalary = measuringMax;
            calculateAverage = 0;
            measuringMax = 0;
         }

         //compare resturants
         let currentAverageSalary = 0;
         let bestCompany = "";
         for (const company of keysOfCompanies) {
            //console.log(companiesAll[company].averageSalary);
            if(companiesAll[company].averageSalary > currentAverageSalary){
               currentAverageSalary = companiesAll[company].averageSalary;
               bestCompany = company;
            }
         }
         //console.log(`Name: ${bestCompany} Average Salary: ${companiesAll[bestCompany].averageSalary.toFixed(2)} Best Salary: ${companiesAll[bestCompany].maxSalary.toFixed(2)}`);
         document.getElementById("bestRestaurant").getElementsByTagName("p")[0].textContent = `Name: ${bestCompany} Average Salary: ${companiesAll[bestCompany].averageSalary.toFixed(2)} Best Salary: ${companiesAll[bestCompany].maxSalary.toFixed(2)}`;

         //let keysOfEmployees = Object.keys(companiesAll[bestCompany].employees);
         let enriesOfObjectEmployees = Object.entries(companiesAll[bestCompany].employees);
         enriesOfObjectEmployees = enriesOfObjectEmployees.sort((a, b) => b[1] - a[1]);
         let employeesAtBestCompany = "";
         for (const employee of enriesOfObjectEmployees) {
            //console.log(`Name: ${employee} With Salary: ${companiesAll[bestCompany].employees[employee]}`);
            employeesAtBestCompany = employeesAtBestCompany + ` Name: ${employee[0]} With Salary: ${companiesAll[bestCompany].employees[employee[0]]}`
         }

         document.getElementById("workers").getElementsByTagName("p")[0].textContent = employeesAtBestCompany.trim();

   }
   //console.log();
}

//solve();
