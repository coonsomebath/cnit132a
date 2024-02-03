const navbar = Vue.createApp({ 
    template: 
    /* HTML */
    `
        <ul>
            <li v-for="(hrefLink, page, index) in pages" :key="page">
                <a :href="hrefLink" target="_self">
                    {{ page }}
                </a>
            </li>
        </ul>
    `,

    data: function() {

        const rootPath = window.location.hostname === "127.0.0.1" ? '': '/cnit132a';

        return {
            pages: {
                'Gallery': `${rootPath}/src/index.html`,
                'About': `${rootPath}/src/about.html`, 
                'Contact': `${rootPath}/src/contact.html`
            }

        }
    }
})
// app.config.globalProperties.$myGlobalVariable = 'value'


/* dynamic nav construction
(function injectNavigationList(targetID){
    const pages={
        'Foyer': 'index.html',
        'About': 'about.html', 
        'Contact': 'contact.html'
    };

    // const fragment = document.createDocumentFragment();
    const ul = document.createElement('ul');

    Object.keys(pages).forEach(page=>{
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.setAttribute('href', pages[page]);
        a.setAttribute('target', '_blank');
        // a.setAttribute('rel', 'noreferrer noopener nofollow');
        a.textContent = page;
        li.appendChild(a);
        ul.appendChild(li);
    });
    // fragment.appendChild(ul);
    // document.getElementById(targetID).appendChild(fragment);
    document.getElementById(targetID).appendChild(ul);
})//('navbar');
*/


navbar.mount('#navbar');