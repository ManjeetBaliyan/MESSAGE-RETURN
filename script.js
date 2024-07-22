(function () {
  const form = document.querySelector("#Message-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // For print the default value.

    const message = document.querySelector("#Message");
    const error = document.querySelector(".error");
    const replyContent = document.querySelector(".reply");

    if (message.value === "") {
      error.classList.add("show");
      setTimeout(function () {
        error.classList.remove("show");
      }, 4000);
    } else {
      replyContent.textContent = message.value;
      message.value = "";
    }
  });
})();
