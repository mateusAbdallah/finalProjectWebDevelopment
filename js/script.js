function processData(form){
    var fullName = form.elements["fullName"].value;
    var email = form.elements["email"].value;
    var phoneNumber = form.elements["phoneNumber"].value;
    var radio = form.elements["schedule"];
    var schedule;

    for(let i = 0; i < radio.length; i++){
        if(radio[i].checked){
            schedule = radio[i].value;
            break;
        }
    }

    let target = document.getElementById("output");

    let text =  "Hi " + fullName + "\n" + " We sent a message to your email " + email + " and in your phone " + phoneNumber + "\n" + " To confirm your appointment on " + schedule;

    target.innerText = text;
    
}