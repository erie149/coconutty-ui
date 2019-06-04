<template>
  <v-content>
    
      
      <hr>
      <h1>{{ post.data.title }}</h1>
      <h4>{{ post.data.author.first_name }} {{ post.data.author.last_name }}</h4>
      <div class="content" v-html="post.data.body"></div>
  </v-content>
</template>

<script>
  import { butter } from '@/buttercms'
  export default {
    name: 'blog-post',
    data() {
      return {
        post: {}
      }
    },
    methods: {
      getPost() {
        butter.post.retrieve(this.$route.params.slug)
          .then((res) => {
            // console.log(res.data)
            this.post = res.data
          }).catch((res) => {
            // eslint-disable-next-line no-console
            console.log(res)
          })
      }
    },
    created() {
      this.getPost()
    }
  }
</script>

<style>
  
</style>
