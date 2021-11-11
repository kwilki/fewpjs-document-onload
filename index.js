document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    const paragraph = document.querySelector("#text");
    paragraph.innerHTML = "This is really cool!";
  });