<template>
 <div>
    <Navigation text='Home' text2='Create blog' />
      <div class="container">
       <Blog v-for="blog in blogs" :key="blog.id" :blog="blog" buttonText='View' buttonRoute='Post'/>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/layout/Navigation.vue'
import Blog from '@/components/layout/Blog.vue'
import EventService from '@/services/EventService.js'

export default {
  name: 'Home',
  components: {
    Navigation,
    Blog
  },
  data(){
    return {
      blogs: []
    }
  },
  created(){
   EventService.getBlogs()
   .then(res => this.blogs = res.data)
   .catch(err => console.log(err.response))
  }
}
</script>

<style scoped>
.container{
  padding: 2rem;
  width: 81%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
