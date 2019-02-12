'use strict';

$(document).ready(function() {
    // hero blocks
    if($('section.o_hero-block'.length > 0 )){
        $('section.o_hero-block').each(function(){
            var $el = $(this);

            $el.slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1
            });
        });
    }
    
    //media block tabs
    $('body').on('click','nav.m_media-block-nav li', function(event){
        alert('wow');
        var $parent = $(this).parent('.o_media-block');
        var $el = $(this);
        var selection = $el.index();

        $parent.find('nav.m_media-block-nav li').removeClass('active');
        $parent.find('div.media').removeClass('active')

        $parent.find('nav.m_media-block-nav li:nth-child('+selection+')').addClass('active');
        $parent.find('div.media:nth-child('+selection+')').addClass('active');
    });
});
