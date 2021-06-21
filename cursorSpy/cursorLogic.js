jQuery(document).ready(function($) {
    var timer;
    function mouseStopped() {
        $(".perso").removeClass('moving');
        }
        $(document).mousemove(function(e) {
        $(".perso").addClass('moving');
        $(".perso").css({
            '--x': e.pageX,
            '--y': e.pageY
        });
        clearTimeout(timer);
        timer = setTimeout(mouseStopped, 3000);
        });
    });