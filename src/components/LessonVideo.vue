<template>
  <div class="container">
    <v-row class="video">
      <iframe
        width="1280"
        height="963"
        :src="url"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="video"
      ></iframe>
    </v-row>
    <v-row class="next">
      <v-btn class="btn" @click="goToQuiz" outlined color="secondary" large
        >Go to Quiz</v-btn
      >
    </v-row>
  </div>
</template>

<script>
export default {
  name: "LessonVideo",
  props: ["url"],
  methods: {
    goToQuiz: function () {
      this.$emit("go-to-quiz");
    },
  },
};
</script>

<style lang="scss" scoped>
.next {
  text-align: center;
  justify-content: center;
}

.video {
  text-align: center;
  justify-content: center;
  padding: 25px 0px 15px 0px;
}
</style>
