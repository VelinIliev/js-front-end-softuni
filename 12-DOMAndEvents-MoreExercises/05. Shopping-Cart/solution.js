function solve() {
   const buttons = [...document.querySelectorAll('button[class=add-product]')];
   const output = document.querySelector('textarea');
   const chkBtn = document.querySelector('.checkout');

   let products = {}

   buttons.forEach(button => {
      
      button.addEventListener('click', () => {
      let product = button.parentElement.parentElement;
      let price = product.querySelector('.product-line-price').textContent * 1;
      let productName = product.querySelector('.product-title').textContent;
      if (!(productName in products)){
         products[productName] = price
      } else {
         products[productName] += price
      }
      output.textContent += `Added ${productName} for ${price.toFixed(2)} to the cart.\n`
      })
   });

   function calculateTotal() {
      let buyProducts = [];
      let totalPrice = 0;
      for (const key in products) {
         buyProducts.push(key);
         totalPrice += products[key]
      }
      output.textContent += `You bought ${buyProducts.join(", ")} for ${totalPrice.toFixed(2)}.`
      buttons.forEach(button => {
         button.disabled = true;
      })

      chkBtn.disabled = true;
   }

   chkBtn.addEventListener('click', calculateTotal)
}