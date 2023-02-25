function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      const inputs = JSON.parse(document.querySelector('#inputs textarea').value);
      const bestRestaurantOutput = document.querySelector('#bestRestaurant p');
      const workersOutput = document.querySelector('#workers p')

      let restaurants = {};
      
      for (let i = 0; i < inputs.length; i++) {
         let [restaurant, workers] = inputs[i].split(' - ')
         workers = workers.split(", ")
         if (!(restaurant in restaurants)) {
            restaurants[restaurant] = [];
         }
         for (let i = 0; i < workers.length; i++) {
            let [name, salary] = workers[i].split(" ")
            restaurants[restaurant].push([name, salary])
         }
      }
      let bestRestaurant = 0;
      let bestRestaurantName = '';

      for (const key in restaurants) {
         let totalSalary = 0;
         let workersSalary = restaurants[key];

         for (let i = 0; i < workersSalary.length; i++) {
            // console.log(workersSalary[i][1] * 1);
            totalSalary += workersSalary[i][1] * 1
         }
         // console.log(totalSalary);
         let avgSalary = totalSalary / restaurants[key].length
         // console.log(totalSalary / restaurants[key].length);
         if (avgSalary > bestRestaurant) {
            bestRestaurant = avgSalary;
            bestRestaurantName = key
         }
      }

      let brWorkers = restaurants[bestRestaurantName]
      brWorkers.sort((a, b) => b[1] - a[1]);

      bestRestaurantOutput.innerHTML = `Name: ${bestRestaurantName} Average Salary: ${bestRestaurant.toFixed(2)} Best Salary: ${(brWorkers[0][1] * 1).toFixed(2)}`
      let output = []
      for (let i = 0; i < brWorkers.length; i++) {
         output.push(`Name: ${brWorkers[i][0]} With Salary: ${brWorkers[i][1]}`)
         
      }
      workersOutput.innerHTML = output.join(" ")
   }
}