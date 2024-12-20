
//  var clickedNum=0,count=0,last3Imag=[];
// function over(element,i) {
   

//     if(clickedNum<=2)
//     {
//         last3Imag.push({element,i});
//         clickedNum++;
//         count+=i; 
//         element.src = "memory Game/"+i+".gif";
//     }
//     else if(clickedNum==2 && count==7)
//     {
//         element.src = "memory Game/"+i+".gif";  
//         count=0,clickedNum=0; //set zero
      
//     }
//     else if(clickedNum==2&&count!=7) {
//           last3Imag[0].element.src =  "memory Game/moon.gif";
//           last3Imag[1].element.src =  "memory Game/moon.gif";
//           count=0; //set zero
//           last3Imag=[];
//     }
   
// }
// function mouseUp(element,i)
// {
//     element.src = "memory Game/moon.gif";
// }

var clickedNum = 0,
    count = 0,
    last2Images = [],
    success = 0; // Initialize success

function over(element, i) {
    if (clickedNum < 2) {
        last2Images.push({ element, i });
        clickedNum++;
        count += i;    //2+2==4
        element.src = "memory Game/" + i + ".gif"; 
    }

    if (clickedNum === 2) {
        if (count === i * 2) { 
            success++; 
            setTimeout(() => {
                alert("Matched!");
                resetState();
            }, 500);
        } else {
         
            setTimeout(() => {
                last2Images[0].element.src = "memory Game/moon.gif"; 
                last2Images[1].element.src = "memory Game/moon.gif"; 
                resetState();
            }, 1000);
        }
    }

    if (success === 3) { 
        alert("You are the winner now 🎈🎈🎈!");
    }
}



// ...... reset Function
function resetState() {
    count = 0; 
    clickedNum = 0; 
    last2Images = []; 
}
