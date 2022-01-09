<template>
  <div class="container">
    <v-card dark>
      <v-card-title class="text-h5" color="primary">
        {{ question.question }}
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "QuizQuestion",
  props: ["question"],
  methods: {
    nextQuestion: function () {
      this.$emit("next-question");
    },
  },
};
</script>

<style></style>
