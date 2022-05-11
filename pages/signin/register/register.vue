<style scoped lang="less">
@import "./register.less";
</style>
<template>
  <div class="root">
    <div class="plm-img"></div>
    <div class="plm-title"><h2>注册</h2></div>
    <!-- 注册盒子 -->
    <div class="plm-regBox">
      <div class="plm-usernameBox">
        <div class="plm-label">账号 <span>*</span></div>
        <div class="plm-emailinput">
          <Input placeholder="请输入邮箱账号"> </Input>
          <Button type="primary" @click="onGetCode">获取验证码</Button>
        </div>
      </div>

      <div class="plm-codeBox">
        <div class="plm-label">邮箱验证码 <span>*</span></div>
        <div class="plm-input">
          <Input placeholder="请输入邮箱验证码"></Input>
        </div>
      </div>

      <div class="plm-passwordBox">
        <div class="plm-label">密码 <span>*</span></div>
        <div class="plm-input">
          <Input placeholder="请输入密码"></Input>
        </div>
      </div>
      <!-- 报错 -->
      <div class="plm-passwordBox">
        <div class="plm-label">确认密码 <span>*</span></div>
        <div class="plm-input">
          <Input placeholder="请确认密码"></Input>
        </div>
      </div>
      <div class="plm-buttonBox">
        <div class="plm-button">
          <Button style="width: 280px" type="primary" @click="onClickLogin"
            >登录</Button
          >
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
    //获取验证码
    onGetCode() {
      console.log("获取验证码");
    },
    //登录
    onClickLogin() {
      console.log("登录");
    },
  },
  mounted() {},
  computed: {},
  watch: {},
  props: {},
};
</script>

