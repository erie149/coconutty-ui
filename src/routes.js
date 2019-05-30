import Home from "./components/Home.vue";
import BlogPost from "./components/BlogPost.vue";
import BlogList from "./components/BlogList.vue";

const routes = [
   {path: '/', component: Home},
   {path: '/blogs/:slug', component: BlogPost},
   {path: '/blogs', component: BlogList}

];

export default routes;