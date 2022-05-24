var adminemail="admin@gmail.com";
var adminpass="admin";
document.getElementById('login').addEventListener('submit',function(e)
{
e.preventDefault();
var inputemail=document.querySelector('#email').value;
var inputpsw =document.querySelector('#psw').value;
if ( inputemail === adminemail && inputpsw === adminpass )
{
location.assign('file:///C:/Users/EX/Desktop/tourisim/adminPage.html');
}
else
{
location.assign("file:///C:/Users/EX/Desktop/tourisim/home%20fatma.html");
}
});