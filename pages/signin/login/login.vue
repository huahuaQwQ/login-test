<style scoped lang="less">
@import "./login.less";
</style>
<template>
  <div class="root">
    <div class="plm-img">
      <div class="plm-logo">logo</div>
      <div class="plm-loginBox">
        <div class="plm-usernameBox">
          <div>账号</div>
          <div>
            <Input type="text" placeholder="请输入邮箱账号"></Input>
          </div>
        </div>

        <div class="plm-passwordBox">
          <div>密码</div>
          <div>
            <Input type="password" placeholder="请输入密码"></Input>
          </div>
        </div>

        <div>
          <Button type="primary">登录</Button>
        </div>

        <div>
          <div>
            还没有账号？
            <span>立即注册</span>
          </div>
          <div>忘记密码</div>
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
  mounted() {},
  methods: {},
  computed: {},
  watch: {},
  props: {},
};
</script>

