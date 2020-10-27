<template>
  <div class="nav-bar">
    <div>
      <router-link to="/account">
        <span v-if="userName">
          Hi {{userName}}!
        </span>
        <span v-else>
          Sign In/Sign Up
        </span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "main",
  data() {
    return {
      userName: this.$cookie.get('url-shortener-auth')
    }
  },
};
</script>
