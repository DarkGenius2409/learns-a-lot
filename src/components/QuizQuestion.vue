<template>
  <v-container class="container questionContainer" fluid>
    <v-card dark class="question mx-auto">
      <v-card-title class="text-h5" color="primary">
        {{ question.question }}
      </v-card-title>
      <v-card-subtitle>
        <v-container class="px-0" fluid>
          <v-radio-group @change="onChange">
            <v-radio
              v-for="(choice, i) in question.choices"
              :key="i"
              :label="`${choice}`"
              :value="i"
              mandatory
            ></v-radio>
          </v-radio-group>
        </v-container>
      </v-card-subtitle>
      <v-card-actions class="nextQuestion">
        <div>
          <v-btn outlined large color="secondary" @click="nextQuestion">
            {{ next }}
          </v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "QuizQuestion",
  props: ["question", "next"],
  data: () => {
    return {
      correct: false,
    };
  },
  mounted() {
    this.correct = false;
  },
  methods: {
    nextQuestion: function () {
      this.$emit("next-question", this.correct);
    },
    onChange: function (e) {
      this.correct = this.question.choices[e] == this.question.answer;
    },
  },
};
</script>

<style lang="scss">
.question {
  width: 50%;
  padding: 25px;
}

.nextQuestion {
  justify-content: right;
  text-align: right;
}

.questionContainer {
  justify-content: center;
  text-align: center;
}
</style>
