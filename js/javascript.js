document.getElementById("arrows").addEventListener("click", myFunction);

function myFunction() {

    document.getElementById("prikaz").scrollIntoView({ behavior: 'smooth' });
}

$(document).ready(function () {
    $(window).on("scroll", function () {
        var wn = $(window).scrollTop();
        if (wn > 300) {
            $(".navbar").css("background", "#01334eef");
        } else {
            $(".navbar").css("background", "#06a8ff44");


        }
    });
});

function refreshPage() {
    window.location.reload();
}