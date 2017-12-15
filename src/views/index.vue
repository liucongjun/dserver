<style lang="scss">
    .index {
        height: 100%;
        font-family: "微软雅黑";
        background: rgb(244, 245, 247);
        min-width: 1000px;
        .mainHeader {
            position: fixed;
            top: 0;
            z-index: 100000;
            width: 100%;
            color: #fff;
            background: #30383e;
            min-width: 1000px;
            &.ivu-row {
                .ivu-col {
                    height: 60px !important;
                }
            }
            .mainLogo {
                position: relative;
                height: 60px;
                line-height: 60px;
                font-size: 18px;
                color: #fff;
                overflow: hidden;
                img {
                    vertical-align: center!important;
                }
                span{
                    display: inline-block;
                    height: 60px;
                    line-height: 60px;
                }
            }
            .mainNav {
                color: #fff;
                background: #30383e;
                .ivu-menu-item {
                    &.ivu-menu-item-active.ivu-menu-item-selected {
                          background: #30383e;
                      }
                    height: 100%;
                    // margin:0 20px;
                    &:hover {
                        background: #30383e;
                        text-decoration: none;
                    }
                    a {
                        display: inline-block;
                        position: relative;
                        top: 0;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        margin: auto;
                        padding: 0 20px;
                        color: #fff;
                        text-align: center;
                        &:hover {
                            color: #2d8cf0;
                            text-decoration: none;
                        }
                        &.router-link-exact-active {
                            background: #fff;
                            color: #000;
                        }
                    }

                }
            }
            .mainUser {
                height: 100%;
                float: right;
                margin-right: 30px;
                .ivu-dropdown-rel {
                    height: 100%;
                    & > i {
                        display: inline-block;
                        position: relative;
                        float: left;
                        width: 60px;
                        height: 100%;
                        img {
                            position: absolute;
                            top: 0;
                            bottom: 0;
                            margin: auto;
                        }
                    }

                    a {
                        display: inline-block;
                        position: relative;
                        top: 0;
                        height: 100%;
                        line-height: 60px;
                        color: #fff;
                        font-size: 18px;
                        text-decoration: none;
                        img {
                            position: absolute;
                            display: inline-block;
                            top: 0;
                            bottom: 0;
                            margin: auto;
                        }
                    }
                }
            }
        }

        .mainContent {
            position: absolute;
            top: 60px;
            bottom: 0;
            width: 100%;
            min-width: 1000px;
        }
    }
</style>
<template>
    <div class="index">
        <Row class="mainHeader">
            <Col :sm="{ span:7}" :md="{ span:6}" :lg="{ span:6}">
            <div class="mainLogo">
                <img src="http://ds.cstor.cn/img/head-title.png" alt="">
                <span>dServer人工智能服务器</span>
            </div>
            </Col>
            <Col :sm="{ span:12}" :md="{ span:12}" :lg="{ span:11}">
            <Menu class="mainNav" mode="horizontal" theme="primary" active-name="1">
                <Menu-item name="1">
                    <router-link to="/dServer" active-class="router-link-exact-active">人工智能服务器 </router-link>
                </Menu-item>
                <Menu-item name="2">
                    <a href="http://www.cstor.cn/proTextdetail_11007.html">大数据实验一体机</a>
                </Menu-item>
                <Menu-item name="3">
                    <a href="http://58.213.47.166:8998">人工智能实验平台</a>
                </Menu-item>
            </Menu>
            </Col>
            <Col :sm="{ span:5}" :md="{ span:6}" :lg="{ span:7}">
            <Menu class="mainNav" mode="horizontal" theme="primary" active-name="">
                <Menu-item name="1" class="pull-right">
                    <a href="http://www.cstor.cn/singlepage_11.html">关于我们</a>

                </Menu-item>
                <Menu-item name="2" class="pull-right">
                    <a href="http://www.cstor.cn/contact_3500.html">联系我们</a>
                </Menu-item>

            </Menu>
            </Dropdown>
            </Col>
        </Row>
        <div class="mainContent">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                userMes: null
            }
        },
        mounted() {
            // console.log(this.userMes)
        },
        methods: {
            // signOut() {
            //   localStorage.removeItem('userMes');
            // }
        },
        created() {
            // this.userMes = localStorage.getItem('userMes') ? JSON.parse(localStorage.getItem('userMes')) : {}
        }
    };
</script>
