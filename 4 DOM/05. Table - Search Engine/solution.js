function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let seachText = document.getElementById("searchField").value;

      let rowsAll = document.querySelectorAll("tbody tr");
      for (const row of rowsAll) {
         if(row.textContent.includes(seachText)){
            row.className = "select";
         }else{
            row.className = "";
         }
      }
   }
}