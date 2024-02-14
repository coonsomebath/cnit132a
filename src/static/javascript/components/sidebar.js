window.addEventListener('load', ()=> {
    const hamburgerBtn = document.querySelector('.menu-wrapper');

    hamburgerBtn.onclick = function(e){
        const navbar = document.getElementById('navbar');
        let isExpanded = navbar.getAttribute('aria-expanded');

        isExpanded = isExpanded === 'true' ? 'false' : 'true';

        navbar.setAttribute('aria-expanded', isExpanded);



        (function setHamburgerOffset(element){
            /* piggy backing onclick to set variable */
            const hasWedge = document.querySelector('.scrollbar-wedge');
            if(hasWedge){

                navbar.style.setProperty('--wedge-padding', '2rem');
            }
        })(navbar)
    }
})


