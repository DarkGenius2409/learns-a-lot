<template>
  <div class="container">
    <QuizQuestion
      :question="quiz[question]"
      :next="next"
      @next-question="nextQuestion"
    />
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
      next: "Next Question",
      correct: 0,
    };
  },
  methods: {
    nextQuestion: function (e) {
      if (this.question < this.quiz.length) {
        if (e == true) {
          this.correct++;
        }
        if (this.question + 1 == this.quiz.length - 1) {
          this.next = "Submit";
          this.question++;
        } else if (this.question + 1 == this.quiz.length) {
          const percentCorrect = (this.correct / this.quiz.length) * 100;
          this.$router.push({
            name: "results",
            params: { percent: percentCorrect },
          });
        } else {
          this.question++;
        }
      }
    },
  },
};
</script>
