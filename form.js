function resetAll() {
    var userName = document.getElementById("nameValue");
    var passWord = document.getElementById("passwordValue");
    var confirmPassWord = document.getElementById("conPassValue");
    var homeAddress = document.getElementById("addressValue");
    var email = document.getElementById("emailValue");
    var male = document.getElementById("maleChecked");
    var female = document.getElementById("femaleChecked");
    var country = document.getElementById("dropMenu");

    userName.value = "";
    passWord.value = "";
    confirmPassWord.value = "";
    homeAddress.value = "";
    email.value = "";
    male.checked = false;
    female.checked = false;
    country.selectedIndex = 0;
    userName.focus();
}

function confirmValidity() {

    checkFillName();
    var validUserName = false;
    var validPassword = false;
    var validAddress = false;
    var validEmail = false;
    var validGender = false;
    var validCountry = false;

    function checkFillName() {

        //check the username field empty or not
        var userName = document.getElementById("nameValue");
        if (userName.value == "") {
            
            alert("Username field cannot be empty!");
            userName.focus();
        } else {
            //check the username field not empty check the validity of user name
            const userNameRgx = /^[a-zA-Z][a-zA-Z0-9._-]{5,29}$/;
            if (!(userNameRgx.test(userName.value))) {
                alert("Username should, \n- Start with alphabetical character\n- Can include numeric characters \n- Max length 30 characters \n- Min length 6 characters\n- Can include _  or . or - ");
                userName.value = "";
                userName.focus();
            } else {
                validUserName = true;
                checkPassword();
            }
        }
    }


    function checkPassword() {

        // check the password filed empty or not

        const passWord = document.getElementById("passwordValue");
        if (passWord.value == "") {
            alert("Password field cannot be empty!");
            passWord.focus();
        } else {
            const PassRgx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+-=\\[\]{};':"\\|,.<>\\/?]).{8,12}$/;
            // if password field is not empty check the validity of the password    
            if (!(PassRgx.test(passWord.value))) {
                alert("The password , \n- must be at least 8 characters long\n- Max length 12 characters \n- must contain at least one digit\n- must contain at least one lowercase letter\n- must contain at least one uppercase letter\n- must contain at least one special character");
                passWord.value = "";
                passWord.focus();
            } else {
                confirmPassword(passWord);
            }
        }
    }

    function confirmPassword(conPassword) {

        // check the confirm password field empty or not
        const confirmPWord = document.getElementById("conPassValue");
        if (confirmPWord.value == "") {
            alert("Confirm password field cannot be empty!");
            confirmPWord.focus();
        } else {

            // if the confirm password field not empty check the both password and confirm password fields values are similar
            if (conPassword.value != confirmPWord.value) {
                alert("Passwords do not match!.\nPlease make sure both passwords match and try again.");
                confirmPWord.value = "";
                conPassword.focus();
                conPassword.value = "";
            } else {
                validPassword = true;
                confirmAddress();
            }
        }
    }

    function confirmAddress() {

        // Confirm the address field is not empty
        var homeAddress = document.getElementById("addressValue");
        if (homeAddress.value == "") {
            alert("Home address field cannot be empty!");
            homeAddress.focus();
        } else {
            validAddress = true;
            confirmEmail();
        }
    }

    function confirmEmail() {

        //confirm the email field is not empty
        var email = document.getElementById("emailValue");
        if (email.value == "") {
            alert("Email field cannot be empty!");
            email.focus();
        } else {

            // if email field if not empty check the validity of email
            const emailRgx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!(emailRgx.test(email.value))) {
                alert("The email address you entered is not valid.\nPlease enter a valid email address \n(e.g. example@example.com) and try again.");
                email.value = "";
                email.focus();
            } else {
                validEmail = true;
                confirmGender();
            }
        }
    }

    function confirmGender() {

        // confirm gender selected
        var male = document.getElementById("maleChecked");
        var female = document.getElementById("femaleChecked");
        if (male.checked == false && female.checked == false) {
            alert("Please select a gender to proceed.");
        } else {
            validGender = true;
            confirmCountry();
        }
    }

    function confirmCountry() {

        // confirm select one country
        var country = document.getElementById("dropMenu");
        if (country.selectedIndex == 0) {
            alert("Please select a country to proceed.");
        } else {
            validCountry = true;
            confirmValid();
        }
    }

    function confirmValid(){

        //when all the fields are validated, give a confirm message and clear the fields
        if(validUserName && validPassword && validAddress && validEmail && validGender && validCountry ){
            alert("Your form has been successfully submitted!");
            resetAll();
        }else{
            
            alert("We\'re sorry, there was an issue submitting your form.\nPlease try again later");
        }
    }
}

