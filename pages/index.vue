<template>
  <div>
    <login />
  </div>
</template>

<script>
import login from "./signin/login/login.vue";
import register from "./signin/register/register.vue";
export default {
  name: "IndexPage",
  components: {
    login,
    register,
  },
};
</script>
