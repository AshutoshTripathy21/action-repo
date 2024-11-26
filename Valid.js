function validate() {
    try {
        // Fetch form values using their IDs
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();

        // Validate the name field
        if (name === "") {
            document.getElementById("namelocation").innerHTML = "Name cannot be empty";
            return;
        } else {
            document.getElementById("namelocation").innerHTML = "";
        }

        // Validate the email field
        if (email === "") {
            document.getElementById("emaillocation").innerHTML = "Email cannot be empty";
            return;
        } else {
            document.getElementById("emaillocation").innerHTML = "";
        }

        // Validate the password field
        if (password === "") {
            document.getElementById("passwordlocation").innerHTML = "Please provide a password";
            return;
        } else if (password.length < 7) {
            document.getElementById("passwordlocation").innerHTML = "Password should be longer than 7 characters";
            return;
        } else {
            document.getElementById("passwordlocation").innerHTML = "";
        }

        // Validate the confirm password field
        if (confirmPassword === "") {
            document.getElementById("confirmlocation").innerHTML = "Please enter the password again";
            return;
        } else if (confirmPassword !== password) {
            document.getElementById("confirmlocation").innerHTML = "Confirm password does not match";
            return;
        } else {
            document.getElementById("confirmlocation").innerHTML = "";
        }

        // If all validations pass, display success message
        document.getElementById("result").innerHTML = "Form submitted successfully!";
    } catch (err) {
        document.getElementById("result").innerHTML = err;
    }
}
