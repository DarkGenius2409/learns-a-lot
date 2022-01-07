<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h1 class="display-2">Sir Learns-a-lot</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn @click="signIn()" target="_blank" text>
        <span class="mr-2">{{ !signedIn ? "Sign In" : "Sign Out" }}</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import firebase from "./firebase";
import { signInWithPopup, signOut } from "firebase/auth";

export default {
  name: "App",

  data: () => ({
    signedIn: false,
  }),
  methods: {
    signIn: function () {
      if (!this.signedIn) {
        signInWithPopup(firebase.auth, firebase.provider)
          .then((result) => {
            this.signedIn = !this.signedIn;
            this.$router.push({ name: "lesson-select" });
          })
          .catch((error) => {
            console.error("Error Signing In", error.message);
          });
      } else {
        signOut(firebase.auth)
          .then((result) => {
            this.signedIn = !this.signedIn;
            this.$router.push({ name: "Home" });
          })
          .catch((error) => {
            console.error("Error Signing Out", error.message);
          });
      }
    },
  },
};
</script>
