window.addEventListener('load', ()=> {
    const hamburgerBtn = document.querySelector('.menu-wrapper');

    hamburgerBtn.onclick = function(e){
        const navbar = document.getElementById('navbar');
        let isExpanded = navbar.getAttribute('aria-expanded'); //==='true';
        // navbar.setAttribute('aria-expanded', !isExpanded);

        isExpanded = isExpanded === 'true' ? 'false' : 'true';
        navbar.setAttribute('aria-expanded', isExpanded);
    }
})


