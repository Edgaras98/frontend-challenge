
<template>

  <div class="about">

    <Navigation text='Home' text2='Create blog' />
    <Form v-on:form-submit='postBlog($event)' titlePlaceholder='Blog Title' bodyPlaceholder='...' />
    
  </div>

</template>

<script>

import Navigation from '@/components/layout/Navigation.vue'
import Form from '@/components/layout/Form.vue'
import EventService from '@/services/EventService.js'
import checkError from '@/services/ErrorCode.js'

export default {
  name: 'Create',
    components:{
      Navigation,
      Form
    },
    
    data() {
      return {
        blog: [],
      }
    },

    methods: {
      postBlog($event){
        const form = {title: $event.title, body: $event.body}
        EventService.postBlog(form)
        .then(res => checkError(res))
        .catch(err => console.log(err))
       }
      }
    }

</script>

