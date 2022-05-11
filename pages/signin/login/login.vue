<style scoped lang="less">
@import "./login.less";
</style>
<template>
  <div class="root">
    <div class="plm-img"></div>

    <div class="plm-logoBox">
      <div class="plm-logo">
        <img
          style="width: 50px; height: 50px; color: #fff"
          src="@/assets/icons/dxunt.png"
        />
      </div>
      <div class="plm-line">&nbsp</div>
      <div class="plm-titleBox">
        <div>顶讯后台管理系统</div>
        <div>
          <a class="plm-dxunt" href="https://www.dxunt.com">www.dxunt.com</a>
        </div>
      </div>
    </div>
    <div class="plm-loginBox">
      <div class="plm-usernameBox">
        <div class="plm-label">账号</div>
        <div>
          <Input
            class="plm-input"
            type="text"
            placeholder="请输入普通账号或者邮箱账号"
          ></Input>
        </div>
      </div>

      <div class="plm-passwordBox">
        <div class="plm-label">密码</div>
        <div>
          <Input
            class="plm-input"
            type="password"
            placeholder="请输入密码"
          ></Input>
        </div>
      </div>

      <div class="plm-buttonBox">
        <Button type="primary" class="plm-button">登录</Button>
      </div>

      <div class="plm-hintBox">
        <div class="plm-regBox">
          还没有账号？
          <a class="plm-reg" @click="onClickReg">立即注册</a>
        </div>
        <div class="plm-forgetBox">
          <a class="plm-froget">忘记密码</a>
        </div>
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
  methods: {
    //跳转注册页面
    onClickReg() {
      // this.$router.push({ path: "/signin/register/register" });
      this.$router.push({ name: "signin-register-register" });
    },
  },
  mounted() {},
  computed: {},
  watch: {},
  props: {},
};
</script>

