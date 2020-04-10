/*
SLIDE and SCROLL - FFW v1.2.2
https://snsffw.slideandscroll.com

Copyright 2018-2020 SLIDE and SCROLL by Daniel Friedrich
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
        $('body').css({"position": "sticky", "overflow": "hidden"});
        
        // ... take body width without scrollbar and calculate scrollbar width.
        var bodyWidthWithoutScrollbar = $('body').outerWidth();
        var bodyScrollbarWidth = bodyWidthWithoutScrollbar - bodyWidthWithScrollbar;
        
        // ... if scrollbar width is less than or equal "0", ...
        if (bodyScrollbarWidth <= 0) {
            // ... margin right has "0px", ...
            $('body').css("padding-right", "0");
        }
        else {
            // ... else margin right has scrollbar width.
            $('body').css("padding-right", bodyScrollbarWidth);
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
                "overflow": "",
                "position": "",
                "padding-right": ""
            });
            next();
        });     
    });
    
    /*
     *  Menus
     */
    
    // If browser windows is scrolling or resizing ...
    $(window).ready(function () {
        $(window).on('scroll resize', function () {
            // ... it changes dropdown position (horzontal menu) above or below button automatically.
            $('.SNSFFW-MenuHorizontal > .SNSFFW-MenuItem > .SNSFFW-MenuItemDropdown').css("top", function () {
                var SNSFFW_Menu_ButtonHeight = $(this).prev('button').outerHeight();
                var SNSFFW_Menu_DropdownHeight = $(this).outerHeight();
                var SNSFFW_Menu_Offset = $(this).prev('button').offset();
                var SNSFFW_Menu_SpaceAboveButton = SNSFFW_Menu_Offset.top - $(window).scrollTop();
                var SNSFFW_Menu_SpaceBelowButton = $(window).outerHeight() - SNSFFW_Menu_SpaceAboveButton - SNSFFW_Menu_ButtonHeight;
                
                if (SNSFFW_Menu_SpaceAboveButton < SNSFFW_Menu_DropdownHeight) {
                    return SNSFFW_Menu_ButtonHeight;
                }
                else if (SNSFFW_Menu_SpaceBelowButton < SNSFFW_Menu_DropdownHeight) {
                    return SNSFFW_Menu_DropdownHeight * (-1);
                }
                else {
                    return SNSFFW_Menu_ButtonHeight;
                }
            });

            // ... it changes dropdown position (vertical menu) above or below button automatically.
            $('.SNSFFW-MenuVertical > .SNSFFW-MenuItem > .SNSFFW-MenuItemDropdown').css("top", function () {
                var SNSFFW_Menu_ButtonHeight = $(this).prev('button').outerHeight();
                var SNSFFW_Menu_DropdownHeight = $(this).outerHeight() - SNSFFW_Menu_ButtonHeight;
                var SNSFFW_Menu_Offset = $(this).prev('button').offset();
                var SNSFFW_Menu_SpaceAboveButton = SNSFFW_Menu_Offset.top - $(window).scrollTop();
                var SNSFFW_Menu_SpaceBelowButton = $(window).outerHeight() - SNSFFW_Menu_SpaceAboveButton;

                if (SNSFFW_Menu_SpaceAboveButton < SNSFFW_Menu_DropdownHeight) {
                    return 0;
                }
                else if (SNSFFW_Menu_SpaceBelowButton < SNSFFW_Menu_DropdownHeight) {
                    return SNSFFW_Menu_DropdownHeight * (-1);
                }
                else {
                    return 0;
                }
            });
            
            // ... it changes dropdown position (vertical menu) left or right button automatically.
            $('.SNSFFW-MenuVertical > .SNSFFW-MenuItem > .SNSFFW-MenuItemDropdown').css("left", function () {
                var SNSFFW_Menu_ButtonWidth = $(this).prev('button').outerWidth();
                var SNSFFW_Menu_DropdownWidth = $(this).outerWidth();
                var SNSFFW_Menu_Offset = $(this).prev('button').offset();
                var SNSFFW_Menu_SpaceLeftButton = SNSFFW_Menu_Offset.left - $(window).scrollLeft();
                var SNSFFW_Menu_SpaceRightButton = $(window).outerWidth() - SNSFFW_Menu_SpaceLeftButton - SNSFFW_Menu_ButtonWidth;
                
                if (SNSFFW_Menu_SpaceLeftButton < SNSFFW_Menu_DropdownWidth) {
                    return SNSFFW_Menu_ButtonWidth;
                }
                else if (SNSFFW_Menu_SpaceRightButton < SNSFFW_Menu_DropdownWidth) {
                    return SNSFFW_Menu_DropdownWidth * (-1);
                }
                else {
                    return SNSFFW_Menu_ButtonWidth;
                }
            });
            
            // ... it changes dropdown position (horizontal menu) left or right button automatically.
            $('.SNSFFW-MenuHorizontal > .SNSFFW-MenuItem > .SNSFFW-MenuItemDropdown').css("left", function () {
                var SNSFFW_Menu_ButtonWidth = $(this).prev('button').outerWidth();
                var SNSFFW_Menu_DropdownWidth = $(this).outerWidth();
                var SNSFFW_Menu_Offset = $(this).prev('button').offset();
                var SNSFFW_Menu_SpaceLeftButton = SNSFFW_Menu_Offset.left - $(window).scrollLeft();
                var SNSFFW_Menu_SpaceRightButton = $(window).outerWidth() - SNSFFW_Menu_SpaceLeftButton;
                
                if (SNSFFW_Menu_SpaceLeftButton < SNSFFW_Menu_DropdownWidth) {
                    return 0;
                }
                else if (SNSFFW_Menu_SpaceRightButton < SNSFFW_Menu_DropdownWidth) {
                    return (SNSFFW_Menu_DropdownWidth - SNSFFW_Menu_ButtonWidth) * (-1);
                }
                else {
                    return 0;
                }
            });
        }).scroll().resize();
    });
    
    // If document is clicked ...
    $(document).click(function (event) {
        // ... and not any menu ...
        if (!$(event.target).closest('.SNSFFW-MenuItem > button').length) {
            // ... fade out (all) menus.
            $('.SNSFFW-MenuItemDropdown').fadeOut(250);
        }
    });

    // If menu button is clicked ...
    $('.SNSFFW-MenuItem > button').click(function () {
        // ... fade out (all) menus ...
        $(this).parents('body').find('.SNSFFW-MenuItemDropdown').not($(this).next('.SNSFFW-MenuItemDropdown')).fadeOut(250);
        // ... and fade in or out menu.
        $(this).next('.SNSFFW-MenuItemDropdown').fadeToggle(250);
    });

    /*
     *  Tabs
     */

    // If tab bar button clicked ...
    $('.SNSFFW-TabBar > button').click(function () {
        // ... and if number of tabs and tab items are equal ...
        if ($(this).parents('.SNSFFW-Tabs').find('.SNSFFW-TabBar > button').length === $(this).parents('.SNSFFW-Tabs').find('.SNSFFW-TabItem').length) {
            // ... removes emphasis from all tab button and add emphasis to clicked tab button ...
            $(this).siblings().removeClass('SNSFFW-TabButton--Active');
            $(this).addClass('SNSFFW-TabButton--Active');
            // ... disappears all tab items and appears the tab item belonging to the clicked tab button.
            $(this).parents('.SNSFFW-Tabs').find('.SNSFFW-TabItem').removeClass('SNSFFW-TabItem--Active');
            $(this).parents('.SNSFFW-Tabs').find('.SNSFFW-TabItem:eq(' + $(this).index() + ')').addClass('SNSFFW-TabItem--Active');
        }
    });
});