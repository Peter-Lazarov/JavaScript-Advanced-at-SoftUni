function validate() {
    
    function companyFieldSetShow() {
        let companyInfoFieldSet = document.getElementById("companyInfo");

        if (companyCheckBox.checked) {
            companyInfoFieldSet.style.display = "block";
        } else {
            companyInfoFieldSet.style.display = "none";
        }
    }

    let companyCheckBox = document.getElementById("company");
    companyCheckBox.addEventListener("change", companyFieldSetShow);

    //Submit part
    let submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", onSubmit);

    function onSubmit(event) {
        let isUsernameValid = false;
        let isEmailValid = false;
        let isPasswordValid = false;
        let isCompanyValid = false;

        function usernameProcessor() {
            //<input id="username" type="text">
            let usernamePattern = /^[a-zA-Z0-9]{3,20}$/;
            let usernameField = document.getElementById("username");

            let usernameValue = usernameField.value;
            if (usernameValue.length > 0 && usernamePattern.test(usernameValue)) {
                usernameField.style.border = "none";
                isUsernameValid = true;
            } else {
                usernameField.style.border = "";
                usernameField.style.borderColor = "red";
                isUsernameValid = false;
            }
        }

        function emailProcessor() {
            let emailField = document.getElementById("email");
            let emailValue = emailField.value;

            let emailPattern = /.*@.*\..*/;

            if (emailValue.length > 0 && emailPattern.test(emailValue)) {
                emailField.style.border = "none";
                isEmailValid = true;
            } else {
                emailField.style.border = "";
                emailField.style.borderColor = "red";
                isEmailValid = false;
            }

            // let indexOfA = emailValue.indexOf("@");
            // let indexOfDot = emailValue.indexOf(".");
            // if(emailValue.length > 0 && indexOfA > -1 && indexOfDot > indexOfA){
            //     emailField.style.border = "none";
            //     isEmailValid = true;
            // }else{
            //     emailField.style.border = "";
            //     emailField.style.borderColor = "red";
            //     isEmailValid = false;
            // }
        }

        function passwordsProcessor() {
            let passwordPattern = /^[\w]{5,15}$/; ///^[a-zA-Z0-9_]{5,15}$/;
            let passwordField = document.getElementById("password");
            let confirmPasswordField = document.getElementById("confirm-password");

            let passwordValue = passwordField.value;
            let confirmPasswordValue = confirmPasswordField.value;

            if (passwordValue.length > 0 && passwordPattern.test(passwordValue) && passwordValue === confirmPasswordValue) {
                isPasswordValid = true;
                passwordField.style.border = "none";
                confirmPasswordField.style.border = "none";
            } else {
                isPasswordValid = false;
                passwordField.style.border = "";
                confirmPasswordField.style.border = "";
                passwordField.style.borderColor = "red";
                confirmPasswordField.style.borderColor = "red";
            }
        }

        function companyNumberProcessor() {
            let companyNumberField = document.getElementById("companyNumber");
            let companyNumberFieldValue = companyNumberField.value;

            if (companyNumberFieldValue.length > 0 && Number(companyNumberFieldValue) > 999 && Number(companyNumberFieldValue) < 10000) {
                companyNumberField.style.border = "none";
                isCompanyValid = true;
            } else {
                companyNumberField.style.border = "";
                companyNumberField.style.borderColor = "red";
                isCompanyValid = false;
            }
        }

        

        usernameProcessor();
        emailProcessor();
        passwordsProcessor();
        if (companyCheckBox.checked) {
            companyNumberProcessor();
        } else {
            isCompanyValid = true;
        }

        let divValid = document.getElementById("valid");
        if (isUsernameValid && isEmailValid && isPasswordValid && isCompanyValid) {
            divValid.style.display = "block";
        } else {
            divValid.style.display = "none";
            //divValid.style.display = "block";
        }

        event.preventDefault();
    }
}
