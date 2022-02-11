<template>
    <div>
        <b-card
         tag="article"
         style="width: 20rem;"
         class="mb-2"
         >
       
          <b-card-text>
            {{blog.body}} 
          </b-card-text>
         <b-button variant="primary">View</b-button>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: 'Blog',
        props: {
            blog: Object
        } 
    }
</script>

<style scoped>

</style>
