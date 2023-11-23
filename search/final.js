document.addEventListener("DOMContentLoaded", function () {

const section = document.querySelector("section"),
        overlay = document.querySelector(".overlay1"),
        showBtn = document.querySelector(".show-modal"),
        closeBtn = document.querySelector(".close-btn");
      showBtn.addEventListener("click", () => section.classList.add("active"));
      overlay.addEventListener("click", () =>
        section.classList.remove("active")
      );
      closeBtn.addEventListener("click", () =>
        section.classList.remove("active")
        );
      });