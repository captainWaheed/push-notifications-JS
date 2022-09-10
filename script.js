const button = document.querySelector("button");

button.addEventListener("click", () => {
  Notification.requestPermission().then((prem) => {
    if (prem === "granted") {
      const notification = new Notification("Example notification", {
        body: "This is description text",
        data: { hello: "world" },
        icon: "https://cdn-icons-png.flaticon.com/512/2058/2058148.png",
        tag: "Welcome message",
      });
      notification.addEventListener("error", (e) => {
        alert("error");
      });
    }
  });
});

let notification;
let interval;
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    setInterval(() => {
      notification = new Notification("Come back please", {
        body: `You have been gone for ${Math.round(
          (new Date() - leaveDate) / 1000
        )} seconds`,
        tag: "Come back",
      });
    }, 100);
  } else {
    if (interval) clearInterval(interval);
    if (notification) notification.close();
  }
});
