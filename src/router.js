import { createRouter, createMemoryHistory } from "vue-router";
import HomePage from "./views/HomePage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes: routes,
});

export default router;
