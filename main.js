new TypeIt('.greeting', {
    speed: 125,
    lifeLike: true,
    cursorChar: '|',
    startDelay: 1000
})
    .type("hey! i'm <span class=\"name\">dan</span>.")
    .go();

$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {
                window.location.hash = hash;
            });
        }
    });
});
