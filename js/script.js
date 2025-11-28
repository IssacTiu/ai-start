console.log("JavaScript is working!");

$(".title h1").on("click", changeTitle)
$(document).on("keydown", function (e) {
    if (e.key === '?') {
        changeTitle.call($(".title h1"));
    }
})

function changeTitle() {
    $(this).html("Abundant Memory, <em>Relational Intelligences</em>")
    $(".title").append("<p>October 17th, 2025 - January 23rd, 2026</p>")
    $(this).unbind("click")
}

$("#grid").on("click", function () {
    $(".tiles").removeClass("type")
    $(".tile-blank").hide()
    $(this).addClass("active")
    $("#abc").removeClass("active")
})

$("#abc").on("click", function () {
    $(".tiles").addClass("type")
    $(".tile-blank").show()
    $(this).addClass("active")
    $("#grid").removeClass("active")
})

var light = true;

$("#dark").on("click", function () {
    if (light) {
        $(":root").css("--bkg", "#dbdae2")
        $(":root").css("--fgr", "black")
        
    } else {
        $(":root").css("--bkg", "black")
        $(":root").css("--fgr", "#dbdae2")
    }
    light = !light
})

//$(".funding").append("<p>This exhibition draws upon research supported by the Government of Canada’s New Frontiers in Research Fund (NFRF) and the Social Sciences and Humanities Research Council, and the Canada Foundation for Innovation.</p>")

//$(".logos").html("<img src='assets/ulag_logo_black.webp' alt='ULethbridge Art Gallery Logo'>")

$("#logo").on("click", changeLogo)

function changeLogo() {
    $(this).attr("src", "assets/ulag_logo_black.webp").attr("alt", "ULethbridge Art Gallery Logo");
}
//////////////////////////////////////////////////

$(".funding").on("click", showFunders)

function showFunders() {
    $(this).append("<p>This exhibition draws upon research supported by the Government of Canada’s New Frontiers in Research Fund (NFRF) and the Social Sciences and Humanities Research Council, and the Canada Foundation for Innovation.</p>")
    $(this).unbind("click")
}

$(".tile").wrap("<div class='tile-wrapper'></div>")

$(".type .tile img").on("click", function() {
    $(this).parent().css("transform", "rotateY(180deg)")
})

$(".type .tile figcaption").on("click", function() {
    $(this).parent().css("transform", "rotateY(0deg)")
})