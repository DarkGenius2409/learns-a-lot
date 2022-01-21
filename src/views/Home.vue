<template>
  <v-container class="container">
    <div class="container intro">
      <h1 class="welcome">
        Welcome to <br />
        <strong>Sir Learns-a-Lot</strong>
      </h1>
      <p class="title">The next-gen learning platform for people on the go.</p>
    </div>

    <hr class="divider" />

    <div class="middle-container">
      <div class="container">
        <h1 class="display-2">What is Sir Learns-a-Lot?</h1>
        <p>
          Sir Learns-a-lot is a learning platform designed to be short and
          <br />
          concise, allowing people who might not have the time to sit down and
          <br />
          spend more than 20 minutes learning a topic to get a quick overview in
          <br />
          under 10 minutes!
        </p>
      </div>

      <hr class="divider" />

      <div class="container paragraph">
        <h1 class="display-2">How does it work?</h1>

        <p>
          A Sir Learns-a-Lot lesson is comprised of a short 5-10 minute video,
          <br />
          followed by a 5 question long quiz about that video. After finishing
          <br />
          the quiz, you can see your results, and get a list of resources to use
          <br />
          if you are interested in the topic, and want to learn more.
        </p>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  text-align: center;
}

.container {
  text-align: center;
  align-items: center;
}

.intro {
  margin: 10% 0% 3% 0%;
}

.middle-container {
  text-align: center;
  padding: 20px;
  line-height: 1.5;
}

.divider {
  margin-bottom: 5%;
  border-width: 5px;
  border-style: dotted none none;
  border-color: grey;
  width: 5%;
  position: absolute;
  left: 47.5%;
}

.display-2 {
  margin: 1.5rem;
}
.display-3 {
  margin: 1.5rem;
}

.welcome {
  font-size: 1000%;
  font-weight: 100;
  letter-spacing: -0.015625em;
  line-height: 1;
}
</style>
