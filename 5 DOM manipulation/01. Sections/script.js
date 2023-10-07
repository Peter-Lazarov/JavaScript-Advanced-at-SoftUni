function create(words) {
   const contentDiv = document.getElementById("content");

   for (let word of words) {
      let divNew = document.createElement("div");
      let pNew = document.createElement("p");
      pNew.style.display = "none";
      pNew.textContent = word;
      
      divNew.addEventListener("click", onClickAction);

      divNew.appendChild(pNew);
      contentDiv.appendChild(divNew);
   }

   function onClickAction (e){
      let divElement = e.currentTarget;
      let pElement = divElement.children[0];
      pElement.style.display = "block";
   }

   //console.log(words);
}