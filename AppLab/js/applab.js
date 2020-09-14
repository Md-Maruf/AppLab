$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});




function check()
{
    var checkbox = document.getElementById("checkbox");
    var text1 = document.getElementsByClassName("text1");
    var text2 = document.getElementsByClassName("text2");
    for (var i = 0; i < text1.length; i++)
    {
        if (checkbox.checked == true)
        {
            text1[i].style.display = "block";
            text2[i].style.display = "none";
        }
        else if (checkbox.checked == false)
        {
            text1[i].style.display = "none";
            text2[i].style.display = "block";
        }
    }

}   
check(); 

// FAQ==========
$(document).ready(function(){
        // Add minus icon for collapse element which is open by default
        $(".collapse.show").each(function(){
            $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
        });
        
        // Toggle plus minus icon on show hide of collapse element
        $(".collapse").on('show.bs.collapse', function(){
            $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
        }).on('hide.bs.collapse', function(){
            $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
        });

// Go top 


$("#top-arrow").click(function(){
    $("html, body").animate({
        scrollTop:0
    },2000)
});

$("#top-arrow").hide();

$(window).scroll(function(){
    var ourWindow = $(this).scrollTop();
    if(ourWindow < 300){
        $('#top-arrow').fadeOut();
    }else{
       $('#top-arrow').fadeIn(); 
    }

// Menu fixed
if(ourWindow>100){
    $('body').addClass('fixed')
}else{
    $('body').removeClass('fixed')
}

});

$('navbar-nav li').click(function(){
    $(this).addClass('active').siblings()
})

$(document).ready(function () {
    $('.nav li a').click(function(e) {

        $('.nav li').removeClass('active');

        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
        //e.preventDefault();
    });
});


$('navbar-nav a[href^="#"]').click(function(e){
    e.preventDefault();

    var target = this.hash;
    $('html, body').animate({
        scrolltop: $(target).offset().top
    },500)
})


});







