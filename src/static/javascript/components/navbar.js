const navbar = Vue.createApp({ 
    template: 
    /* HTML */
    `
        <div class="nav-icons">
            <a :href="pages.Gallery" target="_self">
                <img :src="image.path" :alt="image.description">
            </a>
            <div class="menu-wrapper">
                <div class="menu-1"></div>
                <div class="menu-2"></div>
                <div class="menu-3"></div>
            </div>
        </div>
        <ul>
            <li v-for="(hrefLink, page, index) in pages" :key="page">
                <a :href="hrefLink" target="_self" class="nav-links"> 
                    {{ page }}
                </a>
            </li>
        </ul>
    `,
                                                // :class="{ active: isActive }" @click="activate"> // MPA state not preserved
    data: function() {

        const rootPath = window.location.hostname === "127.0.0.1" ? '': '/cnit132a';

        return {
            image: {
                path: 'src/favicon.ico',
                description: 'Hypertext link to gallery page.'
            },
            pages: {
                'Gallery': `${rootPath}/src/index.html`,
                'About': `${rootPath}/src/about.html`, 
                'Contact': `${rootPath}/src/contact.html`
            },
            // isActive: this.$isActive
        }
    }
    // methods: {
    //     activate(){
    //         this.$isActive = !this.$isActive;
    //         this.isActive = this.$isActive;
    //     }
    // }
})
// app.config.globalProperties.$myGlobalVariable = 'value';
// navbar.config.globalProperties.$isActive = false;

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