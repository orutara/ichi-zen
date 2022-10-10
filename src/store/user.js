import { defineStore } from "pinia";
import { getAuth, signOut, signInWithPopup, TwitterAuthProvider } from "firebase/auth";

export const useUserStore = defineStore("userStore", {
  state: () => {
    return {
      user: null,
    };
  },
  getters: {
    isUserEmpty: (state) => {
      return state.user === null;
    },
  },
  actions: {
    setUser(user) {
      this.user = user;
    },
    async login() {
      try {
        const reulst = await signInWithPopup(
          getAuth(),
          new TwitterAuthProvider()
        );
        if (!reulst.user) throw "user is null";
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + "@@@" + errorMessage);
      }
    },
    login() {
      signInWithPopup(getAuth(), new TwitterAuthProvider())
        .then((result) => {
          const user = result.user;
          if (!user) throw "user is null";
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "@@@" + errorMessage);
        });
    },
    logout() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {})
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "@@@" + errorMessage);
        });
    },
  },
});
