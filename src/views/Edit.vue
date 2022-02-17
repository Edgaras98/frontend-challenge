<template>
   <div>
      <Navigation text='Home' text2='Create blog' />
        <div class="edit">
         <h4>Editing Blog with id of - {{blog.id}} </h4>
           <Form :form-submit='editBlog($event)' :titlePlaceholder='blog.title' :bodyPlaceholder='blog.body' />
        </div>
    </div>
</template>

<script>
import Navigation from '@/components/layout/Navigation.vue'
import Form from '@/components/layout/Form.vue'
import EventService from '@/services/EventService.js'
import checkError from '@/services/ErrorCode.js'

    export default {
         name: 'Edit',
           components: {
             Navigation,
             Form,
         },
 
         data(){
            return {
                blog: [],
                id: this.$route.params.id
            }
         },

         methods: {
             editBlog($event) {
             const form = { title: $event.title, body: $event.body };
             EventService.editBlog(this.$route.params.id, form)
             .then(res => checkError(res)
            )
             .catch(err => console.log(err));
            },
                },

         created() {
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

.edit{
    padding: 2rem;
    text-align: center;
}

</style>

