function solve() {
   const buttons = document.querySelectorAll('button[class=add-product]');
   const output = document.querySelector('textarea');
   const chkBtn = document.querySelector('.checkout');

   let products = {}

   for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', () => {
         let price = buttons[i].parentElement.parentElement.children[3].innerHTML * 1;
         let product = buttons[i].parentElement.parentElement.children[1].children[0].innerHTML;
         if (!(product in products)){
            products[product] = price
         } else {
            products[product] += price
         }
         output.innerHTML += `Added ${product} for ${price.toFixed(2)} to the cart.\n`
         
      })
   }
   chkBtn.addEventListener('click', () => {
      let buyProducts = [];
      let totalPrice = 0;
      for (const key in products) {
         buyProducts.push(key);
         totalPrice += products[key]
      }
      output.innerHTML += `You bought ${buyProducts.join(", ")} for ${totalPrice.toFixed(2)}.`
      for (let i = 0; i < buttons.length; i++) {
         buttons[i].disabled = true;
         chkBtn.disabled = true;
      }
   })
}