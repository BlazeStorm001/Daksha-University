function validateForm() {
    var name = document.forms["reg-form"]["Name"].value;
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }

    var phone;
    phone = document.forms["reg-form"]["Phone"].value;

    if (isNaN(phone) || phone < 1000000000 || phone > 9999999999) {
        alert("INVALID PHONE NUMBER");
        return false;
    }

    var email = document.forms["reg-form"]["Email"].value;

    if (email == "") {
        alert("PLEASE ENTER YOUR EMAIL ADDRESS");
        return false;
    }
}