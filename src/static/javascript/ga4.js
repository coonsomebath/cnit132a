const funnelSourceElement = document.getElementById('funnel-source');
funnelSourceElement.onchange = function(e) {
    const source = {
        lovesData: "https://www.youtube.com/embed/xLxOLg5e7bA?si=zKRaTtOEZ0kDovzZ",
        analyticsMania: "https://www.youtube.com/embed/c_AhsKuNrWk?si=AHRC634NbzFwwqTg"
    }
    document.getElementById('funnel-iframe').setAttribute('src', source[e.target.value])
}