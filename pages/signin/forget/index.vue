<style scoped lang="less">
@import "./index.less";
</style>
<template>
  <div class="root">
    <div class="plm-img"></div>
    <div class="plm-title">
      <div>忘记密码</div>
    </div>
    <div class="plm-forgetBox">
      <div class="plm-usernameBox">
        <div class="plm-label">账号</div>
        <div>
          <Input class="plm-input" type="text" placeholder="请输入账号">
          </Input>
        </div>
      </div>

      <div class="plm-emailBox">
        <div class="plm-label">邮箱账号</div>
        <div style="display: flex; flex-direction: row; width: 280px">
          <Input class="" placeholder="请输入邮箱账号"></Input>
          <Button type="primary">获取验证码</Button>
        </div>
      </div>

      <div class="plm-codeBox">
        <div class="plm-label">邮箱验证码</div>
        <div>
          <Input class="plm-input" placeholder="请输入邮箱验证码"></Input>
        </div>
      </div>

      <div class="plm-buttonBox">
        <Button style="width: 280px" type="primary" @click="onClickSkipReset"
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
    onClickSkipReset() {
      this.$router.push({ name: "signin-reset" });
    },
  },
  computed: {},
  watch: {},
  props: {},
};
</script>

