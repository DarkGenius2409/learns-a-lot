<template>
  <div class="container">
    <!-- <QuizQuestion :question="quiz[0]" v-on:next-question="nextQuestion" /> -->
    {{ quiz }}
  </div>
</template>

<script>
import QuizQuestion from "./QuizQuestion";

export default {
  name: "LessonQuiz",
  components: { QuizQuestion },
  props: ["quiz"],
  data: () => {
    return {
      question: 0,
    };
  },
  methods: {
    nextQuestion: function () {
      question++;
    },
  },
};
</script>
