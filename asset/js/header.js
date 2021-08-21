$(document).ready(function(){
    $(window).on('scroll load',function(){


        $('section[id]').each(function(){
    
            let height = $(this).height();
            let offset = $(this).offset().top -200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');
    
            if(top >= offset && top < offset + height){
                $('.header-navbar a').removeClass('active');
                $('.header-navbar').find(`[href="#${id}"]`).addClass('active');
            }
    
        });
    
    });
});