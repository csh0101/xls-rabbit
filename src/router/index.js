import { createWebHistory, createRouter } from "vue-router";
import Goods from "../components/Goods.vue"
import Book from "../components/Book.vue"
import Profile from "../components/Profile.vue"
import Search from "../components/Search.vue"
const routes = [
    {
        path: "/goods",
        name: "Goods",
        component: Goods,
    },
    {
        path: "/book",
        name: "Books",
        component: Book
    },
    {
        path: "/search",
        name: "Search",
        component: Search
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;