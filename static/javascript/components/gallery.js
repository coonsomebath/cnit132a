const gallery = Vue.createApp({
    template: `
        <h1>CNIT 132A Portfolio</h1>
        <div v-if="!Object.keys(items).length">Loading...</div>
        <article v-for="(data, titleKey, index) in items" :class="'portfolio-item-' + index" :key="titleKey">
            <div :class="'description-container-' + index">
                <h2>
                    <a href="#" target="_self">
                        {{ data.title }}
                    </a>
                </h2>
                <hr>
                <p>{{ data.description }}</p>
            </div>
            <div class="image-container">
                <a href="#" target="_self">
                    <img :src="data.imagePath" :alt="data.imageDesc" width="200" height="200">
                </a>
            </div>
        </article>
    `,

    data(){
        return {
            items: {}
            }
    }, 

    async beforeMount() {
        try{

            const resp = await fetch('/static/data/gallery.json');
            if(!resp.ok){
                throw new Error('Failed to fetch json data.');
            }
            this.items = await resp.json();
        }catch(error){
            console.error("Fetching gallery.json failed:", error)
        }
    }
    
})

gallery.mount('#gallery')