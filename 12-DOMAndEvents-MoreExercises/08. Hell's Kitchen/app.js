function solve() {
   const bestRestaurantOutput = document.querySelector('#bestRestaurant p');
   const workersOutput = document.querySelector('#workers p')
   let restaurants = {};

   function onClick () {
      const inputs = JSON.parse(document.querySelector('#inputs textarea').value);
      inputs.forEach(input =>{
         let [restaurant, workers] = input.split(' - ')
         workers = workers.split(", ")
         if (!(restaurant in restaurants)) {
            restaurants[restaurant] = [];
         }
         workers.forEach(worker => {
            let [name, salary] = worker.split(" ")
            restaurants[restaurant].push([name, salary])
         })
      })

      let bestRestaurant = 0;
      let bestRestaurantName = '';

      for (const restaurant in restaurants) {
         let totalSalary = 0;
         let workers = restaurants[restaurant];
         workers.forEach(worker => {
            let salary = worker[1] * 1
            totalSalary += salary
         })
         let avgSalary = totalSalary / restaurants[restaurant].length
         if (avgSalary > bestRestaurant) {
            bestRestaurant = avgSalary;
            bestRestaurantName = restaurant
         }
      }

      let brWorkers = restaurants[bestRestaurantName]
      brWorkers.sort((a, b) => b[1] - a[1]);

      bestRestaurantOutput.textContent = `Name: ${bestRestaurantName} Average Salary: ${bestRestaurant.toFixed(2)} Best Salary: ${(brWorkers[0][1] * 1).toFixed(2)}`
      let output = []
      for (let i = 0; i < brWorkers.length; i++) {
         output.push(`Name: ${brWorkers[i][0]} With Salary: ${brWorkers[i][1]}`)
         
      }
      workersOutput.textContent = output.join(" ")
   }
   document.querySelector('#btnSend').addEventListener('click', onClick);
}