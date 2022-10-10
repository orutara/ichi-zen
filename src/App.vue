<script setup>

// Login Confirmation
// const isLoggingIn = ref(true);

// Auth State
// onAuthStateChanged(getAuth(), async (user) => {
//   const userStore = useUserStore();
//   if (user !== null) {
//     console.log('auth state change true');
//     userStore.setUser(user);
//     isLoggingIn.value = false
//   } else {
//     console.log('auth state change false');
//     isLoggingIn.value = false
//   }
// });

// const url = 'https://api.twitter.com/2/tweets/search/recent?query=#本日の一善;
// const { VITE_BASE_bearer_token } = import.meta.env;
// const options = {
//   method: 'GET',
//   headers: {
//     Authorization: `Bearer ${VITE_BASE_bearer_token}`,
//   }
// }
// fetch(url, options).then(res => res.json()).then(json => console.log(json));
</script>

<template>
  <!-- <div v-if="isLoggingIn">読み込み中...</div>
  <router-view v-if="!isLoggingIn" /> -->
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 15px;
  letter-spacing: 1.1px;
  color: #333333;
}
</style>
