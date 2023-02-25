function search() {
   const towns = document.getElementById('towns');
   const searchItems = document.querySelectorAll('#towns li');
   const searchText = document.getElementById('searchText').value;
   const result = document.getElementById('result')

   for (let i = 0; i < searchItems.length; i++) {
      searchItems[i].style.fontWeight = 'normal';
      searchItems[i].style.textDecoration = 'none'
   }

   let matches = 0;
   for (let i = 0; i < searchItems.length; i++) {
      if (searchItems[i].innerHTML.toLowerCase().includes(searchText.toLowerCase())) {
         matches += 1;
         searchItems[i].style.fontWeight = 'bold';
         searchItems[i].style.textDecoration = 'underline'
      }
      result.innerHTML = `${matches} matches found`
   }
}
