<template>
  <div id="app">

     <md-toolbar class="md-primary">
      
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <md-button class="md-icon-button">
            <md-icon>menu</md-icon>
          </md-button>
          <h3 class="md-title" style="flex: 1">CocoNutty Blog</h3>
        </div>

        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button">
            <md-icon>refresh</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>more_vert</md-icon>
          </md-button>
        </div>
      </div>
    </md-toolbar>
    <md-content>
      
          <div>
    <blogHome></blogHome>
  </div>  
    </md-content>
  </div>
</template>

<script>
import BlogHome from './components/BlogHome.vue'
  export default {
    
    components: {
      'blogHome': BlogHome
    }
  }
</script>

