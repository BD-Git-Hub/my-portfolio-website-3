/*jslint browser: true*/
/*global $, jQuery, alert*/


//-------------------------------------HIDDEN ELEMENTS---------//
$(document).ready(function () {

    $(function () {
        $('body').hide();
        $('body').fadeIn(1000);
        $('#navbar').hide();
        $('#navbar').fadeIn(1000);
        $('.btn').hide();
        $('.btn').delay(1000).slideUp(1000).fadeIn(2000);
        $('#dropdown').hide();
    });
    //-----------------------NAV------------------------//
    //-----------------------STICKY NAV BAR SECTION------------------------//
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('nav').removeClass("relativenavbar");
            $('nav').addClass("stickynavbar");

        } else {
            $('nav').removeClass("stickynavbar");
            $('nav').addClass("relativenavbar");
        }
    });



    //-------------------------NAV BUTTONS GOES TO THEIR SECTIONS------------------------//
    $('#biobtn').click(function () {
        $('html, body').animate({
            scrollTop: 850
        }, 600);
        return false;
    });

    $('#skillsbtn').click(function () {
        $('html, body').animate({
            scrollTop: 1560
        }, 600);
        return false;
    });

    $('#contactbtn').click(function () {
        $('html, body').animate({
            scrollTop: 4500
        }, 1800);
        return false;
    });

    $('#contactbtn').click(function () {
        $('#dropdown').toggle(1000);
    });
    //--------------------------NAV BUTTON GLOWS ON PAGE AREAS--------------//

    //----------------------------INTRO SECTION---------------------------------//


    //----------------------------INTRO BOBBING ARROW---------------------------------//
    $('#arrowdownbtn').click(function () {
        $('#arrowdownbtn').fadeOut("slow", 0, function () {

        });
        $('html, body').animate({
            scrollTop: 850
        }, 1500);
        return false;
    });
    //-------------------SKILLS SECTION----------------------//
    //-------------------SKILL SECTION SHOW ALL BUTTON---------//
    $('#showallbtn').click(function () {
        $(".html5").animate({
            width: '80%',
        }, 800);
        $(".css3").animate({
            width: '75%'
        }, 800);
        $(".ps").animate({
            width: '70%'
        }, 800);
        $(".js").animate({
            width: '60%'
        }, 800);
        $(".jquery").animate({
            width: '65%'
        }, 800);
        $(".pro").animate({
            width: '85%'
        }, 800);
        $(".maya").animate({
            width: '80%'
        }, 800);
        $(".zbrush").animate({
            width: '80%'
        }, 800);
        $(".ae").animate({
            width: '75%'
        }, 800);
        $(".sp").animate({
            width: '70%'
        }, 800);
        $(".unity").animate({
            width: '60%'
        }, 800);

    });
    //-------------------PARALLAX BACKGROUND-----------------//
    $(window).mousemove(function (e) {
        var change;
        var xpos = e.clientX;
        var ypos = e.clientY;
        var left = change * 20;
        var xpos = xpos * 2;
        ypos = ypos * 2;

        $('#pier').css('top', ((0 + (ypos / 0)) + "px"));
        $('#pier').css('right', ((0 + (xpos / 800)) + "px"));

        $('#smallbirds').css('top', ((0 + (ypos / 60)) + "px"));
        $('#smallbirds').css('right', ((0 + (xpos / 60)) + "px"));

        $('#mediumbirds').css('top', ((0 + (ypos / 55)) + "px"));
        $('#mediumbirds').css('right', ((0 + (xpos / 70)) + "px"));

        $('#bigbirds').css('top', ((0 + (ypos / 70)) + "px"));
        $('#bigbirds').css('right', ((0 + (xpos / 55)) + "px"));

        $('#darkerorange').css('top', ((0 + (ypos / 100)) + "px"));
        $('#darkerorange').css('right', ((0 + (xpos / 000)) + "px"));

        $('#orangesands').css('top', ((0 + (ypos / 200)) + "px"));
        $('#orangesands').css('right', ((0 + (xpos / 000)) + "px"));

        $('#piergrinds').css('top', ((0 + (ypos / 600)) + "px"));
        $('#piergrinds').css('right', ((0 + (xpos / 500)) + "px"));

        $('#people').css('top', ((0 + (ypos / 300)) + "px"));
        $('#people').css('right', ((0 + (xpos / 400)) + "px"));

        $('#blueocean').css('top', ((0 + (ypos / 00)) + "px"));
        $('#blueocean').css('right', ((0 + (xpos / 00)) + "px"));

        $('#purplebackgroundcloud').css('top', ((0 + (ypos / 400)) + "px"));
        $('#purplebackgroundcloud').css('right', ((0 + (xpos / 700)) + "px"));

        $('#pinkbackgroundcloud').css('top', ((8 + (ypos / 300)) + "px"));
        $('#pinkbackgroundcloud').css('right', ((0 + (xpos / 400)) + "px"));

        $('#biggermoon').css('top', ((0 + (ypos / 400)) + "px"));
        $('#biggermoon').css('right', ((0 + (xpos / 700)) + "px"));

        $('#smallmoon').css('top', ((0 + (ypos / 300)) + "px"));
        $('#smallmoon').css('right', ((0 + (xpos / 700)) + "px"));

        $('#lightbluesky').css('top', ((0 + (ypos / 200)) + "px"));
        $('#lightbluesky').css('right', ((0 + (xpos / 600)) + "px"));
    });

    //SCROLLING PARALLAX BACKGROUND----------------------------------------------//
    //start of with ataching scrolling to windows dom

    //when scroll goes down move certain things down at certain speeds
    //if it goes up then move stuff accordingly. 

    //SCROLL MAGIC CODE--------------------------------------------------------//



    //----------------------------SOCIAL SECTION---------------------------------//
    var contactEmail = document.getElementById("contactemail")
    var contactFacebook = document.getElementById("contactfacebook")
    var contactSoundcloud = document.getElementById("contactsoundcloud")
    var contactLinkedIn = document.getElementById("contactlinkedin")

    contactEmail.addEventListener("mouseover", contactEmailComment);
    contactFacebook.addEventListener("mouseover", contactFacebookComment);
    contactSoundcloud.addEventListener("mouseover", contactSoundcloudComment);
    contactLinkedIn.addEventListener("mouseover", contactLinkedInComment);

    function contactEmailComment() {
        document.getElementById("jsComment").innerHTML = "wanna email me? feel free"
    }

    function contactFacebookComment() {
        document.getElementById("jsComment").innerHTML = "wanna add me on facebook? sure thing :)"
    }

    function contactSoundcloudComment() {
        document.getElementById("jsComment").innerHTML = "wanna hear what i listen to? sounds good"
    }

    function contactLinkedInComment() {
        document.getElementById("jsComment").innerHTML = "wanna get professional? Okay."
    }
    //---------------------------FADE INS----------------//
    $('#bioDiv p, #bioimgDiv img, #skillstitle, #showallbtn, #skillsets1, #skillsets2, #skillsets3, #contactcontentDiv, #socialDiv').fadeTo(0, 0, function () {});
    $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
            $('#bioDiv p').fadeTo(500, 1, function () {});
        }

        if ($(this).scrollTop() > 500) {
            $('#bioimgDiv img').fadeTo(500, 1, function () {});
        }
        if ($(this).scrollTop() > 750) {
            $('#skillstitle, #showallbtn').fadeTo(500, 1, function () {});

        }
        if ($(this).scrollTop() > 990) {
            $('#skillsets1, #skillsets2, #skillsets3').fadeTo(500, 1, function () {});
        }

        if ($(this).scrollTop() > 1800) {
            $('#contactcontentDiv').fadeTo(500, 1, function () {});
        }

        if ($(this).scrollTop() > 2210) {
            $('#socialDiv').fadeTo(500, 1, function () {});
        }

    });
});
