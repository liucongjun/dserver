<style scoped>
    body {
        -webkit-font-smoothing: antialiased;
        font-family: "Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;";
    }

    p {
        font-size: 14px;
        -webkit-font-smoothing: antialiased;
        font-family: "Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;";
    }

    .c-media-info p {
        line-height: 1.4;
    }

    strong {
        font-size: 16px;
    }
    .c-btn {
        height: 35px;
        min-width: 140px;
        padding: 0 20px;
        border-radius: 2px;
        background-color: #00a4ff;
        color: #fff;
        font-size: 14px;
        line-height: 35px;
        text-align: center;
        display: inline-block;
        cursor: pointer;
        outline: 0;
        box-sizing: border-box
    }

    .c-btn:hover {
        text-decoration: none;
        background-color: #0092ee
    }

    .c-media-body .c-btn {
        width: 100%;
        margin-top: 20px
    }

    .c-media-horiz {
        position: relative;
        line-height: 1.5;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background: #fff;
        padding: 20px;
        display: block
    }

    .c-media-horiz:after {
        content: "";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden
    }

    .c-media-heading {
        text-align: left;
        height: 40px;
        line-height: 40px;
    }

    .c-grid-inner [class*=c-g-] {
        display: inline-block;
        zoom: 1;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        font-size: 14px;
        padding-left: 10px;
        padding-right: 10px;
        vertical-align: top
    }

    .c-grid [class*=c-g-] {
        display: inline-block;
        zoom: 1;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        font-size: 14px;
        padding-left: 10px;
        padding-right: 10px;
        vertical-align: top;
    }

    .c-section.c-p-y-tall {
        padding: 70px 0 20px
    }

    .c-section.c-p-y-short {
        padding: 45px 0 50px;
        background: #fff;
    }

    .c-section-inner {
        margin: 0 auto;
        width: 100%;
        max-width: 1200px;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        padding: 0 10px;

    }

    .function-mod {
        background: #fff;
    }

    .c-section-hd {
        margin-bottom: 55px
    }

    .c-section.c-p-y-short .c-section-hd {
        margin-bottom: 35px
    }

    .c-section-tit {
        text-align: center;
        text-align: center;
        font-size: 30px;
        color: #333;
        font-weight: 400;
        line-height: 1.5
    }

    .c-section-des a {
        color: #00a4ff
    }

    .c-section-des a:hover {
        text-decoration: underline
    }

    .c-hero-section {
        width: 100%;
        position: relative;
    }

    .c-hero-section .c-hero-section-inner {
        max-width: 1180px;
        width: 100%;
        margin: 0 auto;
        padding: 155px 0 0 10px;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        top: 0;
        left: 20%;
        position: absolute;
    }

    .c-hero-section .c-hero-section-tit {
        font-size: 48px;
        color: #fff;
        font-weight: 400;
        line-height: 1.5
    }

    .c-hero-section .c-hero-section-des {
        font-size: 16px;
        color: #fff;
        line-height: 1.7;
        margin: 10px 0 40px
    }

    .c-hero-section .c-hero-section-des p {
        line-height: 1.7
    }

    .c-hero-section .c-hero-section-btn {
        font-size: 0
    }

    .c-hero-section .c-hero-section-btn .c-btn {
        height: 45px;
        line-height: 45px;
        font-size: 16px;
        vertical-align: middle
    }

    .c-hero-section .c-hero-section-btn .c-btn:nth-child(2) {
        margin-left: 20px
    }

    /*.c-section-inner > .nav-tabs {*/
    /*padding-left: 30%;*/
    /*}*/

    .c-section-inner > .nav-tabs > li > a {
        color: #000;
        font-size: 18px;
    }

    .c-section-inner > .nav-tabs > li {
        width: 25%;
        text-align: center;
    }

    .c-section-inner > .nav-tabs > li.active > a, .c-section-inner > .nav-tabs > li.active > a:focus, .c-section-inner > .nav-tabs > li.active > a:hover {
        color: #00a4ff;
        cursor: default;
        background-color: #fff;
        border: transparent;
        border-bottom: 3px solid #00a4ff;
    }

    .c-section-bd {
        margin-top: 20px;
    }

    .c-media-img {
        margin: 10px;
    }

    ul li {
        list-style: disc;
    }
