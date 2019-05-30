
import Home from "./components/Home.vue";
import BlogPost from "./components/BlogPost.vue";

const routes = [
   {path: '/', component: Home},
   {path: '/blog/:slug', component: BlogPost}

];

export default routes;