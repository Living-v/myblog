import { createWebHistory, createRouter } from "vue-router";
import home from "../components/home.vue"
import articlePage from "../components/articlePage.vue"

const routes = [
    {
        path: "/article",
        name: "articlePage",
        component: articlePage,
    },
    {
        path: "/",
        name: "home",
        component: home,
        children: []
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;