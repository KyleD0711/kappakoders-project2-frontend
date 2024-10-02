import { createRouter, createMemoryHistory } from "vue-router";
import HomePage from "./views/HomePage.vue";
import EditPage from "./views/EditPage.vue";

const routes = [
  {
    path: "/",
    name: "home-page",
    component: HomePage,
  },
  {
    path: "/add",
    name: "add-course-page",
    component: EditPage,
  },
  {
    path: "/edit/:id",
    name: "edit-course-page",
    component: EditPage,
  }

];

const router = createRouter({
  history: createMemoryHistory(),
  routes: routes,
});

export default router;
