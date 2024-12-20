let newWindow, scrollInterval;

function openChildFrame() {
  newWindow = window.open("childFrame.html", "_blank", "width=400,height=300");
  if (!newWindow) {
    alert("u close child frame");
    return;
  }
  newWindow.focus();
  console.log("Child window opened.");
  autoScroll();
}

function closeChildFrame() {
  if (newWindow) {
    newWindow.close();
    console.log("Child window closed.");
  } else {
    console.log("No child window to close.");
  }
}

function autoScroll() {
  if (newWindow) {
    scrollInterval = setInterval(() => {
      const scrollTop = newWindow.scrollY; //  current scroll p
      const scrollHeight = newWindow.document.documentElement.scrollHeight; //  total scrollable height
      const clientHeight = newWindow.document.documentElement.clientHeight; //  visible window height

      if (scrollTop + clientHeight >= scrollHeight) {
        console.log("Reached bottom of the child window.");
        clearInterval(scrollInterval); // Stop 
        closeChildFrame(); 
      } else {
        newWindow.scrollBy(0, 5); 
      }
    }, 200);
  } else {
    alert("Child window is not open!");
  }
}

function stopScrolling() {
  if (scrollInterval) 
    clearInterval(scrollInterval);
  
}
