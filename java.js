const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userSubject = document.getElementById("userSubject");
const userMessage = document.getElementById("userMessage");


async function sendEmail() {

    if (userName.value == "" ) {
        alert("Plaese Enter Your Name");
    } else if(userEmail.value == "") {
        alert("Plaese Enter Your Email");
    } else if(userSubject.value == "") {
        alert("Plaese Enter Your Subject");
    } else if(userMessage.value == "") {
        alert("Plaese Enter Your Message");
    } else {
        const apiUrl = `https://tatbeqak.site/apps/tatbeqey/apps/projects/test_api/mail?mail=${userEmail.value}&message${userMessage.value}&name${userName.value}&subject=${userSubject.value}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        const status = data.status;  

        if (status == true) {
            alert(" Message Sent Successfully ");
            userEmail.value = "";
            userName.value = "";
            userSubject.value = "";
            userMessage.value = "";
        } else {
            alert(" Sent Message Failed");
        }

    }
    
}