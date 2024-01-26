/*
Template Name: Siopp
Author: <a href="https://www.os-templates.com/">OS Templates</a>
Author URI: https://www.os-templates.com/
Copyright: OS-Templates.com
Licence: Free to use under our free template licence terms
Licence URI: https://www.os-templates.com/template-terms
File: Back to Top JS
*/

jQuery("#backtotop").click(function () {
    jQuery("body,html").animate({
        scrollTop: 0
    }, 600);
});
jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 150) {
        jQuery("#backtotop").addClass("visible");
    } else {
        jQuery("#backtotop").removeClass("visible");
    }
});


//program for onscroll navigation sticky

let addeventControl = window.addEventListener('scroll', () =>{
    let falseStatement = false;
    let parentEle = document.querySelector('.stickTop');
    if (window.scrollY >= 20) {
        parentEle.classList.add('stickBar');
        falseStatement = true;
    } else {
        parentEle.classList.remove('stickBar');
        falseStatement = false;
    }
})
addeventControl()



