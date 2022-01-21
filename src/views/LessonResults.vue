<template>
  <div class="container">
    <SignIn>
      <div>
        <h1 class="display-4 heading">
          You got
          <strong class="secondary--text"
            >{{ this.$route.params.percent }}%</strong
          >{{ isGood ? "😄!" : "😥." }}
        </h1>
        <v-col class="mb-5 furtherLinks" cols="12">
          <h2 class="display-1 font-weight-bold mb-3">Further Links</h2>

          <v-row justify="center">
            <a
              v-for="(link, i) in furtherLinks"
              :key="i"
              :href="link"
              class="title mx-3 heading"
              target="_blank"
            >
              {{ furtherLinkNames[i] }}
            </a>
          </v-row>
        </v-col>
        <router-link class="link" to="/browse">
          <v-btn color="secondary" elevation="1" large outlined
            >Back to Browse</v-btn
          >
        </router-link>
      </div>
    </SignIn>
  </div>
</template>

<script>
import firebase from "../firebase";
import { getDoc, doc } from "firebase/firestore";
import SignIn from "../components/SignIn";

export default {
  name: "LessonResults",
  components: { SignIn },
  data: () => {
    return {
      furtherLinks: [],
      furtherLinkNames: [],
      isGood: false,
    };
  },
  async mounted() {
    this.isGood = parseInt(this.$route.params.percent) > 85;

    const lessonRef = doc(firebase.db, "lessons", this.$route.params.id);
    const querySnapshot = await getDoc(lessonRef);

    this.furtherLinks = querySnapshot.data().furtherLinks;
    this.furtherLinkNames = querySnapshot.data().furtherLinkNames;
  },
};
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
  vertical-align: middle;
  position: relative;
  top: 20%;
}

.furtherLinks {
  margin-top: 2rem;
  font-family: "Raleway", sans-serif !important;
}

.heading {
  font-family: "Raleway", sans-serif !important;
}

.display-1 {
  font-family: "Raleway", sans-serif !important;
}
</style>
