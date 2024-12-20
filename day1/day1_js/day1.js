
//task1
// var headingM=prompt("enter your heading");
// for(var i=0;i<6;i++){
//     document.write("<h"+(i+1)+">"+headingM+"</h"+(i+1)+">");
//    // document.write(`<h${i+1}>${headingM} <h${i+1}>\n`);
// }

//task2
// var sum=0 ,nozero=1;
// do{

//     var num=prompt("enter a number"); 
//     // console.log("Enter a number"+typeof num);
//     while(isNaN(num)){
//          num=prompt("plz enter a vaild number"); 
//     }
//     num=parseInt(num);
//     if(num==0) nozero=0;
//     {
//         sum+=num;
//     }

// }while(sum<=100&&nozero)

// console.log("the total sum of the entered "+sum);


//task3

// var n1=prompt("enter number 1");
// var n2=prompt("enter number 2");
// console.log("max of two numbers is",
//    (n1>n2) ?n1:n2 
// )


// function divisibltyByfrist(a,b,c){
//   if(a==0) console.log(a,"is zero");
//   else if(a%b==0&&a%c==0)
//         console.log(a,"is divisible by both",b,"and",c);
//   else if(a%c==0)
//     console.log(a,"is divisible by",c);
//   else if(a%b==0)
//     console.log(a,"is divisible by",b);
//   else console.log(a,"is not divisible by both");

// }

// do{
//     var a=prompt("enter number a");
// }
// while(isNaN(a));

// do{
//     var b=prompt("enter number b");
// }
// while(isNaN(b));

// do{
//     var c=prompt("enter number c");
// }
// while(isNaN(c));

// divisibltyByfrist(a,b,c);





// task4

// var n1=prompt("enter rang number 1");
// var n2=prompt("enter rang number 2");
// var sum=0;
// for(var i=n1;i<=n2;i++){

//   if(i%3==0) 
//   {
//     sum+=parseInt(i);
//     console.log("multipule by 3 =>"+i + " =>");
//   }
//   if(i%5==0) 
//   {
//     sum+=parseInt(i);
//     console.log("multipule by 5 =>"+i + " =>");
//   }
// }

// console.log("sum of multiples of 3 and 5 from "+n1+" to "+n2+" is : "+sum);




// task6

// var n=prompt("enter number of stars");

// for(var i=1;i<=n;i++){
//    for(var j=0;j<i;j++){
//      document.write("*");
//    }
//    document.write("<br>");
// }

var s=add(2,3);    
 function add( a ,b) {
  return a+b; 
 }


console.log(s);
