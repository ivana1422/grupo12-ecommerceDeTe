$(document).ready(() => {
    $('#mainAbout').animate({
        'opacity': '1'
    }, 1000, function (){
        $('#bnC').animate({
            'opacity': '1'
        }, 1000)
    })

    // $('#conoc').hide();

    // $('#bnC').click(function(){
    //     if ($('#bnC').text() == 'Conocenos '){
    //         $('#conoc').show('slow')
    //         $('#bnC').text('Ocultar')
    //     }else if($('#bnC').text() == 'Ocultar'){
    //         $('#conoc').hide('slow')
    //         $('#bnC').text('Conocenos ')
    //     }
    // })

})

