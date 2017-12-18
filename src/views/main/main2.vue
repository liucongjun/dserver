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
            width: 1200px !important;
            overflow: hidden;
            margin: 20px auto 0;
            font-family: "微软雅黑";
            background: #fff;
            min-width: 1000px;
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

    #peitb thead, #tips-list1 thead, #tips-list2 thead, #modalsumit-md thead {
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
        margin-right: 50px;
    }

    /*结账 的字体大小*/

    .accounts {
        font-size: 1.6em;
    }

    /*结账按钮外边距*/

    .btnaccounts {
        margin-bottom: 1em;
    }

    #peitb tbody td {
        text-align: center;
        margin: 0;
        &:nth-child(3) {
            width: 7%;
        }
        &:nth-child(6) {
            width: 11.5%;
        }
        &:nth-child(8), &:nth-child(4) {
            width: 10.5%;
        }
        &:nth-child(1), &:nth-child(7) {
            width: 14.5%;
        }
        &:nth-child(5) {
            width: 15%;
        }
        &:nth-child(2) {
            width: 16.5%;
        }

    }

    #peitb tbody td a {
        display: inline-block;
        margin-bottom: 5px;
        white-space: nowrap;
        color: #000;
        font-size: 15px;
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

    .gdimg {
        height: 60px;
        line-height: 60px;
        img {
            display: inline-block;
            vertical-align: middle;
        }
    }

    #quick > tr {
        height: 150px;
        line-height: 150px;
        > td:first-child {
            text-align: center;
            width: 108px;
            line-height: 24px;
            color: #666;
            font-size: 14px;
        }
    }

    .ivu-radio-group-button .ivu-radio-wrapper .ivu-radio-group-item {
        width: 200px;
    }

    #quicktab1 .ivu-tabs-tab {
        border: 1px solid #dddee1;
        width: 150px;
        height: 50px;
        text-align: center;
        line-height: 31px;
        .ivu-tabs-tab-active {
            border: 1px solid #2d8cf0 !important;
        }
    }

    #quicktab2 .ivu-tabs-tab {
        border: 1px solid #dddee1;
        width: 150px;
        height: 50px;
        text-align: center;
        line-height: 31px;
        .ivu-tabs-tab-active {
            border: 1px solid #2d8cf0 !important;
        }
    }
