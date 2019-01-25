var responsiveNav = document.getElementById('js-responsive-nav');
var responsiveNavBreakpoint = 720;

responsiveNav.addEventListener('click', function(){
    if(window.innerWidth < responsiveNavBreakpoint){
        responsiveNav.classList.toggle("responsive-nav--open");
    }
});