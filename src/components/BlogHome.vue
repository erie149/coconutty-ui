<template>
  <!-- <div id="blog-home" class="section">
    <div class="container">
      <div class="columns is-multiline">
        <div
          class="column is-one-third"
          v-for="(post,index) in posts"
          :key="post.slug + '_' + index"
        >
          <div class="box">
              <article class="media">
                <div class="media-left">
                  <figure class="image is-64x64">
                    <img v-if="post.featured_image" :src="post.featured_image" alt="">
                    <img v-else src="http://via.placeholder.com/250x250" alt="">
                  </figure>
                </div>
                <div class="media-content">
                  <div class="content">
                    <h2 class="title is-5">{{ post.title }}</h2>
                    <p>{{ post.summary }}</p>
                  </div>
                </div>
              </article>
  </div>-->
<div class="container">
    <div v-for="(post,index) in posts" :key="post.slug + '_' + index">
      <md-card>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">{{ post.title }}</div>
          </md-card-header-text>
          <md-card-media>
            <img v-if="post.featured_image" :src="post.featured_image" alt>
            <img v-else src="http://via.placeholder.com/250x250" alt>
          </md-card-media>
        </md-card-header>
        <md-card-content>
          <p>{{ post.summary }}</p>
        </md-card-content>

        <md-card-actions>
          <md-button :href="pageUrl('/blog/', post.slug)">Post</md-button>
          <!--<router-link :to="'/blog/' + post.slug">-->
        </md-card-actions>
      </md-card>
    </div>
</div>
</template>
  
<script>
import { butter } from "@/buttercms";
export default {
  name: "blog-home",
  data() {
    return {
      page_title: "Blog",
      posts: [],
      categories: []
    };
  },
  methods: {
    pageUrl (url, id) {
      // eslint-disable-next-line no-console
        console.log("" + id);
        
      return '/blog/' + id
    },
    getPosts() {
      butter.post
        .list({
          page: 1,
          page_size: 10
        })
        .then(res => {
          // console.log(res.data)
          this.posts = res.data.data;
        });
    },
    getCategories() {
      butter.category.list().then(res => {
        // eslint-disable-next-line no-console
        console.log("List of Categories:");
        // eslint-disable-next-line no-console
        console.log(res.data.data);
      });
    },
    getPostsByCategory() {
      butter.category
        .retrieve("example-category", {
          include: "recent_posts"
        })
        .then(res => {
          // eslint-disable-next-line no-console
          console.log("Posts with specific category:");
          // eslint-disable-next-line no-console
          console.log(res);
        });
    }
  },
  created() {
    this.getPosts();
    this.getCategories();
    this.getPostsByCategory();
  }
};
</script>
