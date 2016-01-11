var jisaControllers = angular.module('jisaControllers', []);

jisaControllers.controller('JisaHomeCtrl', ['$scope',
    function($scope) {
        homeInit();
    }
]);

function homeInit() {
	var logoOffset = $('.logo-area h1').offset().top;
	var aboutOffset = $('.about-text').offset().top;
	var eventsOffset = $('#events').offset().top;
	var whyOffset = $('#why').offset().top;

    var winX = $(window).width();
    var winY = $(window).height();

    var winYScreenPc = (winY * 0.5);

    console.log("logoOffset" + logoOffset);
    console.log("aboutOffSet" + aboutOffset);

    $('.mdl-layout-title').addClass(
        'text-initial'
    );
    $('.subtitle').addClass(
        'text-initial'
    );
    $('.mdl-navigation').addClass(
        'text-initial'
    );
    $('.about-text').addClass(
        'text-initial'
    );
    $('.why-text').addClass(
        'text-initial'
    );
    $('.events-text').addClass(
        'text-initial'
    );

    $('main').scroll(function() {
        var xVal = $('.mdl-layout__content').scrollTop();

        console.log("xVal" + xVal);

        /*LOGO*/
        if (xVal < logoOffset) {

            $('.mdl-layout-title').removeClass(
                'text-after'
            );
            $('.mdl-navigation').removeClass(
                'text-after'
            );
	    }
        if (xVal > logoOffset) {

            $('.mdl-layout-title').addClass(
                'text-after'
            );
            $('.mdl-navigation').addClass(
                'text-after'
            );
	    }
	    /*END OF LOGO*/

	    /*START OF ABOUT*/
	   
	    if (xVal < aboutOffset-(winYScreenPc)) {
	    	$('.subtitle').removeClass(
                'text-after'
            );
            $('.about-text').removeClass(
                'fade-in'
            );
	    }

        if (xVal > aboutOffset-(winYScreenPc)) {
        	$('.subtitle').addClass(
                'text-after'
            );
            $('.about-text').addClass(
                'fade-in'
            );
            changeSubtitle('About');
            console.log("passed aboutOffset");
	    }
	    
	    /*END OF ABOUT*/

	    /*START OF WHY*/
	    if (xVal < whyOffset-(winYScreenPc)) {
            $('.why-text').removeClass(
                'fade-in'
            );
	    }

        if (xVal > whyOffset-(winYScreenPc)) {
        	$('.subtitle').addClass(
                'text-after'
            );
            $('.why-text').addClass(
                'fade-in'
            );
            changeSubtitle('Why Us');
            console.log("passed aboutOffset");
	    }
	    /*END OF ABOUT*/

	    /*EVENTS*/
	    if (xVal < whyOffset-(winYScreenPc)) {
            $('.events-text').removeClass(
                'fade-in'
            );
	    }
        if (xVal > eventsOffset-(winYScreenPc)) {
        	$('.subtitle').addClass(
                'text-after'
            );
            $('.events-text').addClass(
                'fade-in'
            );
            changeSubtitle('Events');
	    }

	    $('.events-bg').css({
	    		"background-position" : + 3
	    	}
	    );
	    /*END OF EVENTS*/
    });
}

function changeSubtitle($title){
	$('.subtitle').text(
        $title
    );
}