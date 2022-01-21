<template>
  <div class="container">
    <h1 class="display-4">I'm sorry😥</h1>
    <p class="subtitle-1">The page you were searching for is not available.</p>
    <router-link class="link" to="/">
      <v-btn color="secondary" elevation="1" large outlined>Back to Home</v-btn>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -5%);
  transform: translate(-50%, -95%);
  text-align: center;
}
p {
  margin-top: 1rem;
}
</style>
