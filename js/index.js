function getFormData() {
    const emailAddress = document.getElementById("emailAddress").value;

    if (emailAddress.startsWith("admin")) {
        alert("This is an admin")
    }
}