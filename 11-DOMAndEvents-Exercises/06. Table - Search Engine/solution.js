function solve() {
   const cells = [...document.querySelectorAll('tbody tr td')];
   const rows = [...document.querySelectorAll('tbody tr')];
   const searchField = document.getElementById('searchField');
   

   function searchEngine() {
      let searchWord = searchField.value

      rows.forEach(row => {
         row.classList.remove('select')
      })

      cells.forEach(cell =>{
         if (cell.textContent.toLowerCase().includes(searchWord.toLowerCase()) 
                  && searchWord !== '') {
            cell.parentElement.classList.add('select')
         }
      })
      searchField.value = '';
   }
   document.querySelector('#searchBtn').addEventListener('click', searchEngine);
}