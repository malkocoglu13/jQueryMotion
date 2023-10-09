$(document).ready(function() {
    var clickCount1 = 0;
    var clickCount2 = 0;

    $("#myButton").on("click", function() {
        clickCount1++;

       
        $("h1").stop().slideUp().slideDown().animate({ opacity: 0.8 }, function() {
          
            if (clickCount1 === 2) {
                
                $("h1").css({
                    display: '',
                    opacity: ''
                });
                clickCount1 = 0; 
            }
        });
    });

    $("#myButton2").on("click", function() {
        clickCount2++;

        
        if (clickCount2 % 2 === 1) {
            $("h1").stop().animate({
                fontSize: "72px"
            });
        } else {
          
            $("h1").stop().animate({
                fontSize: "24px"
            });
            clickCount2 = 0;
        }
    });

    $("#myButton3").on("click", function() {
        
        $("h1").addClass("rotate");

       
        setTimeout(function() {
            $("h1").removeClass("rotate");
        }, 1000); 
    });

    $("#myButton4").on("click", function() {
        
        $(".color-change-container").addClass("color-change");

        
        setTimeout(function() {
            $(".color-change-container").removeClass("color-change");
        }, 4000); 
    });
});