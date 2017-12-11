<style lang="scss">
.login {
    height: 100%;
    width: 100%;
    background: url('../../img/lgbg.png') no-repeat center fixed;
    background-size: cover;
    position: relative;
    .login_box {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 405px;
        height: 425px;
        border: 1px solid #333;
        border-radius: 5px;
        background: #fff;
        .login_img {
            width: 100%;
            position: relative;
            top: 36px;

            img {
                display: block;
                position: absolute;
                left: 0;
                right: 0;
                margin: auto;
                width: 210px;
                height: 107px;
            }
        }
        .ivu-form {
            position: absolute;
            top: 190px;
            left: 0;
            right: 0;
            margin: auto;
            .ivu-form-item {

                .ivu-form-item-content {
                    height: 45px;
                    width: 276px!important;

                    margin: 0 auto !important;
                    & > i {
                        display: inline-block;
                        width: 45px;
                        height: 45px;
                        position: relative;
                        float: left;
                        border: 1px solid #dddee1;
                        border-right-color: #fff;
                        border-radius: 4px 0 0 4px;
                        img {
                            position: absolute;
                            top: 0;
                            bottom: 0;
                            left: 0;
                            right: 0;
                            margin: auto;
                        }
                    }
                    .ivu-input-wrapper {
                        display: inline-block;
                        width: 230px;
                        height: 45px;
                        input {
                            width: 100%;
                            height: 100%;
                            font-size: 14px;
                            border-radius: 0 4px 4px 0;
                        }
                    }
                    .ivu-form-item-error-tip {
                        left: 45px;
                    }
                    .ivu-btn {
                        background: #2d72d4;
                        height: 48px;
                        width: 276px;
                        font-size: 16px;
                        letter-spacing: 12px;
                        font-weight: bold;
                    }
                }
            }
        }
    }
}
</style>
<template lang="html">
  <div class="login">
    <div class="login_box">
      <div class="login_img">
        <img src="../../img/lgtitle.png" />
      </div>
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <Form-item prop="name">
            <i><img src="../../img/lgadmin.png" /></i>
            <Input v-model="formValidate.name" placeholder="账号"></Input>
        </Form-item>
        <Form-item prop="passwd">
            <i><img src="../../img/lgpass.png" /></i>
            <Input type="password" v-model="formValidate.passwd" placeholder="密码"></Input>
        </Form-item>
        <Form-item>
            <Button type="primary"  @click="handleSubmit('formValidate')" @keyup.13="handleSubmit('formValidate')" long>登录</Button>
        </Form-item>
      </Form>
    </div>
  </div>
</template>

<script>
import Qs from 'qs'
export default {
  name: 'login',
  data() {
    return {
      formValidate: {
        name: '',
        passwd: ''
      },
      ruleValidate: {
        name: [{
          required: true,
          message: '姓名不能为空',
          trigger: 'blur'
        }],
        passwd: [{
          required: true,
          message: '密码不能为空',
          trigger: 'blur'
        }]
      }
    }
  },
  mounted() {
    localStorage.removeItem('loginStatus');
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          console.log(this.formValidate.name)

          // this.axios({
          //   method: 'post',
          //   url: 'user/login',
          //   data:Qs.stringify({
          //     account:this.formValidate.name,
          //     pwd:this.formValidate.passwd
          //   })
          // }).then(res => {
          //   let data=res.data
          //   if(data.resultFlag){
          //     localStorage.setItem('userMes', JSON.stringify(data));
              this.$router.push({ name: 'map'});
          //   }else{
          //     this.$Message.error('用户名或密码错误！');
          //   }
          // })
          // if(this.formValidate.name!='admin'){
          //   this.$Message.error('用户名错误');
          // }else if(this.formValidate.passwd!='cstorfsyc'){
          //   this.$Message.error('密码错误');
          // }else{
          //   localStorage.removeItem('loginStatus');
          //   localStorage.setItem('loginStatus', new Date().getTime());
          //   this.$router.push('/map');
          // }
        }
      })
    }
  },
  computed: {

  },
  created() {

  }
}
</script>
