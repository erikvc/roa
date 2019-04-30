$( document ).ready(function() {       
    //FastClick
    $(function() {FastClick.attach(document.body);});
	
    //Preload Image
    $(function() {
        $(".preload-image").lazyload({
            threshold : 100,
            effect : "fadeIn",
            container: $("#page-content-scroll")
        });
    });
    
    //Sidebar Dimensions Go here 
    var sidebar_width = 270; 
    var sidebar_shadow_correction = 300; /*Add 30 Pixels to your sidebar width*/
    var sidebar_form_width = sidebar_width-40;  /*This calculates the form size automatically*/
    
    $('.submenu, .sidebar-left, .sidebar-right').css('width', sidebar_width);
    $('.sidebar-form').css('width', sidebar_form_width);
    
    $(".sidebar-left .submenu").css({
        "transform": "translateX("+sidebar_width*(-1)+"px)", 
        "-webkit-transform": "translateX("+sidebar_width*(-1)+"px)", 
        "-moz-transform": "translateX("+sidebar_width*(-1)+"px)", 
        "-o-transform": "translateX("+sidebar_width*(-1)+"px)", 
        "-ms-transform": "translateX("+sidebar_width*(-1)+"px)"
    });   
    $(".sidebar-left").css({
        "transform": "translateX("+sidebar_shadow_correction*(-1)+"px)", 
        "-webkit-transform": "translateX("+sidebar_shadow_correction*(-1)+"px)", 
        "-moz-transform": "translateX("+sidebar_shadow_correction*(-1)+"px)", 
        "-o-transform": "translateX("+sidebar_shadow_correction*(-1)+"px)", 
        "-ms-transform": "translateX("+sidebar_shadow_correction*(-1)+"px)"
    });     
    $(".sidebar-right .submenu").css({
        "transform": "translateX("+sidebar_width*(1)+"px)", 
        "-webkit-transform": "translateX("+sidebar_width*(1)+"px)", 
        "-moz-transform": "translateX("+sidebar_width*(1)+"px)", 
        "-o-transform": "translateX("+sidebar_width*(1)+"px)", 
        "-ms-transform": "translateX("+sidebar_width*(1)+"px)"
    });   
    $(".sidebar-right").css({
        "transform": "translateX("+sidebar_shadow_correction*(1)+"px)", 
        "-webkit-transform": "translateX("+sidebar_shadow_correction*(1)+"px)", 
        "-moz-transform": "translateX("+sidebar_shadow_correction*(1)+"px)", 
        "-o-transform": "translateX("+sidebar_shadow_correction*(1)+"px)", 
        "-ms-transform": "translateX("+sidebar_shadow_correction*(1)+"px)"
    });  
    $(".sidebar-right .submenu").css({
        "transform": "translateX("+sidebar_width*(1)+"px)", 
        "-webkit-transform": "translateX("+sidebar_width*(1)+"px)", 
        "-moz-transform": "translateX("+sidebar_width*(1)+"px)", 
        "-o-transform": "translateX("+sidebar_width*(1)+"px)", 
        "-ms-transform": "translateX("+sidebar_width*(1)+"px)"
    });

    //Sidebar Settings
    $('.open-left-sidebar').click(function(){
        $('.sidebar-left').addClass('active-sidebar-box'); 
        $('.sidebar-right').removeClass('active-sidebar-box'); 
        $('.sidebar-tap-close').addClass('active-tap-close');
        $('#page-content-scroll').addClass('stop-scroll');
        return false;
    });
    
    $('.open-search-bar, .close-search-bar').click(function(){
       $('.header-search').toggleClass('active-search'); 
    });    
    
    $('#page-content').click(function(){
       $('.header-search').removeClass('active-search'); 
    });
    
    $('.open-right-sidebar').click(function(){
        $('.sidebar-right').addClass('active-sidebar-box'); 
        $('.sidebar-left').removeClass('active-sidebar-box'); 
        $('.sidebar-tap-close').addClass('active-tap-close');
        $('#page-content-scroll').addClass('stop-scroll');
        return false;
    });
    $('.sidebar-tap-close, .close-sidebar').click(function(){
        $('.sidebar-left, .sidebar-right').removeClass('active-sidebar-box'); 
        $('.sidebar-tap-close').removeClass('active-tap-close'); 
        $('#page-content-scroll').removeClass('stop-scroll');
        return false;
    });
    
    //Open / Close Sidebar Submenu
    $('.open-submenu').click(function(){           
        $(this).parent().find('.submenu').toggleClass('active-submenu');
        //$('.open-submenu').removeClass('active-submenu-visit');
        //$(this).addClass('active-submenu-visit');
        $('.sidebar-scroll').addClass('stop-scroll');
        return false;
    });    
    $('.active-item').addClass('active-submenu-history');  
    $('.close-submenu').click(function(){   
        //$('.active-submenu').parent().find('.open-submenu').addClass('active-submenu-visit');
        $('.submenu').removeClass('active-submenu');
        $('.open-submenu').removeClass('active-item');
        $('.sidebar-scroll').removeClass('stop-scroll');
        return false;
    });     
    if($('.submenu').hasClass('active-submenu')){
        var counted_subs = $('.active-submenu').find('a').length;
        $('.active-submenu').addClass('active-submenu-' + counted_subs);
    };     
        
    //Detecting Mobiles//
    var isMobile = {
        Android: function() {return navigator.userAgent.match(/Android/i);},
        BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
        iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
        Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
        Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
        any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
    };
     
    if( !isMobile.any() ){
        $('#page-content-scroll').css('right', '0px');
    }
    if(isMobile.Android()) {
        $('#page-content-scroll, .sidebar-scroll').css('right', '0px');
    }
    if(isMobile.BlackBerry()) {
        $('#page-content-scroll, .sidebar-scroll').css('right', '0px');
    }   
    if(isMobile.iOS()) {
        $('#page-content-scroll, .sidebar-scroll').css('right', '0px');
    }
    if(isMobile.Windows()) {
        $('#page-content-scroll, .sidebar-scroll').css('right', '0px');
    }
    
    //Copyright Year 
    if ($("#copyright-year")[0]){
        document.getElementById('copyright-year').appendChild(document.createTextNode(new Date().getFullYear()))
    }    
    if ($("#copyright-year-2")[0]){
        document.getElementById('copyright-year-2').appendChild(document.createTextNode(new Date().getFullYear()))
    }
    
    //Status Bar
    var options = {
        bg: '#89bada',
        // leave target blank for global nanobar
        target: document.getElementById('myDivId'),
        // id for new nanobar
        id: 'mynano'
    };
    var nanobar = new Nanobar( options );
    nanobar.go( 30 ); // size bar 30%
    nanobar.go(100); // size bar 100%
        
});