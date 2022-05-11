<style scoped lang="less">
@import "./register.less";
</style>
<template>
  <div class="root">
    <div class="plm-img"></div>
    <div class="plm-title">
      <span style="font-size: 24px">{{ isTitle }}注册</span>
      <span style="align-self: center; cursor: pointer" @click="onClickCut"
        >切换{{ isEmailAndisUser }}注册</span
      >
    </div>
    <!-- 邮箱注册盒子 -->
    <div class="plm-regBox" v-show="emailShow">
      <div class="plm-usernameBox">
        <div class="plm-label">账号 <span>*</span></div>
        <div class="plm-emailinput">
          <Input placeholder="请输入邮箱账号" v-model="User.username"> </Input>
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

    <!-- 账号注册盒子 -->
    <div class="plm-regBox" v-show="!emailShow">
      <div class="plm-usernameBox">
        <div class="plm-label">账号 <span>*</span></div>
        <div class="plm-emailinput">
          <Input placeholder="请输入账号" v-model="User.username"> </Input>
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
      //切换账号注册和切换邮箱注册
      emailShow: false,
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
      console.log("注册");
    },
    //切换邮箱注册 或 切换账号注册
    onClickCut() {
      this.emailShow = !this.emailShow;
    },
  },
  mounted() {
    //获取邮箱
    getEamilCode().then((res) => {
      console.log(res);
    });
  },
  computed: {
    //显示切换邮箱注册文字或显示账号注册文字
    isEmailAndisUser() {
      if (this.emailShow === false) {
        return "邮箱";
      } else {
        return "账号";
      }
    },
    isTitle() {
      if (this.emailShow === false) {
        return "账号";
      } else {
        return "邮箱";
      }
    },
  },
  watch: {},
  props: {},
};
</script>

