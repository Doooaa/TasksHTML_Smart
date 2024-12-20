

function name_genderToCoockie()
{
    var name=document.getElementById('username').value;
    var Gender = document.getElementById('f').checked 
    ? "female"
    : document.getElementById('m').checked 
        ? "male"
        : null;

//console.log(Gender); 
  
      setCookie("userName",name, 20/3/2025);

      setCookie("Gender",Gender, 20/3/2025);
}




allCookieList();
getCookie("userName");
hasCookie("username");
hasCookie("3mo-Esm3iel?");


var genderImg=document.getElementById("genderImg");

var gender=getCookie("Gender").trim();// '  Gender=null;'
gender=gender.split("=")[1].replace(';',"");
 console.log(gender);

if(gender=="female")
{
    genderImg.src="images/2.jpg";
}
else{
    genderImg.src="images/1.jpg";
}


var spanTimes=document.getElementById("spanTimes");
var spanName=document.getElementById("spanName");

spanName.innerText=getCookie("userName");
var t=0;
window.onload=function (){
    // times-=222; 
    t=getCookie("Times").trim().split("=")[1];
    t=parseInt(t)||0;
    t++;
    setCookie("Times",t,new Date(0));
    spanTimes.innerText="visited "+getCookie("Times");

}

