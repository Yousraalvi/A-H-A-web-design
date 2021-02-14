$(function(){
	
	$('.pad').wrapInner('<div class="padder"></div>');

	$("[data-dummysubmit]").click(function(e){
        if(e != undefined){ e.preventDefault(); }
        if($(this).hasClass('btn--disabled')){ return false; }
        $($(this).attr('data-dummysubmit')).trigger('click');
    });
/* ***************************************************
// sitenav 
*************************************************** */
    
    var $sitenav = $('.sitenav--header');
    var $sitenavbody = $('.sitenav__bd', $sitenav);  
    var $sitenavtoggle = $('.sitenavtoggle, .sitenavoverlay');       
    
    sitenav__init();
    
    function sitenav__init(){
        $sitenavtoggle.click(function (e) {
	        e.preventDefault();
	        if ($sitenav.attr('data-status') != "open") {
	            // it's not open
	            $sitenav.height($sitenavbody.outerHeight(false)).attr('data-status', 'open');
				$('body').addClass('sitenavopen');
	        } else {
	            // it's open
	            $sitenav.height(0).attr('data-status', 'closed');
				$('body').removeClass('sitenavopen');
	        }
	    });
        
        $(window).resize(sitenav__resize);
    } // sitenav_init()
    
    function sitenav__resize() {
	    if ($sitenav.attr('data-status') == "open") {
	        $sitenav.height($sitenavbody.outerHeight(true)).attr('data-status', 'open');
	    }
	} // topnav__resize()
	
	


	
});