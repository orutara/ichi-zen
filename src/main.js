import { createApp, ref } from "vue";
import App from "@/App.vue";
import router from "@/router";
import { createPinia } from "pinia";
import "@/assets/css/tailwind.css";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseConfig } from "@/firebase-config.js";
import { useUserStore } from "@/store/user";

// pinia
const pinia = createPinia();

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Login Confirmation
// const isLoggingIn = ref(true);

// Auth State
onAuthStateChanged(getAuth(), async (user) => {
  const userStore = useUserStore();
  if (user !== null) {
    userStore.setUser(user);
    router.push('/')
  } else {
    userStore.setUser(null);
    router.push('/login')
  }
});

createApp(App).use(router).use(pinia).mount("#app");
