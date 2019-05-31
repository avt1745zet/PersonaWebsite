$(document).ready(function () {
    $(".workselector").mouseenter(function () {
        $(this).children("div").stop();
        var h = $(this).children("div").height();
        var h2h = $(this).find("h2").height();
        $(this).children("div").animate({ top: h / 2 - h2h / 2, bottom: h / 2 - h2h / 2, height: h2h }, "slow");
    });
    $(".workselector").mouseleave(function () {
        $(this).children("div").stop();
        $(this).children("div").animate({ top: "0", bottom: "0", height: "100%" }, "fast");
    });
});