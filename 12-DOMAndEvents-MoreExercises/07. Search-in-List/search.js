function search() {
   const searchItems = [...document.querySelectorAll('#towns li')];
   const searchText = document.getElementById('searchText').value;
   const result = document.getElementById('result')

   searchItems.forEach(el => {
      el.style.fontWeight = 'normal';
      el.style.textDecoration = 'none'
   })      

   let matches = 0;
   searchItems.forEach(el => {
      if (el.textContent.toLowerCase().includes(searchText.toLowerCase())) {
         matches += 1;
         el.style.fontWeight = 'bold';
         el.style.textDecoration = 'underline'
      }
      result.textContent = `${matches} matches found`
   })
}
