<style scoped lang="less">
@import "./index.less";
</style>
<template>
  <!-- 修改密码 -->

  <div class="root">
    <div class="plm-img"></div>
    <div class="plm-title">
      <div style="font-size: 22px">修改密码</div>
    </div>
    <div class="plm-forgetBox">
      <div class="plm-usernameBox">
        <div class="plm-label">原密码</div>
        <div>
          <Input class="plm-input" type="text" placeholder="请输入账原密码">
          </Input>
        </div>
      </div>

      <div class="plm-passwordBox">
        <div class="plm-label">重置密码</div>
        <div>
          <Input
            class="plm-input"
            type="password"
            placeholder="请输入重置密码"
          ></Input>
        </div>
      </div>

      <div class="plm-buttonBox">
        <Button style="width: 280px" type="primary" @click="onClickRevise"
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
  methods: {
    //确认成功修改密码后，跳转到首页
    onClickRevise() {
      this.$router.push({ path: "/" });
    },
  },
  mounted() {},
  computed: {},
  watch: {},
  props: {},
};
</script>

<style scoped lang="less">
</style>