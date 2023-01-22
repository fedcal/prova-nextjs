$(document).ready(function(){
    $('.filterItem').click(function(){
        const value= $(this).attr('data-filter');
        if(value == '1000'){
            $('.postBox').show('1000');
        }
        else{
            $('.postBox').not('.'+value).hide('1000');
            $('.postBox').filter('.'+value).show('1000');
        }
    });
    $('.filterItem').click(function(){
        $(this).addClass("activeFilter").siblings().removeClass('activeFilter');
    })
});