</style>
<template lang="html">
    <div class="map">

        <div id="map">
            <Tabs id="headtab" type="card" @on-click="tabsclick">
                <TabPane label="快速配置">
                    <table id="quick" class="table table-bordered" style="padding-top: 50px;">
                        <tr>
                            <td>类型</td>
                            <td>
                                <Tabs id="quicktab1" name="经济型" v-model="quicktypebutton1">
                                    <TabPane label="经济型" name="经济型">
                                        <table id="tips-list1" class="table table-bordered text-center">
                                            <thead>
                                            <tr class="text-center">

                                                <th>GPU</th>
                                                <th>CPU</th>
                                                <th>内存</th>
                                                <th>系统盘</th>
                                                <th>准系统</th>
                                                <th>深度学习框架</th>
                                                <th>样本数据</th>

                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr id="tips-list1-bd">
                                                <td class="list">
                                                    <p class="gdimg">
                                                        <img class="img-responsive"
                                                             src="http://ds.cstor.cn/img/GPU_52.png" alt=""></p>
                                                    <p class="info gdimg1 info1">Nvidia Titan X</p></td>
                                                <td class="list"><p class="gdimg"><img class="img-responsive"
                                                                                       src="http://ds.cstor.cn/img/CPU_61.png"
                                                                                       alt="">
                                                </p>
                                                    <p class="info info2">Intel Dual E5-2620 v4</p></td>
                                                <td class="list"><p class="gdimg"><img width="80"
                                                                                       class="img-responsive"
                                                                                       src="http://ds.cstor.cn/img/memory.png"
                                                                                       alt="">
                                                </p>
                                                    <p class="info info3">64G</p></td>
                                                <td class="list"><p class="gdimg"><img class="img-responsive"
                                                                                       src="http://ds.cstor.cn/img/storage.png"
                                                                                       alt="">
                                                </p>
                                                    <p class="info info4">SSD 150G</p></td>

                                                <td class="list"><p class="gdimg"><img class="img-responsive"
                                                                                       src="http://ds.cstor.cn/img/xitong-img.png"
                                                                                       alt=""></p>
                                                    <p class="info info6">7046GR-TR</p></td>
                                                <td class="list"><p class="gdimg"><img class="img-responsive"
                                                                                       src="http://ds.cstor.cn/img/application1.png"
                                                                                       alt=""></p>
                                                    <p class="info info7"><span>Caffe</span></p></td>

                                                <td class="list"><p class="gdimg"><img class="img-responsive"
                                                                                       src="http://ds.cstor.cn/img/simpledata1.png"
                                                                                       alt="">
                                                </p>
                                                    <p class="info info8"><span>500万车牌图片</span></p>
                                                </td>

                                            </tr>

                                            </tbody>
                                        </table>
                                    </TabPane>
                                    <TabPane label="标准型" name="标准型">
                                        <table id="tips-list2" class="table table-bordered text-center">
                                            <thead>
                                            <tr class="text-center">
                                                <th>GPU</th>
                                                <th>CPU</th>
                                                <th>内存</th>
                                                <th>系统盘</th>
                                                <th>准系统</th>
                                                <th>深度学习框架</th>
                                                <th>样本数据</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr id="tips-list2-bd">
                                                <td class="list">
                                                    <p class="gdimg">
                                                        <img class="img-responsive"
                                                             src="http://ds.cstor.cn/img/GPU_58.png" alt=""></p>
                                                    <p class="info gdimg1 info1">Nvida Tesla P100</p></td>
                                                <td class="list"><p class="gdimg"><img class="img-responsive"
                                                                                       src="http://ds.cstor.cn/img/CPU_61.png"
                                                                                       alt="">
                                                </p>
                                                    <p class="info info2">Intel Dual E5-2620 v4</p></td>
                                                <td class="list"><p class="gdimg"><img width="80"
                                                                                       class="img-responsive"
                                                                                       src="http://ds.cstor.cn/img/memory.png"
                                                                                       alt="">
                                                </p>
                                                    <p class="info info3">128G</p></td>
                                                <td class="list"><p class="gdimg"><img class="img-responsive"
                                                                                       src="http://ds.cstor.cn/img/storage.png"
                                                                                       alt="">
                                                </p>
                                                    <p class="info info4">SSD 240G</p></td>

                                                <td class="list"><p class="gdimg"><img class="img-responsive"
                                                                                       src="http://ds.cstor.cn/img/xitong-img.png"
                                                                                       alt=""></p>
                                                    <p class="info info6">7046GR-TR</p></td>
                                                <td class="list"><p class="gdimg"><img class="img-responsive"
                                                                                       src="http://ds.cstor.cn/img/application1.png"
                                                                                       alt=""></p>
                                                    <p class="info info7"><span>Caffe</span></p></td>

                                                <td class="list"><p class="gdimg"><img class="img-responsive"
                                                                                       src="http://ds.cstor.cn/img/simpledata1.png"
                                                                                       alt="">
                                                </p>
                                                    <p class="info info8"><span>500万车牌图片</span></p>
                                                </td>

                                            </tr>

                                            </tbody>
                                        </table>
                                    </TabPane>

                                </Tabs>
                            </td>
                        </tr>

                        <tr>
                            <td>数据盘</td>
                            <td>
                                <Tabs id="quicktab2" name="SATA 4T" v-model="quicksispan1">
                                    <TabPane label="SATA 4T" name="SATA 4T">

                                    </TabPane>
                                    <TabPane label="SATA 6T" name="SATA 6T">

                                    </TabPane>
                                    <TabPane label="SAS 600G" name="SAS 600G">

                                    </TabPane>
                                    <TabPane label="SAS 1.2T" name="SAS 1.2T">

                                    </TabPane>
                                    <TabPane label="SAS 4T" name="SAS 4T">
                                    </TabPane>
                                </Tabs>

                            </td>
                        </tr>
                        <tr>
                            <td>购买数量</td>
                            <td>
                                <InputNumber :min="1" v-model="quickcounts1" size="large" width="150"></InputNumber>
                                套
                            </td>
                        </tr>
                    </table>

                    <div id="tips">
                        <div class="row clearfix  text-right" style="margin: 30px;">

                            <div class="col-sm-12">
                                <Button type="primary" size="large" v-show="!modalsumit"
                                        @click="modelsumitshow(1)">选择此配置单
                                </Button>
                                <span class="accounts">合计：</span>
                                <Button type="error" size="large"> {{total_price2|formatMoney}}</Button>
                            </div>
                        </div>
                    </div>
                </TabPane>
                <TabPane label="自定义配置">
                    <table id="peitb" class="table table-bordered">
                        <thead>
                        <tr class="text-center">
                            <td v-for="items in hData" :key="items.id">{{items.name}}</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td class="text-center" v-for="(n,indexs) in hData" :key="indexs">
                                <div v-if="indexs<4">
                                    <ul :id=indexs>
                                        <li v-if="item" :key="item.id" v-for="(item,index) in chosenarr">
                                            <p v-if="item.pid==indexs+1"><a href="#" :id="item.id" :index="item.index"
                                                                            @click="checkChange(item,index,$event)">
                                                {{item.name}}</a></p>
                                        </li>
                                    </ul>
                                </div>
                                <div v-if="indexs==7">
                                    <ul :id=indexs>
                                        <li v-if="item" :key="item.id" v-for="(item,index) in chosenarr">
                                            <p v-if="item.pid==35"><a href="#" :id="item.id" :index="item.index"
                                                                      @click="checkChange2(item,index,$event)">
                                                {{item.name}}</a></p>
                                        </li>
                                    </ul>
                                </div>
                                <div v-if="indexs==4||indexs==5">
                                    <ul :id=indexs>
                                        <li v-if="item" :key="item.id" v-for="(item,index) in chosenarr">
                                            <p v-if="item.pid==indexs+1"><a href="#" :id="item.id" :index="item.index"
                                                                            @click="checkChange2(item,index,$event)">
                                                {{item.name}}</a></p>
                                        </li>
                                    </ul>
                                </div>
                                <div v-if="indexs==6">
                                    <ul :id=indexs>
                                        <li v-if="item" :key="item.id" v-for="(item,index) in chosenarr">
                                            <p v-if="item.pid==indexs+1"><a href="#" :id="item.id" :index="item.index"
                                                                            @click="checkChange3(item,index,$event)">
                                                {{item.name}}</a></p>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <table class="table table-hover table-bordered" id="tips-list0">
                        <thead>
                        <tr>
                            <th width="50">
                                编号
                            </th>
                            <th>
                                商品信息
                            </th>
                            <th width="150">
                                商品单价
                            </th>
                            <th width="150">
                                商品数量
                            </th>
                            <th width="350">
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
                                {{item.price | formatMoney}}
                            </td>
                            <td>
                                <InputNumber v-model="item.count" :min="1" size="large"></InputNumber>
                            </td>
                            <td class="zongprice">
                                {{item.price*item.count | formatMoney}}
                            </td>

                        </tr>
                        </tbody>
                    </table>

                    <div class="row clearfix  text-right" style="margin: 30px;">

                        <div class="col-sm-12">
                            <Button type="primary" size="large" v-show="!modalsumit&&this.cheekarr.length>0"
                                    @click="modelsumitshow(0)">选择此配置单
                            </Button>
                            <span class="accounts">合计：</span>
                            <Button type="error" size="large"> {{total_price|formatMoney}}</Button>
                        </div>
                    </div>

                </TabPane>

            </Tabs>

        </div>
        <Modal v-model="modalsumit" ref="modalsumit"
               :title="MesTitle" width="60%">

            <Table v-if="orbtn===0" stripe :columns="columns1" :data="data1"></Table>
            <div v-if="orbtn===1" id="quickbd">
                <table class="table table-hover table-bordered">
                    <thead>
                    <tr>
                        <td>类型</td>
                        <td>数据盘</td>
                        <td>购买数量</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td id="quickbdtype">{{quicktypebutton1}}</td>
                        <td id="quickbdpan">{{quicksispan1}}</td>
                        <td>{{quickcounts1}}套</td>
                    </tr>
                    </tbody>

                </table>
            </div>
            <!--结账模块-->
            <Form ref="formInline" style="margin-top: 15px;" label-position="right" :label-width="80"
                  :model="formInline"
                  :rules="ruleInline" inline>
                <FormItem label="姓名" prop="submitterName">
                    <Input type="text" v-model="formInline.submitterName" placeholder="请输入你的姓名">
                    <Icon type="person" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem label="单位" prop="submitterCompany">
                    <Input type="text" v-model="formInline.submitterCompany" placeholder="请输入你的单位">
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
            <div slot="footer">
            </div>
        </Modal>
        <Modal v-model="modaldown"
               title="联系我们" width="90%">
            <div style="text-align:center;font-size: 16px;">
                <p style="">
                    <Icon type="checkmark-circled" :size="20" color="green"></Icon>
                    提交成功
                </p>
                <p>你也可以联系我们，对你的配置单作详细的解答</p>

                <p><img src="../../img/phone.png" width="100%"></p>
                <p><img src="http://ds.cstor.cn/img/pdf.png" height="50" width="40"></p>

                <Button type="primary" size="large" @click="downpdf">下载你的配置单</Button>
            </div>
            <div slot="footer">
            </div>
        </Modal>

    </div>

