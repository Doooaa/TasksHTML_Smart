let win;
function openWin(){
    win=window.open("childFrame.html","_blank","width=300,height=300");
    win.focus();
}
let inter;
function move(){
    if (!win || win.closed) {
        alert(" Please open it first.");
        return;
    }
    win.focus();
    let x=0,y=0,dirY=1,dirX=1;
    inter=setInterval(() => {
        if (y >= 410 || y < 0) {
            // y=0
            dirY *= -1; 
        }
        
        if (x >= 410 || x < 0) {
            // x=0
            dirX *= -1; 
        }
        
        console.log(x,y);
        x+=30*dirX;
        y+=30*dirY;
        win.moveTo(x,y);
    }, 500);
}

function stop(){
    win.focus();
    if (!win || win.closed) {
        alert("Window is not open or has been closed. Please open it first.");
        return;
    }
    clearInterval(inter);
}