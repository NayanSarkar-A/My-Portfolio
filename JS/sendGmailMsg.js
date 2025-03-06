const gmail=document.querySelector("#gmail");
function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "web.nayansarkar2005@gmail.com",
        Password : "30F7DC08CDDB33BFE9B9A39BF4EEA1652B3D",
        To : 'web.nayansarkar2005@gmail.com',
        From : gmail.value,
        Subject : "Welcome",
        Body : "my name is "
    }).then(
    alert("welcome")
    );
}

// function sendEmail(){
//     Email.send({
//         SecureToken : "df8e1620-e72c-4e3d-b40c-f2fad7c3732b",
//         To : 'pronayan2024@gmail.com',
//         From : "pronayan2024@gmail.com",
//         Subject : "This is the subject",
//         Body : "And this is the body"
//     }).then(
//     message => alert(message)
//     );
// }