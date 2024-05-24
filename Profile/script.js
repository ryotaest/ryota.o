document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const menuItems = document.querySelector(".menu-items");

  menuIcon.addEventListener("click", function () {
    menuItems.classList.toggle("active");
  });
});

function openGoogleForm() {
  document.getElementById("googleFormOverlay").style.display = "block";
}

function closeGoogleForm() {
  document.getElementById("googleFormOverlay").style.display = "none";
}

function toggleText() {
  const fullText = document.getElementById("intro-full");
  const button = document.getElementById("toggle-btn");

  if (fullText.style.display === "none") {
    fullText.style.display = "block";
    button.textContent = "Less";
  } else {
    fullText.style.display = "none";
    button.textContent = "More";
  }
}
function openPDF() {
  window.open("resume.pdf", "_blank");
}

function fadeAnime() {
  $(".fadeUpTrigger").each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("fadeUp");
    } else {
      $(this).removeClass("fadeUp");
    }
  });
}

$(window).scroll(function () {
  fadeAnime();
});
