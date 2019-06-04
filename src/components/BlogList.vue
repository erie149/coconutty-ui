<template>
 
<v-content>
    <div v-for="(post,index) in posts" :key="post.slug + '_' + index">
      <router-link :to="'/blogs/' + post.slug">
      <v-card>
          <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ post.title }}</h3>
            <div> {{ post.summary }} </div>
          </div>
        </v-card-title>
      </v-card>
      </router-link>

    </div>
</v-content>
</template>
  
<script>
import { butter } from "@/buttercms";
export default {
  name: "blog-list",
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
        
      return '/blogs/' + id
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
