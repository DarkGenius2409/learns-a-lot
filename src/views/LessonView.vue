<template>
  <div class="container">
    <h1 class="display-4 heading">{{ lessonData.data.title }}</h1>
    <hr />
  </div>
</template>

<script>
import firebase from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export default {
  name: "LessonView",
  data() {
    return {
      accessQuiz: false,
      lessonData: {},
    };
  },
  async mounted() {
    const lessonRef = doc(firebase.db, "lessons", this.$route.params.id);
    const querySnapshot = await getDoc(lessonRef);
    const lesson = { id: querySnapshot.id, data: querySnapshot.data() };
    this.lessonData = lesson;
  },
};
</script>

<style scoped lang="scss"></style>
