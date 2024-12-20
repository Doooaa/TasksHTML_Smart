


// var x=document.getElementById("noContextMenu")[0];
// x.addEventListener("contextmenu", (e) => {
//     e.preventDefault();
//   });


var confirmed=0, btn=document.getElementById("submitButton");

btn.addEventListener("click",function(){

   confirmed= window.confirm("do you want to submit Now? (ok) for submit or cancel otherwise ")  ;
  if(confirmed)
  {
    alert("3aa submitted");
    var fm=document.getElementsByTagName("form")[0];
    fm.action="nextScreen.html";
  }
  else{
    alert("Form not submitted");
  }
})

var e=new Event("notResponse");
btn.addEventListener("notResponse",function(){
    alert("Form not submitted from custom event handler");
})

setTimeout(function(){
    var pass=document.getElementById("password");
    var name=document.getElementById("username");
    if(!pass.value&&!pass.value)
        btn.dispatchEvent(e);  
},3000);
