$(document).ready(function () {
    /*
     * Active all abilityBar.
     */
    activeAllAbilityBar(300, 500);

    function activeAllAbilityBar(startTime, interval) {
        $(".ability-bar").each(function () {
            var target = $(this);
            var parantWidth = target.parent().css("width");
            var targetWidth = target.css("width");
            var targetWidthPercentageFloat = parseFloat(targetWidth) / parseFloat(parantWidth);
            var targetWidthPercentage = (targetWidthPercentageFloat * 100).toString().concat("%");
            target.css("transition", "none");
            target.css("width", 0);

            setTimeout(function () {
                activeAbilityBar(target, targetWidthPercentage);
            }, startTime);

            startTime += interval;
        });

        function activeAbilityBar(target, targetPercent) {
            target.animate({ width: targetPercent }, 750, "easeOutBack");
        }
    }
});