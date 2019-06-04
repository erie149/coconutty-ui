<template>
  
  <div>
    <v-toolbar flat app color="grey darken-1">
    
    <v-toolbar-side-icon color="grey lighten-4" @click.stop="drawer = !drawer">
          </v-toolbar-side-icon>
   

      <v-toolbar-title color="grey lighten-4">
            Coconutty
          </v-toolbar-title>
          
      <v-spacer></v-spacer>

     <v-btn icon color="grey lighten-4">
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
     <v-navigation-drawer app color="grey darken-1"
      v-model="drawer"
    >
      
      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
          click=""
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> 
    
    <router-view/>    
     
    </div>

</template>

<script>
export default {
  data () {
      return {
        drawer: false,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ]
      }
    }
}
</script>

<style>
.fixed{
    position:fixed;
    top:0px;
    right:0px;
    width:100px;
}
</style>