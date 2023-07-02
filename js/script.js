$(document).ready(function() {
  const $navUl = $("#nav-ul");
  const $navLinks = $(".nav-link");

  let currentPage = "home";
  let currentNavLink = $navUl.children().first().children()[0];

  $("#portfolio, #about, #contact").hide();

  $navLinks.click(function(e) {
    const targetPage = e.currentTarget.getAttribute("data-target");

    if (currentPage !== targetPage) {
      $(`#${currentPage}`).fadeOut(100, function() {
        $(`#${targetPage}`).fadeIn(500);
      });

      $(currentNavLink).removeClass("selected");
      $(this).addClass("selected");

      currentPage = targetPage;
      currentNavLink = this;
    }
  });
})();
