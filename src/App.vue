<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h1 class="display-2">
          <i class="brand secondary--text">Sir Learns-a-lot</i>
        </h1>
      </div>

      <v-spacer></v-spacer>

      <router-link :to="{ name: 'Home' }">
        <v-btn target="_blank" text>
          <span class="mr-2">Home</span>
        </v-btn>
      </router-link>

      <router-link :to="{ name: 'lesson-select' }">
        <v-btn target="_blank" text>
          <span class="mr-2">Browse</span>
        </v-btn>
      </router-link>

      <v-btn @click="signIn()" target="_blank" text>
        <span class="mr-2">{{ !signedIn ? "Sign In" : "Sign Out" }}</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer color="primary lighten-1" padless>
      <v-row justify="center" no-gutters>
        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>Nerdtastic</strong>
        </v-col>
      </v-row>
    </v-footer>
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

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Leckerli+One&family=Raleway:wght@200&display=swap");

.v-application {
  font-family: "Raleway", sans-serif !important;
}

.heading {
  margin: 10px 0px 5px 50px;
}

.link {
  text-decoration: none;
}

.brand {
  font-family: "Leckerli One", cursive;
}

.container {
  font-family: "Raleway", sans-serif !important;
}
</style>
