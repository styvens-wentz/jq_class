$('#remplir').click(function () {
    $('.all').addClass('plein')
});

$('#vider').click(function () {
    $('.all').removeClass('plein')
});

$('.rond').click(function () {
    $(this).toggleClass('plein')
});

$('.carre1').click(function () {
    $('#ligne1 *').toggleClass('plein');
    if ($('.carre1').hasClass('plein')) {
        $('#ligne1 .rond').addClass('plein')
    } else {
        $('#ligne1 .rond').removeClass('plein')
    }
});

$('.carre2').click(function () {
    $('#ligne2 *').toggleClass('plein');
    if ($('.carre2').hasClass('plein')) {
        $('#ligne2 .rond').addClass('plein')
    } else {
        $('#ligne2 .rond').removeClass('plein')
    }
});

$('.carre3').click(function () {
    $('#ligne4 *').toggleClass('plein');
    if ($('.carre3').hasClass('plein')) {
        $('#ligne4 .rond').addClass('plein')
    } else {
        $('#ligne4 .rond').removeClass('plein')
    }
});

$('.carre4').click(function () {
    $('#ligne5 *').toggleClass('plein');
    if ($('.carre4').hasClass('plein')) {
        $('#ligne5 .rond').addClass('plein')
    } else {
        $('#ligne5 .rond').removeClass('plein')
    }
});

$('.losange').click(function () {
    $('#ligne3 *, .rond1, .rond2, .rond3, .rond4').toggleClass('plein');
    if ($('.losange').hasClass('plein')) {
        $('#ligne3 .rond, .rond1, .rond2, .rond3, .rond4').addClass('plein')
    } else {
        $('#ligne3 .rond, .rond1, .rond2, .rond3, .rond4').removeClass('plein')
    }
});