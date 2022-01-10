<template>
  <div class="container">
    <div v-if="signedIn">
      <h1 class="display-4 heading">{{ lessonData.data.title }}</h1>
      <hr />
      <div class="container content" v-if="!accessQuiz">
        <LessonVideo :url="lessonData.data.url" v-on:go-to-quiz="goToQuiz" />
      </div>
      <div class="container content" v-if="accessQuiz">
        <LessonQuiz :quiz="lessonData.data.quiz" />
      </div>
    </div>
    <div v-else class="signedOut">
      <h1 class="display-4">Looks like you haven't signed in yet😅</h1>
      <p class="title">Please sign in to access this content!</p>
    </div>
  </div>
</template>

<script>
import firebase from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import LessonVideo from "../components/LessonVideo";
import LessonQuiz from "../components/LessonQuiz";

export default {
  name: "LessonView",
  components: { LessonVideo, LessonQuiz },
  data: () => {
    return {
      accessQuiz: false,
      lessonData: {},
      signedIn: false,
    };
  },
  async mounted() {
    if (firebase.auth.currentUser) {
      this.signedIn = true;
    }
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
