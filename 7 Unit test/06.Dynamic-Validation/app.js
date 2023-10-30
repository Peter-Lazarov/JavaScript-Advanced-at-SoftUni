function validate() {
    let inputEmail = document.getElementById("email");
    inputEmail.addEventListener("change", changeProcessor);

    function changeProcessor(event){
        let value = inputEmail.value;
        let patternEmail = /[a-z]+@[a-z]+\.[a-z]+/;

        patternEmail.test(value) ? inputEmail.classList.remove("error") : inputEmail.classList.add("error");
    }
}
