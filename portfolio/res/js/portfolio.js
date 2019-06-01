$(document).ready(function () {
    $(".workselector").mouseenter(function () {
        $(this).children("div").stop();
        var h = $(this).height();
        var h2h = $(this).find("h2").height();
        $(this).children("div").animate({ top: h / 2 - h2h * 0.75, bottom: h / 2 - h2h * 0.75, height: h2h * 1.5 }, 1000, "easeOutBack");
    });
    $(".workselector").mouseleave(function () {
        $(this).children("div").stop();
        $(this).children("div").animate({ top: "0", bottom: "0", height: "100%" }, 1000, "easeInBounce");
    });
});