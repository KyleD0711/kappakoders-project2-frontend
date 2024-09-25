import { createRouter, createMemoryHistory } from "vue-router";
import HomePage from "./views/HomePage.vue";
import EditPage from "./views/EditPage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/edit",
    component: EditPage,
  }

];

const router = createRouter({
  history: createMemoryHistory(),
  routes: routes,
});

export default router;
