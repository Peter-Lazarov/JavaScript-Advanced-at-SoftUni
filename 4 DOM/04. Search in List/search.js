function search() {
   let searched = document.getElementById("searchText").value.toLowerCase();
   let townsAll = document.querySelectorAll("#towns li");

   let matchCounter = 0;
   for (let i = 0; i < townsAll.length; i++) {
      if(townsAll[i].innerHTML.toLowerCase().indexOf(searched) > -1){
         townsAll[i].style.fontWeight = "bold";
         townsAll[i].style.textDecoration = "underline";
         matchCounter++;
      }
   }

   document.getElementById("result").innerHTML = `${matchCounter} matches found`;
}
