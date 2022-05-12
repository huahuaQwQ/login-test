<template>
  <div class="container">
    <div class="plm-img"></div>
    <div class="header">
      <img
        @click="onClickLogo"
        src="~/assets/images/logo.mini.white.png"
        class="logo"
      />
      <span
        class="menuitem"
        @click="onClickToRoute('organization')"
        style="margin-left: 30px"
        >企业管理</span
      >
      <span class="menuitem" @click="onClickToRoute('factory')"
        >包材厂管理</span
      >
      <span class="menuitem" @click="onClickToRoute('order')">订单管理</span>
      <span class="menuitem" @click="onClickToRoute('authorized')"
        >应用授权</span
      >
      <Dropdown @on-click="onClickToRoute">
        <span class="menuitem">.....<Icon type="ios-arrow-down"></Icon></span>
        <DropdownMenu slot="list">
          <DropdownItem name="user">用户管理</DropdownItem>
          <DropdownItem name="setting">系统设置</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <span style="flex: 1" />

      <div
        @click="onClickScreenfull"
        style="
          width: 40px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          margin-right: 10px;
        "
      >
        <Icon
          :type="isFullscreen ? 'md-contract' : 'md-expand'"
          size="20"
          style="color: #fff; margin-top: -2px"
        />
      </div>
      <Poptip placement="bottom-start" width="400">
        <Badge dot>
          <Icon
            type="md-notifications-outline"
            size="21"
            color="#fff"
            style="cursor: pointer"
          ></Icon>
        </Badge>
      </Poptip>

      <div class="line" />
      <!-- 登录成功 -->
      <Dropdown trigger="click" @on-click="onClickSkip" v-if="loginSuccess">
        <div
          style="
            cursor: pointer;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
          "
        >
          <Avatar size="small" :src="user.avatar" />
          <Icon type="md-arrow-dropdown" size="18" color="#fff" />
        </div>
        <DropdownMenu slot="list">
          <DropdownItem name="basic">账号设置</DropdownItem>
          <DropdownItem name="signin-revise">修改密码</DropdownItem>
          <DropdownItem divided style="color: red" name="logout"
            >退出登录</DropdownItem
          >
        </DropdownMenu>
      </Dropdown>
      <!-- 登录初始 -->
      <div
        v-else
        style="
          width: 36px;
          height: 36px;
          border-radius: 50%;
          color: var(--brand_blue);
          background: #f6f6f6;
          text-align: center;
          letter-spacing: 0;
          font-size: 14px;
          line-height: 36px;
        "
        @mouseenter="onMouseLogin"
      >
        <Poptip trigger="hover" content="">
          <span>登录</span>
          <Button type="primary" slot="content" @click="onClickLogin"
            >欢迎登录顶讯</Button
          >
        </Poptip>
      </div>
    </div>
    <nuxt
      style="
        position: absolute;
        margin: 62px 10% 0 10%;
        width: 80%;
        height: calc(100% - 62px);
      "
    />
  </div>
</template>

<script>
import screenfull from "screenfull";
export default {
  data() {
    return {
      //登录成功
      loginSuccess: false,
      header_show: false,
      isFullscreen: false,
      user: {
        avatar:
          "https://img2.baidu.com/it/u=604179611,2350467333&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400",
      },
    };
  },
  methods: {
    //点击登录
    onClickLogin() {
      this.$router.push({ name: "signin-login" });
    },
    //登录点击修改密码跳转
    onClickSkip(name) {
      console.log(name);
      this.$router.push({ name });
    },
    //鼠标进入登录小框
    onMouseLogin() {},
    onHeaderClick: function (e) {
      if (e == "logout")
        this.logout().then(() =>
          this.$router.push({ name: this.$config.page_signin })
        );
      else if (
        e === "basic" &&
        this.$route.fullPath === "/user/setting?tab=basic"
      )
        return;
      else if (
        e === "reset-pass" &&
        this.$route.fullPath === "/user/setting?tab=reset-pass"
      )
        return;
      else this.$router.push({ name: "user-setting", query: { tab: e } });
    },
    //全屏功能
    onClickScreenfull: function () {
      if (!screenfull.isEnabled) {
        this.$Message.error("您的浏览器暂时无法全屏");
        return false;
      }
      screenfull.toggle();
    },
    //跳转封装函数
    onClickToRoute: function (route) {
      if (route === this.$route.name) return;
      this.$router.push({ name: route });
    },
    onClickLogo: function () {
      if (this.$route.name === this.$config.page_home) return;
      this.$router.push({ name: this.$config.page_home });
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100vh;
  .plm-img {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    // min-width: 1000px;
    z-index: -10;
    zoom: 1;
    // background-image: url('@/static/images/2.png');
    background: url("../static/images/2.png") no-repeat;
    background-size: cover;
    background-position: 10% 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    filter: blur(1px);
    opacity: 0.75;
  }
}

.header {
  width: 100%;
  height: 62px;
  background: #23292f;
  border-bottom: 1px solid #f1f1f1;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 10% 0 10%;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 100;
  .line {
    width: 1px;
    height: 20px;
    background: #505050;
    margin-right: 20px;
    margin-left: 20px;
  }
  .logo {
    height: 26px;
    cursor: pointer;
    border-radius: 3px;
  }
  .search {
    width: 220px;
    margin-left: 15px;
  }
  .menuitem {
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    margin-left: 20px;
    cursor: pointer;
  }
}
</style>
