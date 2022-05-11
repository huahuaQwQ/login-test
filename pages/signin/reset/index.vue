<style scoped lang="less">
@import "./index.less";
</style>
<template>
  <div class="root">
    <div class="plm-img"></div>
    <div class="plm-title">
      <div style="font-size: 22px">重置密码</div>
    </div>
    <div class="plm-forgetBox">
      <div class="plm-usernameBox">
        <div class="plm-label">账号</div>
        <div>
          <Input class="plm-input" type="text" placeholder="请输入账号">
          </Input>
        </div>
      </div>

      <div class="plm-passwordBox">
        <div class="plm-label">密码</div>
        <div>
          <Input
            class="plm-input"
            type="password"
            placeholder="请输入重置密码"
          ></Input>
        </div>
      </div>

      <div class="plm-buttonBox">
        <Button style="width: 280px" type="primary" @click="onClickReset"
          >确认</Button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    //跳转到重置密码
    onClickReset() {
      this.$Message.success("重置密码成功！");

      //跳转登录页
      this.$router.push({ name: "signin-login" });
    },
  },
  computed: {},
  watch: {},
  props: {},
};
</script>