</template>

<script>
    import Qs from 'qs'
    import html2canvas from 'html2canvas';
    import Util from '../../libs/util';

    export default {
        name: 'dServer',
        data() {
            return {
                hData: [],//初始所有
                chosenarr: {},//所有二级
                cheekarr: [],//被选中的
                modaldown: false,
                modalsumit: false,
                quicktypebutton1: '经济型',
                quickcounts1: 1,
                quicksispan1: 'SATA 4T',
                MesTitle: '',
                orbtn: '', //自定义还是快速
                formInline: {
                    submitterName: '',
                    submitterTel: '',
                    submitterCompany: ''
                },
                ruleInline: {
                    submitterName: [
                        {required: true, message: '请输入你的名字', trigger: 'blur'}
                    ],
                    submitterCompany: [
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
                },
                columns1: [
                    {
                        title: '序号',
                        type: 'index',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '商品',
                        // {{item.name}}【{{ item.pid | formatPid}}】
                        key: 'name'
                    },
                    {
                        title: '单价',
                        key: 'price'
                    },
                    {
                        title: '数量',
                        key: 'count'
                    },
                    {
                        title: '总价',
                        render: (h, params) => {
                            return "￥" + (params.row.price * params.row.count).toFixed(2)
                        }
                    }
                ],
                data1: [],
                ydata: []
            }
        },

        watch: {},
        methods: {
            init(data) {
                var data = data;
                this.ydata = data;
                this.$store.state.goodsarr = data; //设置state
                var vm = this;
                this.chosenarr = [];
                data.map((item) => {
                    if (item.type == 1) {
                        vm.hData.push(item)
                    }
                });
                data.forEach((item) => {
                    if (item.type == 2) {
                        vm.chosenarr[item.id] = item;
                    }
                });

            },
            idformit(val, data) {
                var id = '';
                data.forEach(value => {
                    if (value.name == val) {
                        return id = value.id
                    }
                })
                return id;

            },
            modelsumitshow(num) {
                this.$refs['formInline'].resetFields();
                if (num == 0) {
                    this.orbtn = 0;
                    var flag = this.checkprefour();
                    if (flag) {
                        this.data1 = this.cheekarr;
                        this.MesTitle = '自定义配置单信息'
                        this.modalsumit = true;
                    }
                } else if (num == 1) {
                    this.orbtn = 1;
                    this.MesTitle = '快速配置单信息'
                    this.modalsumit = true;
                }


            },
            checkChange(item, index, e) { //单选

                if (!$(e.srcElement).hasClass('active')) {
                    $(e.srcElement).parents('ul').find('a').removeClass('active');
                    $(e.srcElement).addClass('active');

                } else {
                    $(e.srcElement).removeClass('active');

                }
                ;
                var vm = this;
                setTimeout(function () {
                    var $a = $('#peitb a.active');
                    vm.cheekarr = [];
                    $a.map(function (index, item) {
                        vm.cheekarr.unshift(vm.chosenarr[$(item).attr('id')])
                    });
                    this.totalPrice;
                });


            },
            checkChange2(item, index, e) { //多选

                if (!$(e.srcElement).hasClass('active')) {
                    $(e.srcElement).toggleClass('active');

                } else {
                    $(e.srcElement).toggleClass('active');

                }
                ;
                var vm = this;
                setTimeout(function () {
                    var $a = $('#peitb a.active');
                    vm.cheekarr = [];
                    $a.map(function (index, item) {
                        vm.cheekarr.unshift(vm.chosenarr[$(item).attr('id')])
                    });


                });


            },
            checkChange3(item, index, e) { //单多选

                var ind = e.srcElement.getAttribute("index");
                console.log(ind);
                if (ind < 3) {
                    if (!$(e.srcElement).hasClass('active')) {
                        $(e.srcElement).parents('ul').find('a:lt(3)').removeClass('active');
                        $(e.srcElement).toggleClass('active');

                    } else {
                        $(e.srcElement).removeClass('active');

                    }
                    ;
                } else {
                    if (!$(e.srcElement).hasClass('active')) {
                        // $(e.srcElement).parents('ul').find('a:lt(2)').removeClass('active');
                        $(e.srcElement).addClass('active');

                    } else {
                        $(e.srcElement).removeClass('active');

                    }
                    ;
                }
                ;
                var vm = this;
                setTimeout(function () {
                    var $a = $('#peitb a.active');
                    vm.cheekarr = [];
                    $a.map(function (index, item) {
                        vm.cheekarr.unshift(vm.chosenarr[$(item).attr('id')])
                    });
                });
            },
            checkprefour() {
                var pidarr = [];
                this.cheekarr.forEach((item) => {
                    pidarr.unshift(item.pid)
                });
                if (!pidarr.includes(1)) {
                    this.$Message.warning({
                        content: '你还没有选择GPU',
                        duration: 3,
                        top: 50,
                        closable: true
                    });
                    return false;
                } else if (!pidarr.includes(2)) {
                    this.$Message.warning({
                        content: '你还没有选择CPU',
                        duration: 3,
                        top: 50,
                        closable: true
                    });
                    return false;
                } else if (!pidarr.includes(3)) {
                    this.$Message.warning({
                        content: '你还没有选择内存',
                        duration: 3,
                        top: 50,
                        closable: true
                    });
                    return false;
                } else if (!pidarr.includes(4)) {
                    this.$Message.warning({
                        content: '你还没有选择系统盘',
                        duration: 3,
                        top: 50,
                        closable: true
                    });
                    return false;
                } else {
                    return true;
                }
            },

            tabsclick() {
                this.modalsumit = false;
            },
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        var reqData = {
                            submitterName: this.formInline.submitterName,
                            submitterTel: this.formInline.submitterTel,
                            submitterCompany: this.formInline.submitterCompany,
                        };
                        if (this.orbtn == 0) {
                            var goodsInfostr = ''
                            this.cheekarr.forEach(value => {
                                goodsInfostr += value.id + ',' + value.count + ',' + (value.count * value.price).toFixed(2) + ';'
                            });
                            reqData.goodsInfo = goodsInfostr

                            this.axios({
                                headers: {
                                    // 'token': JSON.parse(localStorage.getItem('userMes')).token
                                },
                                method: 'post',
                                url: 'MyOrder/saveOrder',
                                data: Qs.stringify(reqData)
                            }).then(res => {
                                let data = res.data
                                if (data.resultFlag) {
                                    this.$Message.info('提交表单成功');
                                    this.modaldown = true;
                                    this.modalsumit = false;

                                } else {
                                    this.$Message.error('失败！！' + data.message);
                                }
                                ;
                            }).catch((e) => {
                                this.$Notice.error({
                                    title: '错误',
                                    desc: '提交服务出错',
                                });
                                this.$refs['formInline'].resetFields();
                            })
                        } else if (this.orbtn == 1) {
                            var goodsInfostr = ''
                            if(this.quicktypebutton1=='经济型'){
                                goodsInfostr += '26,' + this.quickcounts1 + ',' + (this.quickcounts1 * 5).toFixed(2) + ';32,' + this.quickcounts1 + ',' + (this.quickcounts1 * 5).toFixed(2) + ';11,' + this.quickcounts1 + ',' + (this.quickcounts1 * 5).toFixed(2) + ';14,' + this.quickcounts1 + ',' + (this.quickcounts1 * 5).toFixed(2) + ';17,' + this.quickcounts1 + ',' + (this.quickcounts1 * 5).toFixed(2) + ';19,' + this.quickcounts1 + ',' + (this.quickcounts1 * 5).toFixed(2) + ';22,' + this.quickcounts1 + ',' + (this.quickcounts1 * 5).toFixed(2) + ';'+ Util.idformit(this.quicksispan1,this.ydata) + ',' + this.quickcounts1 + ',' + (this.quickcounts1 * 5).toFixed(2) + ';'
                                reqData.goodsInfo = goodsInfostr;
                            }else {
                                goodsInfostr += '8,' + this.quickcounts1 + ',' + (this.quickcounts1 * 5).toFixed(2) + ';32,' + this.quickcounts1 + ',' + (this.quickcounts1 * 5).toFixed(2) + ';11,' + this.quickcounts1 + ',' + (this.quickcounts1 * 5).toFixed(2) + ';14,' + this.quickcounts1 + ',' + (this.quickcounts1 * 5).toFixed(2) + ';17,' + this.quickcounts1 + ',' + (this.quickcounts1 * 5).toFixed(2) + ';19,' + this.quickcounts1 + ',' + (this.quickcounts1 * 5).toFixed(2) + ';22,' + this.quickcounts1 + ',' + (this.quickcounts1 * 5).toFixed(2) + ';'+ Util.idformit(this.quicksispan1,this.ydata) + ',' + this.quickcounts1 + ',' + (this.quickcounts1 * 5).toFixed(2) + ';'
                                reqData.goodsInfo = goodsInfostr;
                            }

                            this.axios({
                                headers: {
                                    // 'token': JSON.parse(localStorage.getItem('userMes')).token
                                },
                                method: 'post',
                                url: 'MyOrder/saveOrder',
                                data: Qs.stringify(reqData)
                            }).then(res => {
                                let data = res.data
                                if (data.resultFlag) {
                                    this.$Message.info('提交表单成功');
                                    this.modaldown = true;
                                    this.modalsumit = false;


                                } else {
                                    this.$Message.error('失败！！' + data.message);
                                }
                                ;
                            }).catch((e) => {
                                this.$Notice.error({
                                    title: '错误',
                                    desc: '提交服务出错',
                                });
                                this.$refs['formInline'].resetFields();
                            })
                        }

                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            downpdf() {
                if (this.orbtn == 0) {
                    var contentstr = '';
                    var str6 = '';
                    var str7 = '';
                    var str35 = '';
                    this.cheekarr.forEach(value => {
                        if (value.pid == 1) {
                            contentstr += 'GPU@' + value.name + ':' + value.count + ';'
                        } else if (value.pid == 2) {
                            contentstr += 'CPU@' + value.name + ':' + value.count + ';'
                        } else if (value.pid == 3) {
                            contentstr += '内存@' + value.name + ':' + value.count + ';'
                        } else if (value.pid == 4) {
                            contentstr += '系统盘@' + value.name + ':' + value.count + ';'
                        } else if (value.pid == 5) {
                            contentstr += '准系统@' + value.name + ':' + value.count + ';'
                        } else if (value.pid == 6) {
                            str6 += value.name + ':' + value.count + ','
                        } else if (value.pid == 7) {
                            str7 += value.name + ':' + value.count + ','
                        } else if (value.pid == 35) {
                            str35 += value.name + ':' + value.count + ','
                        }

                    });
                    if (str6.length) {
                        contentstr += '深度学习框架@' + str6.substring(0, str6.length - 1) + ';'
                    }
                    if (str35.length) {
                        contentstr += '数据盘@' + str35.substring(0, str35.length - 1) + ';'
                    }
                    if (str7.length) {
                        contentstr += '样本数据@' + str7.substring(0, str7.length - 1) + ';'
                    }


                    window.open('http://192.168.0.192:8082/gpumall/MyOrder/downLoadPdf?content=' + contentstr);
                    this.modalsumit = false;
                } else if (this.orbtn == 1) {
                    var contentstr = '';
                    if (this.quicktypebutton1 == '经济型') {
                        contentstr += 'GPU@Nvidia Titan X:' + this.quickcounts1 + ';'
                        contentstr += 'CPU@Intel Dual E5-2620 v4:' + this.quickcounts1 + ';'
                        contentstr += '内存@64G:' + this.quickcounts1 + ';'
                        contentstr += '系统盘@SSD 150G:' + this.quickcounts1 + ';'
                        contentstr += '准系统@7046GR-TR:' + this.quickcounts1 + ';'
                        contentstr += '深度学习框架@Caffe:' + this.quickcounts1 + ';'
                        contentstr += '样本数据@500万车牌图片:' + this.quickcounts1 + ';'
                        contentstr += '数据盘@' + this.quicksispan1 + ':' + this.quickcounts1 + ';'
                    } else if (this.quicktypebutton1 == '标准型') {
                        contentstr += 'GPU@Nvida Tesla P100:' + this.quickcounts1 + ';'
                        contentstr += 'CPU@Intel Dual E5-2620 v4:' + this.quickcounts1 + ';'
                        contentstr += '内存@64G:' + this.quickcounts1 + ';'
                        contentstr += '系统盘@SSD 150G:' + this.quickcounts1 + ';'
                        contentstr += '准系统@7046GR-TR:' + this.quickcounts1 + ';'
                        contentstr += '深度学习框架@Caffe:' + this.quickcounts1 + ';'
                        contentstr += '样本数据@500万车牌图片:' + this.quickcounts1 + ';'
                        contentstr += '数据盘@' + this.quicksispan1 + ':' + this.quickcounts1 + ';'
                    }
                }
                window.open('http://192.168.0.192:8082/gpumall/MyOrder/downLoadPdf?content=' + contentstr);
                this.modalsumit = false;
            }
        },
        computed: {
            //结账 总金额的实时计算
            total_price: function () {
                //IE浏览器 可能不支持箭头函数把 item=>改成function(item)就好。再加上 _this=this。
                let totalPrice = 0;
                this.cheekarr.forEach(item => {
                    totalPrice += item.price * item.count;

                })
                return totalPrice
            },
            total_price2: function () {
                let totalPrice2 = 0;
                let btnprice = '';
                if (this.quicktypebutton1 == '经济型') {
                    btnprice = '51'
                } else {
                    btnprice = '72'
                }
                let panprice2 = '';
                if (this.quicksispan1 == 'SATA 4T') {
                    panprice2 = '22'
                } else if (this.quicksispan1 == 'SATA 6T') {
                    panprice2 = '33'
                } else if (this.quicksispan1 == 'SAS 600G') {
                    panprice2 = '44'
                } else if (this.quicksispan1 == 'SAS 1.2T') {
                    panprice2 = '55'
                } else if (this.quicksispan1 == 'SAS 4T') {
                    panprice2 = '66'
                }
                totalPrice2 = this.quickcounts1 * btnprice * panprice2 * 0;

                return totalPrice2
            }
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
            // 表格数据
            new Promise((resolve) => {
                this.axios.get('Configure/listAllConfig', {
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
