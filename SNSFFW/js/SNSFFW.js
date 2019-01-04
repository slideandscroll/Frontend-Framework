/*
SLIDE and SCROLL - FFW
https://www.slide-and-scroll.org/

Copyright 2018 SLIDE and SCROLL by Daniel Friedrich
Released under the MIT license

@author: Daniel Friedrich
Date: 01.08.2018
*/


/*
TABLE OF CONTENTS
    I.   Layout
    II.  Content
*/

$(document).ready(function () {

    /*
    _________________________________________________________________
      
    I. Layout
    _________________________________________________________________
    */



    /*
    _________________________________________________________________
      
    II. Content
    _________________________________________________________________
    */

    /*
    --------------------------------
        Elements
    --------------------------------
    */

    /*
     *  Media
     */

    // image format: landscape 16:9
    $(window).on('resize', function () {
        $('.SNSFFW-Image__Format--Landscape16to9').css("height", function () {
            return $(this).outerWidth() / 16 * 9;
        });
    }).resize();

    // image format: landscape 4:3
    $(window).on('resize', function () {
        $('.SNSFFW-Image__Format--Landscape4to3').css("height", function () {
            return $(this).outerWidth() / 4 * 3;
        });
    }).resize();

    // image format: portrait 16:9
    $(window).on('resize', function () {
        $('.SNSFFW-Image__Format--Portrait9to16').css("height", function () {
            return $(this).outerWidth() / 9 * 16;
        });
    }).resize();

    // image format: portrait 3:4
    $(window).on('resize', function () {
        $('.SNSFFW-Image__Format--Portrait3to4').css("height", function () {
            return $(this).outerWidth() / 3 * 4;
        });
    }).resize();

    // image format: square 1:1
    $(window).on('resize', function () {
        $('.SNSFFW-Image__Format--Square1to1').css("height", function () {
            return $(this).outerWidth();
        });
    }).resize();



    /*
    --------------------------------
        Components
    --------------------------------
    */

    /*
     *  Accordions
     */

    // Initializes the icon "up" when a bellows is shown.
    $('.SNSFFW-Accordion_BellowsShow').find('.SNSFFW-Accordion_BellowsHeader--Icon').addClass('SNSFFW-Accordion_BellowsHeader--IconUp');

    // If the bellows header is clicked, than ...
    $('.SNSFFW-Accordion_BellowsHeader').click(function () {
        // ... all bellows bodies disappear and all icons show "Down" (except this bellows), ...
        $(this).parent('.SNSFFW-Accordion_Bellows').siblings().find('.SNSFFW-Accordion_BellowsBody').slideUp(250);
        $(this).parent('.SNSFFW-Accordion_Bellows').siblings().find('.SNSFFW-Accordion_BellowsHeader--Icon').removeClass('SNSFFW-Accordion_BellowsHeader--IconUp');

        // ... bellows body toggles between appear and disappear and icon toggles between "Up" and "Down" (only this bellows).
        $(this).children('.SNSFFW-Accordion_BellowsHeader--Icon').toggleClass('SNSFFW-Accordion_BellowsHeader--IconUp');
        $(this).next('.SNSFFW-Accordion_BellowsBody').slideToggle(250);
    });

    /*
     *  Modals
     */

    // If modal button is clicked, than ...
    $('.SNSFFW-ModalButton').click(function () {

        // ... take body width with scrollbar.
        var bodyWidthWithScrollbar = $('body').outerWidth();

        // ... hide scrollbar.
        $('body').css("overflow", "hidden");
        
        // ... take body width without scrollbar and calculate scrollbar width.
        var bodyWidthWithoutScrollbar = $('body').outerWidth();
        var bodyScrollbarWidth = bodyWidthWithoutScrollbar - bodyWidthWithScrollbar;
        
        // ... if scrollbar width is less than or equal "0", ...
        if (bodyScrollbarWidth <= 0) {
            // ... margin right has "0px", ...
            $('body').css("margin-right", "0");
        }
        else {
            // ... else margin right has scrollbar width.
            $('body').css("margin-right", bodyScrollbarWidth);
        }
        
        // ... the modal (dialog) appears.
        $(this).next('.SNSFFW-ModalContainer').delay(250).fadeIn(250);
    });

    // If modal button "close" or "cancel" or modal background "black", "white" or "grey" is clicked, than ...
    $('.SNSFFW-ModalButton__Close, .SNSFFW-ModalButton__Cancel, .SNSFFW-ModalBackground__Black, .SNSFFW-ModalBackground__White, .SNSFFW-ModalBackground__Grey').click(function () {
        // ... the modal (dialog) disappears, ...
        $(this).parents('.SNSFFW-ModalContainer').fadeOut(250);

        // ... "body" is scrollable again.
        $('body').delay(250).queue(function (next) {
            $(this).css({
                "overflow": "inherit",
                "margin-right": "0"
            });
            next();
        });     
    });



});
 
 
 