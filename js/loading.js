(function ($) {

        document.querySelector(".loader").style.display = "block";
        document.querySelector(".mainPage").style.display = "none";

        var begin;

        if (!sessionStorage.alreadyClicked) {
            function loading() {
                begin = setTimeout(showPage, 3000);
            }
        } else {
            function loading() {
                begin = setTimeout(showPage, 3000);
            }
        }

        function showPage() {
            document.querySelector(".loader").style.display = "none";
            document.querySelector(".mainPage").style.display = "block";
        }

        loading()
})(jQuery);

sessionStorage.alreadyClicked = "true";