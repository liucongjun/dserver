<!-- 换个方法做 -->

<style lang="scss">
    @font-face {
        font-family: "Ionicons";
        src: url('../../iconfont/mapIconfont.eot?t=1502947190921');
        /* IE9*/
        src: url('../../iconfont/mapIconfont.eot?t=1502947190921#iefix') format('embedded-opentype'),
            /* IE6-IE8 */
        url('../../iconfont/mapIconfont.woff?t=1502947190921') format('woff'),
            /* chrome, firefox */
        url('../../iconfont/mapIconfont.ttf?t=1502947190921') format('truetype'),
            /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
        url('../../iconfont/mapIconfont.svg?t=1502947190921#iconfont') format('svg');
        /* iOS 4.1- */
    }

    .icon-dingwei:before {
        content: "\e62f";
    }

    .icon-imsi:before {
        content: "\e702";
    }

    .icon-tanhao:before {
        content: "\e67f";
    }

    .icon-device:before {
        content: "\e602";
    }

    .icon-dianhua:before {
        content: "\e60";
    }

    .icon-guanbi:before {
        content: "\e635";
    }

    .icon-user:before {
        content: "\e838";
    }

    .icon-imsi-c:before {
        content: "\e839";
    }

    .map {

        width: 100%;
        #map {
            width: 90%;
            overflow: hidden;
            margin: 20px auto 0;
            font-family: "微软雅黑";
            background: #fff;
        }

    }

    @keyframes insetShadow {
        0% {
            opacity: 0;
        }
        25% {
            opacity: 0.21;
        }
        50% {
            opacity: 0.48;
        }
        75% {
            opacity: 0.7;
        }
        100% {
            opacity: 0.8;
        }
    }

    .ivu-tabs {
        .ivu-tabs-bar {
            .ivu-tabs-nav {
                width: 100%;
            }
        }
    }

    #peitb thead {
        color: #fff;
        background: #000;
        font-size: 1.1em;
    }

    .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {
        width: calc(50% - 2px);
        height: 50px !important;
        line-height: 40px !important;
        text-align: center;
        font-size: 18px;
        padding: 20px;
    }

    .ivu-tabs-nav-container {
        height: 50px !important;
        line-height: 40px !important;
        font-size: 13px;
    }

    .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active {
        border-top: 2px solid #649ac9 !important;
    }

    .ivu-checkbox-wrapper-checked > span {
        color: #2d8cf0;
        background: #fff;
    }

    .projectname,
    .notic#peitb {
        margin-bottom: 70px;
    }

    /*商品列表 和 结账 上边距*/

    .notic#peitb,
    .settle {
        border-top: 2px solid crimson;
    }

    .notice {
        border: 2px solid #FFF;
    }

    /*商品数量设置*/

    .inputNum {
        display: inline-block !important;
        width: 50px !important;
    }

    /*单价字体颜色*/

    .zongprice {
        color: #ff2a00;
    }

    /*结账 的字体大小*/

    .accounts {
        font-size: 1.6em;
    }

    /*结账模块的外边距底部*/

    .settle {
        margin-bottom: 70px;
    }

    /*结账按钮外边距*/

    .btnaccounts {
        margin-bottom: 1em;
    }

    #peitb tbody td {
        width: 12.5%;
        text-align: center;
        &:nth-child(3){
            width: 8%;
        }
        &:nth-child(4),&:nth-child(5),&:nth-child(6){
            width: 10.5%;
        }
        &:nth-child(1),&:nth-child(2),&:nth-child(8) {
            width: 16%;
        }

    }
    #peitb tbody td a {
        display: inline-block;
        margin-bottom: 5px;
        white-space: nowrap;
        color: #000;
        text-decoration: none;
    }

    #peitb tbody a.active {
        border: 1px solid #3aa5fc;
        background: #e0fdff;
        color: #84abd1;
        &:after {
            content: url(http://ds.cstor.cn/img/choosen1.png);
            position: relative;
            bottom: -5px;
        }
    }

