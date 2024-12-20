

function over() {
    timer=clearInterval(timer); 
}

var i=0,timer;
function leave() {
    timer= setInterval(function() {
        if (i > 0) {
            document.images[i - 1].src = "marbels/marble1.jpg"; // Reset the previous marble
        } else {
            document.images[5].src = "marbels/marble1.jpg"; // Reset the last image when i is 0
        }
         document.images[i].src="marbels/marble3.jpg";
       
        i=(i+1)%6;
     },2000);
}