</style>
<template>
    <div class="product-body J-mainContent">
        <div class="c-hero-section J-pdBanner">
            <!--autoplay-->
            <Carousel autoplay v-model="value1" loop>
                <CarouselItem>
                    <div class="demo-carousel"><img src="../../img/banner1.jpg" height="460" width="100%"/></div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel"><img src="../../img/banner2.jpg" height="460" width="100%"/></div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel"><img src="../../img/banner3.jpg" height="460" width="100%"/></div>
                </CarouselItem>

            </Carousel>
            <div class="c-hero-section-inner">
                <div class="c-hero-section-ct">
                    <h1 class="c-hero-section-tit">
                        dServer人工智能服务器
                    </h1>
                    <div class="c-hero-section-des">
                        <p>英特尔CPU+英伟达GPU，强强联合</p>
                    </div>
                    <div class="c-hero-section-btn">

                        <router-link to="/dServer"
                                     class="c-btn buy">
                            立即选购
                        </router-link>


                    </div>
                </div>

            </div>

        </div>

        <div class="c-section c-p-y-tall function-mod">
            <div class="c-section-inner">
                <!-- Nav tabs -->
                <ul class="nav nav-tabs center-block" role="tablist">
                    <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab"
                                                              data-toggle="tab">产品简介</a></li>
                    <li role="presentation"><a href="#profile" aria-controls="profile" role="tab"
                                               data-toggle="tab">产品特性</a></li>
                    <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">产品配置</a>
                    </li>
                    <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">典型应用</a>
                    </li>
                </ul>

                <!-- Tab panes -->
                <div class="tab-content">
                    <div role="tabpanel" class="tab-pane active" id="home">
                        <div class="c-section-bd row">
                            <div class="col-md-6">
                                <div style="text-align: center;margin: 20px;"><img src="../../img/ds.jpg" height="240"/>
                                </div>
                            </div>
                            <div class="col-md-6" style="margin-top: 20px;">
                                <div class="about-mod-con">
                                    <div class="c-media-horiz about-intro">
                                        <p class="c-media-info" style="line-height: 2;">
                                            　
                                            &#8195;人工智能研究方兴未艾，但构建高性价比的硬件平台是一大难题，亟需高性能、点菜式的解决方案。dServer人工智能服务器针对个性化的AI应用需求，采用英特尔CPU+英伟达GPU的混合架构，具备强劲的计算性能，提供多类型的CPU、GPU、软件、内存、硬盘、数据等备选，方便自由选配，定制安全可靠的个性化应用，可广泛用于图像识别、语音识别和语言翻译等AI领域。
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div role="tabpanel" class="tab-pane" id="profile">
                        <div class="c-section-bd">
                            <div role="list" class="row c-grid function-list" style="padding-top: 40px;">

                                <div role="listitem" class="col-md-4">
                                    <div class="c-media">
                                        <div class="c-media-img">
                                            <img src="../../img/intel.png" height="59" width="178"/>
                                        </div>
                                        <div class="c-media-body">
                                            <h4 class="c-media-heading">
                                                <p><strong>英特尔CPU+英伟达GPU，强强联合</strong>
                                                </p>
                                            </h4>
                                            <div class="c-media-info">
                                                <ul style="line-height: 2;">
                                                    <li> 服务器采用GPU+CPU的混合架构。</li>
                                                    <li>CPU选用英特尔® 至强® E5-2600系列处理器。</li>
                                                    <li>采用NVIDIA® GPU计算平台。</li>
                                                    <li>每台服务器可插入1-10块英伟达GPU。</li>
                                                    <li>具备高并行度、矩阵运算与强大的浮点计算能力。</li>
                                                    <li>NVIDIA TITAN X 消费级GPU基于Pascal™架构，专为PC平台而设计。</li>
                                                    <li>NVIDIA® Tesla® 数据中心GPU则为数据中心而打造。</li>
                                                    <li>NVIDIA GeForce GTX 1080可提供优异的性能、能效和游戏体验。</li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div role="listitem" class="col-md-4">
                                    <div class="c-media">
                                        <div class="c-media-img">

                                            <img src="../../img/ten.png" height="51" width="293"/></div>
                                        <div class="c-media-body">
                                            <h4 class="c-media-heading">
                                                <p>　　<strong>主流软件+丰富数据，开箱即用</strong></p>
                                            </h4>
                                            <div class="c-media-info">
                                                <ul style="line-height: 2;">
                                                    <li> 人工智能服务器预装CentOS操作系统，集成两套行业主流开源工具软件——TensorFlow &amp;Caffe，同时提供丰富的应用数据，开箱即用。</li>
                                                    <li>
                                                        TensorFlow支持CNN、RNN和LSTM算法，这是目前在Image、Speech和NLP流行的深度神经网络模型，灵活的架构可以在多种平台上展开计算。
                                                    </li>
                                                    <li>
                                                        Caffe是纯粹的C++/CUDA架构，支持命令行、Python和MATLAB接口，可以在CPU和GPU64直接无缝切换。提供MNIST、CIFAR-10等训练测试数据，包括大量的人脸数据、车牌数据等。
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div role="listitem" class="col-md-4">
                                    <div class="c-media">
                                        <div class="c-media-img">

                                            <img src="../../img/duo.png" height="45" width="67"/></div>
                                        <div class="c-media-body">
                                            <h4 class="c-media-heading">
                                                <p>　　<strong>多样化配置，订餐式选配</strong></p>
                                            </h4>
                                            <div class="c-media-info" style="padding-top: 6px;">

                                                <ul style="line-height: 2;">
                                                    <li>
                                                        用户登录ds.cstor.cn，如同订餐一般，通过“快速选配”或者“自定义选配”选择适用的硬件。

                                                    </li>
                                                    <li>
                                                        配置选项附有详细的参数说明。
                                                    </li>
                                                    <li>
                                                        提供配置清单下载服务。
                                                    </li>
                                                    <li>
                                                        根据清单配置预装相应软件与数据，开箱即用。
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div role="tabpanel" class="tab-pane" id="messages">
                        <div class="c-section-bd" style="padding-top: 20px">
                            <div class="c-tab-responsive J-tabWrapper">


                                <img src="../../img/peizhi.png" height="500" width="1206"/></div>
                        </div>
                    </div>
                    <div role="tabpanel" class="tab-pane" id="settings">
                        <div class="c-section-bd" style="padding-top: 40px">
                            <div class="c-tab-responsive J-tabWrapper">

                                <p style="line-height: 2;">
                                    　　dServer人工智能服务器面向AI专业科研、技术开发、专业消费者、极客玩家等用户群体，为图像识别、语音识别、语音翻译等领域提供专业可靠的AI应用。
                                </p>
                                <p style="line-height: 2;">
                                    　　目前，人工智能服务器已经中标清华大学车联网数据云平台项目、西安科技大学大数据深度学习平台项目、湖北文理学院大数据处理与分析平台项目(中地共建)以及南京大学项目等，之后将陆续部署使用。其中，清华大学采购项目配置如下：</p>

                                <p style="text-align: center; line-height: 2;"><img
                                        style="width: 100%; height: 400px;"
                                        border="0"
                                        src="http://www.cstor.cn/webedit/uploadfile/20171206184928268.png">
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="c-section c-p-y-tall home-footer-mod">
            <div class="c-section-inner mobile">
                <div class="c-section-hd">
                    <h3 class="c-section-tit mobile">开始使用dServer人工智能服务器</h3>
                </div>
                <div class="c-section-bd">
                    <div class="home-footer-info">
                        <p class="text-center">轻松开始使用。只需点几次鼠标，即可创建您的首个dServer人工智能服务器。</p>
                        <br>
                        <br>
                    </div>
                    <div class="home-footer-btn" style="text-align: center;margin-bottom: 20px;">
                        <router-link to="/dServer"
                                     class="c-btn buy">
                            立即选购
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="home-footer-bg"></div>
        </div>


    </div>

</template>

<script>
    export default {
        name: "introduce",
        data() {
            return {
                value1: 0
            }
        }
    }
</script>