</style>
<template lang="html">
    <div class="map">

        <div id="map">
            <Tabs type="card">
                <TabPane label="快速配置">
                    <table id="peitb" class="table table-bordered">
                        <thead>
                        <tr class="text-center">
                            <td v-for="items in hData" :key="items.id">{{items.name}}</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td class="text-center" v-for="(items,index) in hData" :key="items.id">
                                <ul :id=index v-if="index<4"  :key="items.id">
                                    <li v-for="item in items.configurations"
                                        :key="item.id">
                                        <p><a href="#" :id="item.id" @click="checkChange(item,$event)">
                                            {{item.name}}</a></p>
                                    </li>

                                </ul>
                                <ul :id=index v-else-if="index<7">
                                    <li v-for="item in items.configurations"
                                        :key="item.id">
                                        <p><a href="#" :id="item.id" @click="checkChange2(item,$event)">
                                            {{item.name}}</a></p>
                                    </li>

                                </ul>
                                <ul :id=index v-else>
                                    <li v-for="(item,index) in items.configurations"
                                        :key="item.id">
                                        <p><a href="#" :index=index :id="item.id" @click="checkChange3(item,$event)">
                                            {{item.name}}</a></p>
                                    </li>

                                </ul>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    {{cheekarr}}
                    <table class="table table-hover table-bordered">
                        <thead>
                        <tr>
                            <th>
                                编号
                            </th>
                            <th>
                                商品信息
                            </th>
                            <th>
                                商品单价
                            </th>
                            <th>
                                商品数量
                            </th>
                            <th>
                                总金额
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item,index) in cheekarr">
                            <td>
                                {{index+1}}
                            </td>
                            <td>
                                <span>
                            <strong>{{item.name}}【{{ item.pid | formatPid}}】</strong>
                        </span>
                            </td>
                            <td>
                                {{item.type}}
                            </td>
                            <td>
                                <InputNumber v-model="item.num" :min="1" size="large"
                                             @on-change="numschange"></InputNumber>
                            </td>
                            <td class="zongprice">
                                {{item.type*item.num}}
                            </td>

                        </tr>
                        </tbody>
                    </table>
                    <!--结账模块-->
                    <Form ref="formInline" label-position="right" :label-width="120" :model="formInline"
                          :rules="ruleInline" inline v-show="formshow">
                        <FormItem label="姓名" prop="submitterName">
                            <Input type="text" v-model="formInline.submitterName" placeholder="请输入你的姓名">
                            <Icon type="person" slot="prepend"></Icon>
                            </Input>
                        </FormItem>
                        <FormItem label="单位" prop="submitterCompa">
                            <Input type="text" v-model="formInline.submitterCompa" placeholder="请输入你的单位">
                            <Icon type="android-pin" slot="prepend"></Icon>
                            </Input>
                        </FormItem>
                        <FormItem label="手机号码" prop="submitterTel">
                            <Input type="text" :maxlength="11" v-model="formInline.submitterTel"
                                   placeholder="请输入你的手机号码">
                            <Icon type="android-call" slot="prepend"></Icon>
                            </Input>
                        </FormItem>
                        <FormItem>
                            <Button size="large" type="primary" @click="handleSubmit('formInline')">提交此选配单</Button>
                        </FormItem>
                    </Form>
                    <div class="row clearfix settle text-right">

                        <div class="col-sm-12">

                            <Button type="primary" size="large" v-show="!formshow" @click="formshow = true">选择此配置单
                            </Button>
                            <span class="accounts">合计：</span>
                            <Button type="error" size="large"> {{total_price|formatMoney}}</Button>
                        </div>
                    </div>

                </TabPane>
            </Tabs>

        </div>
        <Modal v-model="modal1"
               title="信息"
        >
            <div style="text-align:center;font-size: 16px;">
                <p style="">
                    <Icon type="checkmark-circled" :size="20" color="green"></Icon>
                    提交成功
                </p>
                <p>你也可以联系我们，对你的配置单作详细的解答</p>
                <h3 style="color:#43a6f9;margin-bottom:40px;">400 8855360</h3>
                <p><img src="http://ds.cstor.cn/img/pdf.png" height="50" width="40"></p>

                <Button type="primary" size="large" id="down" href="#">下载你的配置单</Button>
            </div>
        </Modal>
    </div>

</template>

