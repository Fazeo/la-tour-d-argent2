$(document).ready(function () {
    $('#burger').click(function () {
        this.classList.toggle('active');
        if (this.className == 'active') {
            $('body').css('overflow', 'hidden');
            $('#menu').css({
                height: '100vh',
                background: 'rgba(0, 0, 0, 0.5)',
                position: 'absolute',
                'z-index': '10'
            });
            $('img[src="/img/small-logo.svg"]').css({
                display: 'block'
            });
            $('#menu ul').css({
                display: 'block'
            });
        } else {
            $('body').css('overflow', 'visible');
            $('#menu').css({
                height: '0',
                background: 'transparent',
                position: 'static'
            });
            $('img[src="/img/small-logo.svg"]').css({
                display: 'none'
            });
            $('#menu ul').css({
                display: 'none'
            });
        }
    });
});
