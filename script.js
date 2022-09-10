const button = document.querySelector("button");

button.addEventListener("click", () => {
  Notification.requestPermission().then((prem) => {
    alert(perm);
  });
});
