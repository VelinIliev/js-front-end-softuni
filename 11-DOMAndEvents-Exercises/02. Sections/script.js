function create(words) {
   const content = document.getElementById('content');

   for (let i = 0; i < words.length; i++) {
      console.log(words[i]);

      let divItem = document.createElement("div");

      divItem.addEventListener('click', (e) => {
         let p = e.target.children[0];
         p.style.display = 'block'
      })

      let pItem = document.createElement("p");
      pItem.textContent = words[i];
      pItem.setAttribute("style", "display:none;");
      divItem.appendChild(pItem)
      content.appendChild(divItem)
   }
}

