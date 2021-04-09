function defer(method)
{
    if (window.jQuery) {
        method();
    } else {
        setTimeout(function () { defer(method) }, 50);
    }
}

defer(function ()
{
    $(window).ready(function ()
    {
        $("body").removeClass("preload");
        openNav();
        console.log("Page loaded;");

        setTimeout(function () { closeNav() }, 5 * 1000);
    });
});

function openNav() {
    $("#myNav").show();
    $("#myNav").css("width", "100%");
  }

  function closeNav() {
    $("#myNav").css("width","0%");
    $("#myNav").hide();
  }