/* 
 * Layout stabilizer using a scrollbar wedge. 
 * accompanying file: scrollbar_wedge.css
 * Expected structure: body > (div.macro-container + div.gutter) 
 */

function hasVerticalScrollbar (element){
    /* Check if html is in overflow state.  */

    // "is content height > 100vh"
    const isOverflow = element.scrollHeight > element.clientHeight;
    return isOverflow
}


if(!hasVerticalScrollbar(document.documentElement)){
    /* insert scrollbar wedge if scrollbar not present.
     *  similar to scrollbar-gutter: stable.
    */
    document.querySelector('.gutter').classList.add('scrollbar-wedge')
}

window.addEventListener('resize', ()=>{
    if(!hasVerticalScrollbar(document.documentElement)){
        document.querySelector('.gutter').classList.add('scrollbar-wedge')
    }else{
        document.querySelector('.gutter').classList.remove('scrollbar-wedge')
    }
});

// different browsers seem to use different scrollbar width...
console.log(navigator.userAgent)