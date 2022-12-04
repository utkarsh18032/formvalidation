function clearErrors(){
    errors=document.getElementsByClassName('formerror');
    for(let item of errors){
        item.innerHTML="";
    }
}

function seterror(id, error){ 

    //set error insides tag of id
   element=document.getElementById(id);
   element.getElementsByClassName('formerror')[0].innerHTML=error;

}

function validateForm(){
    var returnval=true;
    clearErrors();
// perform validation and if validation fails , set the value of returnval to false
var name=document.forms['myform']["fname"].value;
if(name.length<5){
    seterror('name',"**length of name is too short")
    returnval=false;
}
/*if(name.length==0){
    seterror('name',"**name of length cannot be zero")
    returnval=false; instead of this condition we can place required="true" in html tag
}*/

var email=document.forms['myform']["femail"].value;
if(email.length>25){
    seterror('email',"**email length is too long")
    returnval=false;
}

var phone=document.forms['myform']["fphone"].value;
if(phone.length!=10){
    seterror('phone',"**mobile no. should be 10 digits only")
    returnval=false;
}

var password=document.forms['myform']["fpass"].value;
if(password.length< 5){
    seterror('pass',"**password should be atleast 6 character long")
    returnval=false;
}

var cpassword=document.forms['myform']["fcpass"].value;
if(cpassword!=password){
    seterror('cpass',"**password should be same as above password")
    returnval=false;
}


return returnval;
}