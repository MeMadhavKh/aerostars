let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 7000);
}
function textAnimation() {
    $('.ml16').each(function () {
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });

    anime.timeline({
        loop: true
    })
        .add({
            targets: '.ml16 .letter',
            translateY: [1000, 0],
            easing: "easeOutExpo",
            duration: 1400,
            delay: function (el, i) {
                return 30 * i;
            }
        }).add({
            targets: '.ml16',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 30000
        });
}
textAnimation();