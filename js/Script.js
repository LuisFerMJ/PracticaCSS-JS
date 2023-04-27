function Alternar(Seccion) {
    if (Seccion.style.display == "none") {
        Seccion.style.display = "";
    } else {
        Seccion.style.display = "none";
    }
}



function validateEmailAddress(email) {
    var re =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function validate() {
    $("#result").text("");
    var emailaddress = $("#email").val();
    if (validateEmailAddress(emailaddress)) {
        $("#result").text(emailaddress + " is valid :)");
        $("#result").css("color", "green");
    } else {
        $("#result").text(emailaddress + " is not correct, please retry:(");
        $("#result").css("color", "red");
    }
    return false;
}
$(document).ready(function () {
    $("#validate").bind("click", validate);
});