<template>
 <div>
    <div class="home-image">
      <div class="overlay">
        <p>Create Your Own<br>
         Personal Blog
         </p>
         <b-button variant="primary" class="overlay-button" pill>Start Now</b-button>
         </div>
      </div>
      <div class="container">
       <Blog v-for="blog in blogs" :key="blog.id" :blog="blog" buttonText='Read more' buttonRoute='Post'/>
      </div>
      <Footer />
  </div>
</template>

<script>
import Blog from '@/components/layout/Blog.vue'
import Footer from '@/components/layout/Footer.vue'
import EventService from '@/services/EventService.js'

export default {
  name: 'Home',
  components: {
    Blog,
    Footer
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Roboto:wght@700&display=swap');

.home-image{
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.35)),
  url('https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2103&q=80');
  background-repeat: no-repeat;
  position: relative;
  background-size: cover;
  object-fit: contain;
  width: 100%;
  height: 100vh;
}

.overlay {
  font-family: 'Montserrat', sans-serif;
  position: absolute;
  text-align: center;
  width: 80%;
  top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
  color: rgba(255, 255, 255, 0.918);
  font-size: 72px;
}

.overlay-button{
  width: 220px;
  padding: 1rem;
  font-size: 22px;
}

.container{
  margin: 0 auto;
  padding: 2rem;
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

@media screen and (max-width: 760px) {
.overlay {
  font-size: 42px;
}
}
</style>
