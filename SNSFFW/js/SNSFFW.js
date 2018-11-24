/* 
 * SLIDE and SCROLL - FFW
 * https://www.slide-and-scroll.org/
 *
 * Copyright 2018 SLIDE and SCROLL by Daniel Friedrich
 * Released under the MIT license
 *
 * @author: Daniel Friedrich
 * Date: 01.08.2018
 */
$(document).ready(function () {

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



});
 
 
 