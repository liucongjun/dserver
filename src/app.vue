<style lang="scss">
html{
  // @include userSelectNone;
  moz-user-select: -moz-none;
  -moz-user-select: none;
  -o-user-select:none;
  -khtml-user-select:none;
  -webkit-user-select:none;
  -ms-user-select:none;
  user-select:none;
}
.userSelectText{
  moz-user-select: -moz-text!important;
  -moz-user-select: text!important;
  -o-user-select:text!important;
  -khtml-user-select:text!important;
  -webkit-user-select:text!important;
  -ms-user-select:text!important;
  user-select:text!important;
}
body,
html {
    height: 100%;
    width: 100%;
   font-family: "微软雅黑";
   background: rgb(244, 245, 247);
  min-width: 1000px;
}
.ivu-notice{
  top: 90px!important;
  overflow: hidden;
  height:auto!important;
}
.vertical-center-modal{
    display: flex;
    align-items: center;
    justify-content: center;

    .ivu-modal{
        top: 0;
    }
    &.ivu-modal-wrap{
      z-index: 1000000;
    }
}
.mainPage{
  width:100%;
  height:100%;
  min-width: 1000px;
}
.ivu-message {
    z-index: 10000000000!important;
}
</style>
<template>
<div class="mainPage">
  <router-view></router-view>
</div>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  mounted() {

  },
  beforeDestroy() {

  },
  methods: {

  }
};
</script>
