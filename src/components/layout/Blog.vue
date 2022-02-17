<template>
    <div>
        <div
         style="width: 15rem;"
         class="cards"
         >
         <b-card-header>
             <b-card-title>
             {{capitalizeFirstLetter(blog)}}
             </b-card-title>
         </b-card-header>
         <b-card-text>
         {{blog.body + '...'}} 
         </b-card-text>
         <router-link :to="{name: buttonRoute, params: { id: blog.id} }" variant="primary">{{buttonText}} <b-icon-arrow-right /></router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Blog',
        props: {
            blog: Object,
            buttonText: String,
            buttonRoute: String
        },

        methods:{
            capitalizeFirstLetter(word) {
                return word.title.charAt(0).toUpperCase() + word.title.slice(1);
            }
        }
    }
</script>

<style scoped>
.cards {
    width: 20rem;
    margin: 1rem;
    padding: 1rem;
    -webkit-box-shadow: 0px 10px 13px -7px #000000, -8px 5px 15px 0px rgba(0,0,0,0); 
    box-shadow: 0px 10px 13px -7px #000000, -8px 5px 15px 0px rgba(0,0,0,0);
    transition: all 0.2s ease;
    cursor: pointer
}

.cards:hover {
    box-shadow: 4px 5px 5px 2px #e9ecef;
    transform: scale(1.1)
}
</style>

