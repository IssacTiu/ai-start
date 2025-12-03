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
    $(".tiles").removeClass("slider")
    $(".tile-blank").hide()
    $(".button").removeClass("active")
    $(this).addClass("active")
})

$("#abc").on("click", function () {
    $(".tiles").addClass("type")
    $(".tiles").removeClass("slider")
    $(".tile-blank").show()
    $(".button").removeClass("active")
    $(this).addClass("active")
})

$("#slider").on("click", function(){
    $(".tiles").addClass("slider")
    $(".tiles").removeClass("type")
    $(".button").removeClass("active")
    $(this).addClass("active")

    $(slides[slideCounter]).css("left", "0");
})

$("#next").on("click", function(){
    $(slides[slideCounter]).css("left", "-100%");
    slideCounter++;
    if (slideCounter >= slides.length) {
        slideCounter = 0;
    }
    $(slides[slideCounter]).css("left", "0");
})

$("#prev").on("click", function(){
    $(slides[slideCounter]).css("left", "100%");
    slideCounter--;
    if (slideCounter < 0) {
        slideCounter = slides.length - 1;
    }
    $(slides[slideCounter]).css("left", "0");
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

var logos = [["assets/abint-logo.svg", "Abundant Intelligence"], ["assets/ulag_logo_black.webp", "Ulethbridge Art Gallery"], ["assets/NFRF.png", "New Frontiers"], ["assets/UofL.svg", "University of Lethbridge"]];
var currentLogo = 0;

function changeLogo() {
    /*currentLogo++;
    if (currentLogo > logos.length - 1) {
        currentLogo = 0;
    }*/
    var oldRand = currentLogo;
    currentLogo = Math.floor(Math.random() * logos.length);
    while (oldRand === currentLogo) {
        currentLogo = Math.floor(Math.random() * logos.length);
    }
    console.log(currentLogo);

    $(this).attr("src", logos[currentLogo][0]).attr("alt", logos[currentLogo][1]);
}
//////////////////////////////////////////////////

$(".funding").on("click", showFunders)

function showFunders() {
    $(this).append("<p>This exhibition draws upon research supported by the Government of Canada’s New Frontiers in Research Fund (NFRF) and the Social Sciences and Humanities Research Council, and the Canada Foundation for Innovation.</p>")
    $(this).unbind("click")
}

$(".tile").wrap("<div class='tile-wrapper'></div>")

var slides = [];
var slideCounter = 0;
$(".tile-wrapper").each(function(){
    slides.push($(this))
})


$(".type .tile img").on("click", function() {
    $(this).parent().css("transform", "rotateY(180deg)")
})

$(".type .tile figcaption").on("click", function() {
    $(this).parent().css("transform", "rotateY(0deg)")
})