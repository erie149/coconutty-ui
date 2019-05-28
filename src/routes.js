
import BlogList from "./components/BlogList.vue";
import BlogPost from "./components/BlogPost.vue";

const routes = [
   {path: '/', component: BlogList},
   {path: '/blog/:slug', component: BlogPost}

];

export default routes;