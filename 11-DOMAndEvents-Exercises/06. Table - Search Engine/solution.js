function solve() {
   const cells = document.querySelectorAll('tbody tr td')
   const rows = document.querySelectorAll('tbody tr')
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchField = document.getElementById('searchField');
      let searchWord = searchField.value
      for (let i = 0; i < rows.length; i++) {
         rows[i].classList.remove('select')
      }
      for (let i = 0; i < cells.length; i++) {
         if (cells[i].innerHTML.toLowerCase().includes(searchWord.toLowerCase()) && searchWord !== '') {
            cells[i].parentElement.classList.add('select')
         }
      }
      searchField.value = '';
   }
}