<template>
  <div></div>
</template>

<script>
import login from "./signin/login/index.vue";
import register from "./signin/register/index.vue";
export default {
  name: "IndexPage",
  layout: "navigation",
  components: {
    login,
    register,
  },
};
</script>
