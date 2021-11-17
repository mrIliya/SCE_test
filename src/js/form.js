const form = document.querySelector("#contact-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(form.action, {
    method: "POST",
    body: new FormData(document.getElementById("contact-form")),
  })
    .then((response) => response.json())
    .then(console.log("success"));
});


