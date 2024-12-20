var massage = "Lorem ipsum dolor sit, amet consectetur adipisicing elit..";
var i = 0,loop;

function openChildFrame() {
  newWindow = window.open("childFrame.html", "_blank", "width=600,height=500");
  if (!newWindow) {
    alert("u close child frame");
    return;
  }
  newWindow.focus();
  console.log("Child window opened.");
  wrightMassage();
}
function wrightMassage() {
  loop= setInterval(func, 100);
}

var func = function () {
  if (i >= massage.length) {
    clearInterval(loop);
    newWindow.close();
  } else {
    newWindow.document.getElementById("demo").innerHTML += massage[i];
    i++;
  }
};
