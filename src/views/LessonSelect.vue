<template>
  <div class="container">
    <div v-if="signedIn">
      <h1 class="display-4 heading">Browse</h1>
      <hr />
    </div>
    <div v-else class="signedOut">
      <h1 class="display-4">Looks like you haven't signed in yet😅</h1>
      <p class="title">Please sign in to access this content!</p>
    </div>
  </div>
</template>

<script>
import firebase from "../firebase";

export default {
  name: "LessonSelect",
  data() {
    return {
      lesson: {},
      signedIn: false,
    };
  },
  mounted() {
    if (firebase.auth.currentUser) {
      this.signedIn = true;
    }
  },
};
</script>

<style lang="scss" scoped>
.signedOut {
  text-align: center;
  margin-top: 20%;
}
</style>
