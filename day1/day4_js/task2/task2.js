
var i=1;
function next()
{  
    if(i<=5)
    {
        i++;
        document.getElementsByTagName('img')[0].src="SlideShow/"+i+".jpg";
    }           
}
function previous()
{
    if(i>1)
    {
        i--;
        document.getElementsByTagName('img')[0].src="SlideShow/"+i+".jpg";
    }            
}
var interval;
function showslid() {

    interval=  setInterval(loop, 1000); 
}

function loop() {
    if(i%7!=0)
    document.getElementsByTagName('img')[0].src = "SlideShow/" + (i % 7) + ".jpg";
    i++;
}

function stop(){
    clearInterval(interval);
}