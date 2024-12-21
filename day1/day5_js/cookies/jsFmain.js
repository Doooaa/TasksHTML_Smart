
function name_genderToCoockie()
{
    var name=document.getElementById('username').value;
    var color=document.getElementById('color').value;
    var Gender = document.getElementById('f').checked 
    ? "female"
    : document.getElementById('m').checked 
        ? "male"
        : null;

      setCookie("color",color, 20/3/2025); 
  
      setCookie("userName",name, 20/3/2025);

      setCookie("Gender",Gender, 20/3/2025);
}

//extra
var btn=document.getElementById("submitButton");
btn.addEventListener("click", function(){
    deleteCookie("userName");
    deleteCookie("Gender");
    deleteCookie("Times");
    name_genderToCoockie();

    location.assign("page2.html");

});


