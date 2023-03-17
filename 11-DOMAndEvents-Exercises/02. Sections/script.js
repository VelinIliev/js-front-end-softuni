function create(words) {
   const content = document.getElementById('content');

   for (let i = 0; i < words.length; i++) {

      let divItem = document.createElement("div");
      let pItem = document.createElement("p");
      pItem.textContent = words[i];
      pItem.setAttribute("style", "display:none;");

      divItem.addEventListener('click', () => {
         pItem.style.display = 'block'
      })

      divItem.appendChild(pItem)
      content.appendChild(divItem)
   }
}

