import "./sass/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import "jquery/dist/jquery.min";
import "popper.js/dist/popper.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 700,
});
$(".navbar-toggler").click(function () {
  $(".navbar .navbar-nav").css("right", "0");
  $(".layer").css("display", "block");
  setTimeout(() => {
    $(".layer").css("opacity", "0.4");
  }, 100);

  $("html").css("overflowY", "hidden");
});

document.body.onclick = function (e) {
  if (e.target.classList.contains("layer")) {
    $(".navbar .navbar-nav").css("right", "-14rem");
    $(".layer").css("opacity", "0");
    setTimeout(() => {
      $(".layer").css("display", "none");
    }, 600);
    $("html").css("overflowY", "visible");
  }
};
