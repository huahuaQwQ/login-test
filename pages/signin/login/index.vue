<style scoped lang="less">
@import "./index.less";
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
      <Tabs value="name1" size="small">
        <TabPane label="账号登录" name="name1"
          ><div class="plm-usernameBox">
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
              <a class="plm-froget" @click="onClickForget">忘记密码</a>
            </div>
          </div></TabPane
        >
        <TabPane label="邮箱登录" name="name2"
          ><div class="plm-usernameBox">
            <div class="plm-label">邮箱账号</div>
            <div>
              <Input
                class="plm-input"
                type="text"
                placeholder="请输入邮箱账号"
              ></Input>
            </div>
          </div>

          <div class="plm-passwordBox">
            <div class="plm-label">邮箱验证码</div>
            <div style="display: flex; flex-direction: row">
              <Input
                class="plm-input"
                type="password"
                placeholder="请输入验证码"
              ></Input>
              <Button type="primary" @click="onGetCode">{{ text }}</Button>
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
              <a class="plm-froget" @click="onClickForget">忘记密码</a>
            </div>
          </div></TabPane
        >
      </Tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      disabled: false,
      //获取验证码文本
      text: "获取验证码",
    };
  },
  methods: {
    //跳转注册页面
    onClickReg() {
      // this.$router.push({ path: "/signin/register/register" });
      this.$router.push({ name: "signin-register" });
    },
    //跳转忘记密码页面
    onClickForget() {
      this.$router.push({ name: "signin-forget" });
    },
    //获取验证码
    onGetCode() {
      //发送请求
      //计时60秒
      if (this.disabled) return;
      this.disabled = true;
      let n = 10;
      const run = setInterval(() => {
        n = n - 1;
        if (n < 0) {
          clearInterval(run);
        }
        this.text = "剩余 " + n + "s";
        if (this.text < "剩余 " + 0 + "s") {
          this.disabled = false;
          this.text = "重新获取";
        }
      }, 1000);
    },
  },
  mounted() {},
  computed: {},
  watch: {},
  props: {},
};
</script>

