<template>

<v-content>
    
    <v-layout align-center pt-5>
        <v-flex xs12 sm4 text-xs-center/>
            
       <v-flex xs12 sm4 text-xs-center>
          <v-text-field
            label="Find Your Post"
            outline
          ></v-text-field>
        
        <router-link :to="'/blogs'">
            <v-btn color="grey lighten-4">Search</v-btn>
        </router-link>
                </v-flex>
            </v-layout>
    </v-content>
</template>

<script>
export default {

}
</script>

<style>
.home-center-container {
    text-align: center;
    max-width: 300px;
    margin: auto;
    padding: 200px 0;
}

,
.home-center {
    display: inline-block;
}
</style>
