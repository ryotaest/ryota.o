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
