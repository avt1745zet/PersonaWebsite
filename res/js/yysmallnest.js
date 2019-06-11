/*
 * Utility 
 */
$(document).ready(function () {
    /*
     * Scroll page.
     */
    $('a.js-scrollpage-trigger[href*="#"]:not([href="#"])').click(function (event) {
        event.preventDefault();

        $("#navbarCollapse").collapse('hide');

        var target = $(this.getAttribute('href'));

        var navbarHeight = $(".navbar a").height();

        $("html, body").stop();
        $("html, body").animate({ scrollTop: target.offset().top - navbarHeight }, 1000, "easeInOutExpo");
    });
    /*
     * Scroll spy.
     */
    $("body").scrollspy({ target: "#navbar", offset: 100 });
    /*
     * Auto hide navbarCollapse1 when click anywhere or scroll page.
     */
    $(document).click(function () {
        $("#navbarCollapse").collapse('hide');
    });

    $(window).scroll(function () {
        $("#navbarCollapse").collapse('hide');
    });
});
/*
 * Portfolio
 */
$(document).ready(function () {
    $(".workselector").mouseenter(function () {
        $(this).children("div").stop();
        var h = $(this).height();
        var h3h = $(this).find("h3").height();
        $(this).children("div").animate({ top: h / 2 - h3h * 0.75, bottom: h / 2 - h3h * 0.75, height: h3h * 1.5 }, 1000, "easeOutBack");
    });
    $(".workselector").mouseleave(function () {
        $(this).children("div").stop();
        $(this).children("div").animate({ top: "0", bottom: "0", height: "100%" }, 1000, "easeInBounce");
    });
});
/*
 * Ability
 */
$(document).ready(function () {
    /*
     * Save and clear all abilityBar value;
     */
    $(".ability-bar").each(function () {
        var target = $(this);
        var parantWidth = target.parent().css("width");
        var targetWidth = target.css("width");
        var targetWidthPercentageFloat = parseFloat(targetWidth) / parseFloat(parantWidth);
        var targetWidthPercentage = (targetWidthPercentageFloat * 100).toString().concat("%");
        target.data("target-percentage", targetWidthPercentage);
        target.css("transition", "none");
        target.css("width", 0);
    });

    activeAbilityBarIfInWindow();

    $(window).scroll(function () {
        activeAbilityBarIfInWindow();
    });

    function activeAbilityBarIfInWindow() {
        $(".ability-bar").each(function () {
            var target = this;
            if ($(target).hasClass("active") === false) {
                elementOffsetInWindow(target, 90, function () { activeAbilityBar(target); });
            }
        });
        function activeAbilityBar(target) {
            var targetPercentage = $(target).data("target-percentage");
            $(target).addClass("active");
            $(target).animate({ width: targetPercentage }, 750, "easeOutBack");
        }
    }
});

function elementOffsetInWindow(target, percentage = 10, callback) {
    var windowHeight = $(window).height();
    var windowCenterScrollTop = $(window).scrollTop() + windowHeight / 2;
    $(target).each(function () {
        var targetHeight = $(target).height();
        var targetCenter = $(target).offset().top + targetHeight / 2;
        var curPencentage = Math.abs(targetCenter - windowCenterScrollTop) / (windowHeight / 2) * 100;
        if (curPencentage < percentage) {
            callback();
        }
    });
}

