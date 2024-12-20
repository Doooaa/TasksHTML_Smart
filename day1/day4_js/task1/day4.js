var queryString=location.search.substring(1).split('&');


    username=queryString[0].split('=')[1];
    email=queryString[1].split('=')[1];
    gender=queryString[2].split('=')[1];
    phone=queryString[3].split('=')[1];
    address=queryString[4].split('=')[1];

    document.getElementById("displayName").innerText = " welcome to "+username;
    document.getElementById("displayEmail").innerText =email;
    document.getElementById("displayGender").innerText =gender;
    document.getElementById("displayPhone").innerText =phone;
    document.getElementById("displayAddress").innerText =address;

    //  if(navigator.userAgentData.brands[0].brand === "Google Chrome")
    //  {
    //     document.getElementById("cromeRec").innerHTML = "<i class=\"fas fa-thumbs-up\"></i><p>We highly recommend updating your profile to enjoy a personalized experience.</p>";

    //     // document.getElementById("cromeRec").innerHTML ='<i class="fas fa-thumbs-up"></i><p>We highly recommend updating your profile to enjoy a personalized experience.</p>' 
    //  }

     if (navigator.userAgent.includes("Chrome") && !navigator.userAgent.includes("Edge")) {
       var rec= document.getElementById("cromeRec").innerHTML = "<i class=\"fas fa-thumbs-up\"></i><p>We highly recommend to use chrome browser to enjoy a personalized experience.</p>";
       rec.style.color="red"
    }
    


