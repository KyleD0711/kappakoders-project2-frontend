import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Vuetify
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vueitfy = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
  },
});

createApp(App).use(router).use(vueitfy).mount("#app");
