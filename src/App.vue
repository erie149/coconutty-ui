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
<<<<<<< HEAD
        <div class="navbar-end">
          <router-link class="navbar-item" to="/customers">
            Customers
          </router-link>
          <router-link class="navbar-item" to="/faq">
            FAQ
          </router-link>
          <router-link class="navbar-item" to="/blog">
            Blog Posts
          </router-link>
          <router-link class="navbar-item" to="/rss">
            RSS, Atom &amp; Sitemap
          </router-link>
        </div>
      </div>
    </nav>
  
    <router-view/>
  
=======

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
         <router-view />
    </md-content>
>>>>>>> correctpackage
  </div>
</template>

<script>
export default {
}
</script>

