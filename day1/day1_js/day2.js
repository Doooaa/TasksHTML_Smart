
//task 1  ✅✅🤞......................

//   var userString=prompt("please enter a string");
//   var char=prompt("please enter a character to counter its appearance");
//   var count=0 ,isSensitive;
//   isSensitive=confirm("u want it case sensitive ?");
//    console.log(isSensitive);
//   for(var i=0 ;i<userString.length;i++)
//   {
//     if(isSensitive&&userString[i]==char) count++; //a ==a only
//     else if( !isSensitive&& userString[i].toLocaleLowerCase()==char.toLocaleLowerCase()) count++;
//   }

//   alert("the character '"+char+"' appears "+count+" times in the string");



//task 2 ✅✅🤞...........................................


//   var userString=prompt("please enter a string");
//   var isSensitive ,palindrome=0;
//   isSensitive=confirm("u want it case sensitive ?");
//    console.log(isSensitive);
//   for(var i=0 ;i<userString.length;i++)
//   {
//      if(isSensitive)
//      {
//         if(userString[i]!=userString[(userString.length-1)-i])
//             {
//                 palindrome=0;
//                 break;
//             }
//      }
//      else{
//         if(userString[i].toLocaleLowerCase !=userString[(userString.length-1)-i].toLocaleLowerCase)
//             {
//                palindrome=0;
//                 break;
//             } 
//      }
//      palindrome=1;
//   }

//   (palindrome)?alert("palindrome"):alert("not palindrome");


//task 3 ✅✅🤞...........................................

// var userString=prompt("please enter a sentence to get long word in it");
// var maxlength=0,indexOfMaxword=0,findexOfMaxword,array=userString.split(" ");

// for(var i=0;i<array.length;i++){
//       if( maxlength<array[i].length)
//       {
//         maxlength=array[i].length;
//         indexOfMaxword=i;
//       }
// }
// console.log("max word length: " + array[indexOfMaxword]);



//task 4 ✅✅🤞...........................................

// var name = prompt("Please enter your name (characters only):");
// const ValidName = /^[a-zA-Z]+([-_\s]?[a-zA-Z]+)*$/.test(name);
// console.log(ValidName);
// if (!ValidName) alert("Invalid name");

// var phoneN = prompt("Please enter your phone number (11 digits, e.g., 01012345678):");
// const ValidPhone = /^(010|011|015|012)[0-9]{8}$/.test(phoneN);
// if (!ValidPhone) alert("Invalid phone number");

// var mobileN = prompt("Please enter your mobile number (8 digits only):");
// const validMobileN = /^\d{8}$/.test(mobileN);
// console.log(validMobileN);
// if (!validMobileN) alert("Invalid mobile number");

// var email = prompt("Please enter your email:");
// const ValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-z]{2,}$/.test(email);
// console.log(ValidEmail);
// if (!ValidEmail) alert("Invalid email");



//task 5 ✅✅🤞........................................

// var rad=prompt("enter radius");
// function areaCircle(r)
// {
//     return Math.PI*r*r;
// }

// console.log("The area of circle is: " + areaCircle(rad));



// do {
//     var n = prompt("Enter a number to calculate its square root:");
// } while (isNaN(n) || n <= 0);

// function squareRoot(num) {
//     return Math.sqrt(num);
// }

// console.log("The square root of " + n + " is: " + squareRoot(n));

// var angle = prompt("Enter an angle in degrees to calculate its cosine:");

// function angleCos(deg) {
//     var radians = (deg * Math.PI) / 180;
//     return Math.cos(radians);
// }

// console.log("The cosine of " + angle + "° is: " + angleCos(angle));


// task 6 ✅�����.................................

/*
var a=[],x,n=prompt("enter size of array");
for(var i=0; i<n; i++)
{  
    do{   
    a[i]=prompt("enter "+i+" element");
    }while(isNaN(a[i]))
}

BubbleSortAcs(a);
console.log("order array ascending:=> "+a);

BubbleSortDesc(a);
console.log("order array desceding:=> "+a);
function BubbleSortAcs(array)
{
    var l=array.length ,swap=false;
    for(var i=0;i<l;i++)
    {
        
        for (var j=0;j<(l-i-1);j++)
        {
            if(array[j]>array[j+1])
            {
                swap=true;
                var temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
            }
        }
        if(!swap) break;
    }
}

function BubbleSortDesc(array)
{
    var swap=0,l=array.length;
    for(var i=0;i<l;i++)
    {
        for (var j=0;j<(l-i-1);j++)
        {
            if(array[j]<array[j+1])
            {  
                swap=true;
                var temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
            }
        }
        if(!swap) break;
    }
}
*/
