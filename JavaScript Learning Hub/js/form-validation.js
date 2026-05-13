document
    .getElementById("signupForm")
    .addEventListener("submit", function(event){
        event.preventDefault();

        let username=document.getElementById("username").value;
        let password=document.getElementById("password").value;
        let errorMessage=document.getElementById("error-message");

        let usernameRegex=/^[a-zA-Z0-9]{5,}$/;
        let passwordRegex=/^(?=.*[A-Z])(?=.*\d).{8,}$/;

        if (!usernameRegex.test(username)){
            errorMessage.innerText="Username must be at least 5 characters (letters&numbers only).";
            return;
        }
        if(!passwordRegex.test(password)){
            errorMessage.innerText="Password must be at least 8 characters with one uppercase letter and one number.";
            return;
        }
        errorMessage.innerText="Form submitted successfully!";
    });
