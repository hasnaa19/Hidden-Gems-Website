

function validate()
{
var valid = true;
if(document.form.username.value==""){
alert("Name is empty");
document.form.username.focus();
valid=false; }

if(document.form.password.value==""){
alert("Password is empty");
document.form.password.focus();
valid=false; }

else if (document.form.password.value=="" && document.form.username.value==""){
alert("Password and username is empty");
document.form.password.focus();
valid=false; }
else{
if(document.form.username.value.indexOf("@")==-1||document.form.username.value.indexOf(".")==-1){
alert("Please Enter valid username, e.g:info@yahoo.com");
document.form.password.focus();
valid=false; }
}
return valid;
} 