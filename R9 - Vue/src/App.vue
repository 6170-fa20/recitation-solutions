<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<!-- global styles -->
<style>
* {
  box-sizing: border-box;
}

body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: lightblue;
}

.success-message {
  color: green;
  margin: auto;
}

.error-message {
  color: red;
  margin: auto;
}
</style>

<script>
export default {
  name: "app",
  beforeCreate: function() {
    let authenticated = this.$cookie.get('url-shortener-auth');
    if (!authenticated) {
      this.$router.push("account");
    }
  }
};
</script>
