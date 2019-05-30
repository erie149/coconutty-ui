<template>
<div class="home-center-container">
    <div class="home-center">
        <md-content>Coconutty</md-content>
    </div>
    <div class="home-center">
        <md-field>
            <md-input></md-input>
        </md-field>
        <router-link :to="'/blogs'">
            <md-button>Search</md-button>
        </router-link>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.home-center-container {
    text-align: center;
    max-width: 500px;
    margin: auto;
    padding: 200px 0;
}

,
.home-center {
    display: inline-block;
}
</style>
