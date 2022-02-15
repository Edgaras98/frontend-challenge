<template>
    <div>
        <b-card
         style="max-width: 20rem;"
         class="mb-4"
         >
         <b-card-header>
             Blog id: {{blog.id}} User id: {{blog.userId}}
             <b-card-title>
             {{blog.title}}
             </b-card-title>
         </b-card-header>
         <b-card-text>
         {{blog.body}} 
         </b-card-text>
         <b-button :to="{name: buttonRoute, params: { id: blog.id} }" variant="primary">{{buttonText}}</b-button>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: 'Blog',
        props: {
            blog: Object,
            buttonText: String,
            buttonRoute: String
        } 
    }
</script>

