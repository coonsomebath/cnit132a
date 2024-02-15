window.addEventListener('load', ()=> {
    const hamburgerBtn = document.querySelector('.menu-wrapper');

    hamburgerBtn.onclick = function(e){
        const navbar = document.getElementById('navbar');
        let isExpanded = navbar.getAttribute('aria-expanded'); //==='true';
        // navbar.setAttribute('aria-expanded', !isExpanded);

        isExpanded = isExpanded === 'true' ? 'false' : 'true';
        navbar.setAttribute('aria-expanded', isExpanded);
        // navbar.style.opacity = isExpanded==="true" ? 1 : 1;


        // (function setHamburgerOffset(element){
        //     /* piggy backing onclick to set variable */
        //     const html = document.documentElement;
        //     const isOverflow = html.scrollHeight > html.clientHeight;

        //     if(isOverflow){
        //         // has scrollbar
        //         console.log('has scrollbar');
        //         navbar.style.setProperty('--right-padding', '1rem');
        //     }
        //     else{
        //         // no scrollbar
        //         console.log('no scrollbar');
        //         navbar.style.setProperty('--right-padding', '2rem');
        //     }
        // })(navbar)

        // (function setHamburgerOffset(element){
        //     /* piggy backing onclick to set variable */
        //     const html = document.documentElement;
        //     const isOverflow = html.scrollHeight > html.clientHeight;
        //     // const hasWedge = document.querySelector('.scrollbar-wedge');

        //     if(hasWedge){
        //         // navbar.style.setProperty('--wedge-padding', '2rem');
        //         // no scrollbar
        //         console.log('no scrollbar');
        //         navbar.style.setProperty('--right-padding', '2rem');
        //     }
        //     else{
        //         // navbar.style.removeProperty('--wedge-padding');
        //         // has scrollbar
        //         console.log('has scrollbar');
        //         navbar.style.setProperty('--right-padding', '1rem');
        //     }
        // })(navbar)
    }
})


