<template>
    <div class="navigation">
        <b-nav class="nav-wrap">
            <b-button v-b-toggle.sidebar-1 variant="dark" bg-variant="dark">
                <b-icon icon="justify"/> Menu
                    </b-button>
                     <b-sidebar id="sidebar-1" bg-variant="dark" shadow>
                     <b-nav-item to="/">Home<b-icon icon="house-door"/></b-nav-item>
                    <b-icon icon="house-door"/>
                <b-nav-item to="/create">Create blog<b-icon icon="file-earmark-plus"/></b-nav-item>
            </b-sidebar>
        </b-nav>
    </div>
</template>

<script>
    export default {
        name: 'Navigation',
        
    }
</script>

<style scoped>

.navigation{
 width: 100%;
 margin: 0 auto;
 padding: 1rem;
 background: #262626;
}

.nav-wrap {
    width: 80%;
    margin: 0 auto;
}

#sidebar-1{
    background: wheat;
}
.nav-links{
    color: white;
}

</style>
