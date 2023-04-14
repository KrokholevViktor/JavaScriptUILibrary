import './lib/lib';

$('button').on('click', function() {
    $('div').eq(0).toggleClass('active');
});

$('div').hide()

// console.log($('.some').closest('.findme'));

$('button').click(function() {
    $('div').fadeIn(1800)
});