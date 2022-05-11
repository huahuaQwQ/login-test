<template>
  <div></div>
</template>

<script>
import login from "./signin/login/login.vue";
import register from "./signin/register/register.vue";
export default {
  name: "IndexPage",
  layout: "navigation",
  components: {
    login,
    register,
  },
};
</script>
