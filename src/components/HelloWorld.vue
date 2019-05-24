<template>
  <div class="hello">
    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column has-text-centered">
            <a href="https://vuejs.org/">
              <figure>
                <img src="../assets/logo.png" alt="Vue logo">
              </figure>
            </a>
          </div>
          <div class="column has-text-centered">
            <a href="https://buttercms.com/">
              <figure>
                <img src="../assets/buttercms.jpg" alt="ButterCMS logo">
              </figure>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    butter
  } from '@/buttercms'
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      fetchHeadline() {
        butter.content.retrieve(['homepage_headline'])
          .then((res) => {
            // eslint-disable-next-line no-console
            console.log('Headline from ButterCMS')
            // eslint-disable-next-line no-console
            console.log(res)
          })
      },
      fetchPosts() {
        butter.post.list({
            page: 1,
            page_size: 10
          })
          .then((res) => {
            // eslint-disable-next-line no-console
            console.log('Content from ButterCMS')
            // eslint-disable-next-line no-console
            console.log(res)
          })
      }
    },
    created() {
      this.fetchHeadline()
      this.fetchPosts()
    }
  }
</script>

<style>
  
</style>
