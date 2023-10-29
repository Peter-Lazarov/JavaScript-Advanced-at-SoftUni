function notify(message) {
  //console.log('todo')
  let divNotification = document.getElementById("notification");
  divNotification.textContent = message;
  divNotification.style.display = "block";

  divNotification.addEventListener("click", toggleShowAndHide);

  function toggleShowAndHide(event){
    divNotification.style.display = "none";
  }
}
