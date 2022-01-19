<template>
  <div class="container">
    <SignIn>
      <h1 class="display-4 heading">{{ lessonData.data.title }}</h1>
      <hr />
      <div class="container content" v-if="!accessQuiz">
        <LessonVideo :url="lessonData.data.url" v-on:go-to-quiz="goToQuiz" />
      </div>
      <div class="container content" v-if="accessQuiz">
        <LessonQuiz :quiz="lessonData.data.quiz" />
      </div>
    </SignIn>
  </div>
</template>

<script>
import firebase from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import LessonVideo from "../components/LessonVideo";
import LessonQuiz from "../components/LessonQuiz";
import SignIn from "../components/SignIn";

export default {
  name: "LessonView",
  components: { LessonVideo, LessonQuiz, SignIn },
  data: () => {
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
  methods: {
    goToQuiz: function () {
      this.accessQuiz = true;
    },
  },
};
</script>

<style scoped lang="scss">
.content {
  text-align: center;
}

.heading {
  margin-bottom: 15px;
}
</style>