<script>
    import Qs from 'qs'

    export default {
        name: 'map',
        data() {
            return {
                hData: [],//初始所有
                chosenarr: {},//所有二级
                idarr: [],//被选中的id
                cheekarr: [],//被选中的
                total_price: 0,
                formshow: false,
                modal1: false,
                formInline: {
                    submitterName: '',
                    submitterTel: '',
                    submitterCompa: ''
                },
                ruleInline: {
                    submitterName: [
                        {required: true, message: '请输入你的名字', trigger: 'blur'}
                    ],
                    submitterCompa: [
                        {required: true, message: '请输入你的单位', trigger: 'blur'}
                    ],
                    submitterTel: [
                        {required: true, message: '请输入你的手机号码', trigger: 'blur'},
                        {
                            validator(rule, value, callback, source, options) {
                                var errors = [];
                                if (!/^1[3|5|7|8]{1}[0-9]{9}$/.test(value)) {

                                    callback('请输入正确的手机号码....');
                                }
                                callback(errors);
                            }
                        }
                    ]
                }
            }
        },

        watch: {},
        methods: {
            init(data) {
                this.hData = data;
                var vm = this;
                let length = 0
                data.forEach(function (val, index, arr) {
                    val.configurations.forEach(function (val2) {
                        vm.chosenarr[val2.id] = val2;
                    })

                });
            },
            checkChange(item, e) { //单选
                this.cheekarr = [];
                if (!$(e.srcElement).hasClass('active')) {
                    $(e.srcElement).parents('ul').find('a').removeClass('active');
                    $(e.srcElement).addClass('active');
                    this.cheekarr.push(this.chosenarr[e.srcElement.id])
                } else {
                    $(e.srcElement).removeClass('active');
                    // this.cheekarr.pop(this.chosenarr[e.srcElement.id])
                };

            },
            checkChange2(item, e) { //多选
                this.cheekarr = [];

                if (!$(e.srcElement).hasClass('active')) {
                    $(e.srcElement).parents('ul').find('a').removeClass('active');
                    $(e.srcElement).addClass('active');
                    this.cheekarr.push(this.chosenarr[e.srcElement.id])
                } else {
                    $(e.srcElement).removeClass('active');
                    // this.cheekarr.pop(this.chosenarr[e.srcElement.id])
                };

            },
            checkChange3(item, e) { //单多选
                this.cheekarr = [];
                var ind=e.srcElement.getAttribute("index");
                if(ind<3){
                    if (!$(e.srcElement).hasClass('active')) {
                        $(e.srcElement).parents('ul').find('a:lt(3)').removeClass('active');
                        $(e.srcElement).toggleClass('active');
                        this.cheekarr.push(this.chosenarr[e.srcElement.id])
                    } else {
                        $(e.srcElement).removeClass('active');
                        // this.cheekarr.pop(this.chosenarr[e.srcElement.id])
                    };
                }else {
                    if (!$(e.srcElement).hasClass('active')) {
                        $(e.srcElement).parents('ul').find('a:lt(3)').removeClass('active');
                        $(e.srcElement).toggleClass('active');
                        this.cheekarr.push(this.chosenarr[e.srcElement.id])
                    } else {
                        $(e.srcElement).removeClass('active');
                        // this.cheekarr.pop(this.chosenarr[e.srcElement.id])
                    };
                }
            },
            checkprefour() {
                var pidarr = [];
                this.cheekarr.forEach((item) => {
                    pidarr.push(item.pid)
                });
                console.log(pidarr);
                if (!pidarr.includes(1)) {
                    this.$Message.warning({
                        content: '你还没有选择GPU',
                        duration: 3,
                        top: 50,
                        closable: true
                    });
                } else if (!pidarr.includes(2)) {
                    this.$Message.warning({
                        content: '你还没有选择CPU',
                        duration: 3,
                        top: 50,
                        closable: true
                    });
                } else if (!pidarr.includes(3)) {
                    this.$Message.warning({
                        content: '你还没有选择内存',
                        duration: 3,
                        top: 50,
                        closable: true
                    });
                } else if (!pidarr.includes(4)) {
                    this.$Message.warning({
                        content: '你还没有选择系统盘',
                        duration: 3,
                        top: 50,
                        closable: true
                    });
                }
            },
            numschange() {
                this.totalPrice;
            },
            //添加clss
            addClass(obj, cls) {
                let obj_class = obj.className; //获取 class 内容.
                let blank = (obj_class != '') ? ' ' : ''; //判断获取到的 class 是否为空, 如果不为空在前面加个'空格'.
                let added = obj_class + blank + cls; //组合原来的 class 和需要添加的 class.
                let classArr = added.split(' ');
                //class去重 不重复添加    解决：多个报警点切换  class添加多个  会出现报警样式不变的情况bug   ps:或者更改移除class 查找有没有多个  全部移除
                let newClassArr = [];
                for (let i = 0; i < classArr.length; i++) {
                    if (newClassArr.indexOf(classArr[i]) == -1) {
                        newClassArr.push(classArr[i])
                    }
                }
                obj.className = newClassArr.join(' '); //替换原来的 class.
            },
            //移除class
            removeClass(obj, cls) {
                let obj_class = ' ' + obj.className + ' '; //获取 class 内容, 并在首尾各加一个空格. ex) 'abc    bcd' -> ' abc    bcd '
                obj_class = obj_class.replace(/(\s+)/gi, ' ') //将多余的空字符替换成一个空格. ex) ' abc    bcd ' -> ' abc bcd '
                let removed = obj_class.replace(' ' + cls + ' ', ' '); //在原来的 class 替换掉首尾加了空格的 class. ex) ' abc bcd ' -> 'bcd '
                removed = removed.replace(/(^\s+)|(\s+$)/g, ''); //去掉首尾空格. ex) 'bcd ' -> 'bcd'
                obj.className = removed; //替换原来的 class.
            },
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.checkprefour();
                        var reqData = {
                            submitterName: this.formInline.submitterName,
                            submitterTel: this.formInline.submitterTel,
                            submitterCompa: this.formInline.submitterTel,
                        };
                        // this.axios({
                        //     headers: {
                        //         // 'token': JSON.parse(localStorage.getItem('userMes')).token
                        //     },
                        //     method: 'post',
                        //     url: 'order/saveOrder',
                        //     data: Qs.stringify(reqData)
                        // }).then(res => {
                        //     let data = res.data
                        //     if (data.resultFlag) {
                        //         this.$Message.info('成功！！');
                        //
                        //     } else {
                        //         this.$Message.error('失败！！' + data.message);
                        //     }
                        // }).catch((e) => {
                        //     this.$Notice.error({
                        //         title: '错误',
                        //         desc: '提交服务出错',
                        //     });
                        // })
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            }
        },
        computed: {
            //结账 总金额的实时计算
            totalPrice: function () {
                //IE浏览器 可能不支持箭头函数把 item=>改成function(item)就好。再加上 _this=this。
                this.total_price = 0;
                this.cheekarr.forEach(item => {
                    this.total_price += item.type * item.num;

                })
            },
        }
        ,
        mounted() {
        }
        ,
        filters: {
            formatMoney: function (value) {
                return "￥" + value.toFixed(2);
            }
            ,
            formatPid: function (value) {
                switch (value) {
                    case 1:
                        return 'GPU';
                        break;
                    case 2:
                        return 'CPU';
                        break;
                    case 3:
                        return '内存';
                        break;
                    case 4:
                        return '系统盘';
                        break;
                    case 35:
                        return '数据盘';
                        break;
                    case 5:
                        return '准系统';
                        break;
                    case 6:
                        return '深度学习框架';
                        break;
                    case 7:
                        return '样本数据';
                        break;
                }
            }

        }
        ,
        created() {
            //表格数据
            new Promise((resolve) => {
                this.axios.get('configuration/queryByType', {
                    params: {}
                })
                    .then(res => {
                        let data = res.data
                        if (data.resultFlag) {
                            resolve(data.data)
                        } else {
                            this.$Notice.error({
                                title: '错误',
                                desc: '获取数据时出错',
                            });
                        }
                    }).catch((e) => {
                    this.$Notice.error({
                        title: '错误',
                        desc: '获取数据时服务出错',
                    });
                })
            }).then((data) => {
                this.init(data)
            })
        }
    }
</script>
