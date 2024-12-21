





allCookieList();
getCookie("userName");
hasCookie("username");
hasCookie("3mo-Esm3iel?");


var genderImg=document.getElementById("genderImg");
var spanTimes=document.getElementById("spanTimes");
var spanName=document.getElementById("spanName");


//color
var color=getCookie("color").trim();// '  color=blue;'
color=color.split("=")[1].replace(';',"");
 console.log(gender);
 spanTimes.style.color=color;
 spanName.style.color=color;
//gender


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


