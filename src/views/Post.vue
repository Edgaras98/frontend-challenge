<template>
<div>
   <Navigation text='Home' text2='Create blog' />
   <div class="about">
     <Blog :key="blog.id" :blog="blog" buttonText='Edit' buttonRoute='Edit'/>
</div>
</div>
</template>

<script>
import Navigation from '@/components/layout/Navigation.vue'
import Blog from '@/components/layout/Blog.vue'
import EventService from '@/services/EventService.js'

export default {
    components:{
      Navigation,
      Blog
    },
    data() {
        return {
            blog: {},
            id: this.$route.params.id
        }
    },
    created(){
     EventService.getBlog(this.id)
     .then(res => {
         this.blog = res.data
         })
     .catch(err => 
     console.log(err))
    } 
  }
</script>

<style scoped>
.about{
padding: 5rem;
display: flex;
justify-content: center;
align-items: center;
}
</style>
