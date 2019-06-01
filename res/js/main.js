$(document).ready(function () {
    /*
     * Auto hide navbarCollapse1 when click anywhere or scroll page.
     */
    $(document).click(function () {
        $("#navbarCollapse1").collapse('hide');
    });

    $(window).scroll(function () {
        $("#navbarCollapse1").collapse('hide');
    });
});



