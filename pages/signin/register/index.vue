<style scoped lang="less">
@import "./index.less";
</style>
<template>
  <div class="root">
    <div class="plm-img"></div>
    <div class="plm-title">
      <span style="font-size: 22px">注册</span>
    </div>

    <!-- 账号注册盒子 -->
    <div class="plm-regBox">
      <div class="plm-usernameBox">
        <div class="plm-label">账号 <span>*</span></div>
        <div class="plm-emailinput">
          <Input placeholder="请输入账号" v-model="User.username"> </Input>
        </div>
      </div>

      <div class="plm-usernameBox">
        <div class="plm-label">邮箱 <span>*</span></div>
        <div class="plm-emailinput">
          <Input placeholder="请输入邮箱" v-model="User.username"> </Input>
          <Button type="primary" @click="onGetCode">获取验证码</Button>
        </div>
      </div>

      <div class="plm-codeBox">
        <div class="plm-label">邮箱验证码 <span>*</span></div>
        <div class="plm-input">
          <Input placeholder="请输入邮箱验证码" v-model="User.code"></Input>
        </div>
      </div>

      <div class="plm-passwordBox">
        <div class="plm-label">密码 <span>*</span></div>
        <div class="plm-input">
          <Input placeholder="请输入密码" v-model="User.password"></Input>
        </div>
      </div>

      <div class="plm-passwordBox">
        <div class="plm-label">确认密码 <span>*</span></div>
        <div class="plm-input">
          <Input placeholder="请确认密码" v-model="User.password1"></Input>
        </div>
      </div>
      <div class="plm-buttonBox">
        <div class="plm-button">
          <Button style="width: 280px" type="primary" @click="onClickReg"
            >注册</Button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getEamilCode } from "../../../axios/request.js";
export default {
  // asyncData(context) {
  //   return context.$axios
  //     .get("http://127.0.0.1:4523/mock/967824/code")
  //     .then((res) => {
  //       console.log(res);
  //     });
  // },
  name: "",
  data() {
    return {
      //账号注册
      User: {
        username: "",
        password: "",
        password1: "",
        //邮箱用户才有的验证码
        code: "",
      },
    };
  },
  methods: {
    //获取验证码
    onGetCode() {
      console.log("获取验证码");
    },
    //注册
    onClickReg() {
      this.$Message.success("注册成功！");

      //跳转登录页

      console.log("注册");
    },
  },
  mounted() {
    //获取邮箱
    getEamilCode().then((res) => {
      console.log(res);
    });
  },
  computed: {},
  watch: {},
  props: {},
};
</script>

