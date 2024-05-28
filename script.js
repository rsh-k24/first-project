if (!("Notification" in window)) {
    console.log("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
        new Notification("hi")
        alert("done")
  } else if (Notification.permission !== 'denied') {
    // Otherwise, ask the user for permission
    Notification.requestPermission(function (permission) {
      if (permission === "granted") {
        new Notification("hi")
        alert("done")
      }
    });
  }
  
