const funnelSourceElement = document.getElementById('funnel-source');
funnelSourceElement.onchange = function(e) {
    const source = {
        lovesData: "https://www.youtube.com/embed/xLxOLg5e7bA?si=zKRaTtOEZ0kDovzZ",
        analyticsMania: "https://www.youtube.com/embed/c_AhsKuNrWk?si=AHRC634NbzFwwqTg"
    }
    document.getElementById('funnel-iframe').setAttribute('src', source[e.target.value])
}

/* Attempt to decrease load time; lack of autoplay makes for poor UX.
const thumbnailImg = document.getElementById('ga4-thumbnail');
thumbnailImg.onclick = function(e){
    const iframeGA4IntroElem = document.createElement('iframe');
    iframeGA4IntroElem.title = "Introduction to Google Analytics 4";
    iframeGA4IntroElem.width = "560";
    iframeGA4IntroElem.height = "315";
    iframeGA4IntroElem.src = "https://www.youtube.com/embed/u_ECkoHVlZ8?si=cdLxYuBk6bsgCI6q";
    iframeGA4IntroElem.frameborder = "0";
    // iframeGA4IntroElem.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframeGA4IntroElem.allowfullscreen = true;

    e.target.replaceWith(iframeGA4IntroElem);
}
*/