<template>
  <el-row>
    <el-col :span="8">
      <div>
        <img src="../assets/background/blue.jpg" alt="blue" id="login_img">
      </div>
    </el-col>
    <el-col :span="16">
      <div>
        <el-form ref="loginForm" :model="loginForm" :rules="rules" class="login_container" label-position="left" label-width="0px" v-loading="loading">
          <p class="login_title" style="padding-top:60px;padding-bottom: 100px;font-size: 2em">账户登录</p>
          <el-form-item  prop="id" label-width="100px" label="用户ID">
            <el-input type="text" v-model="loginForm.id" auto-complete="off" placeholder="请输入用户ID"></el-input>
          </el-form-item>
          <el-form-item  prop="password" label-width="100px" label="密码">
            <el-input type="text" v-model="loginForm.password" auto-complete="off" placeholder="请输入用户密码"></el-input>
          </el-form-item>
          <el-form-item style="width: 100%;margin-top:14px;padding-top: 80px">
            <el-button id="login_button" type="primary" style="width: 50%;border: none" v-on:click="login(loginForm)">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      //验证身份证格式
      // const dataValidIdentity = (rule, value, callback) => {
      //   if(value === '') {
      //     return callback(new Error('Can\'t be empty'))
      //   }
      //   else{
      //     var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
      //     if(!reg.test(value)){
      //       return callback(new Error('身份证格式不正确'))
      //     }

      //     return callback();
      //   }
      // };
      return {
        loginForm: {
          identity: '',
        },
        rules: {
          identity: [{required: true, message: '身份证号不能为空', trigger: 'blur'}/*,{validator: dataValidIdentity, trigger: 'blur'}*/],
        },
        loading: false
      }
    },
    created(){

    },
    methods: {
      login (formName) {

        if(this.loginForm.id!='' && this.loginForm.password!=''){
          this.$axios.post('./login',{
            id:this.loginForm.id,
            pwd:this.loginForm.password
          })
            .then(resp => {
              if (resp.data =="登录成功" /*&& resp.data.hasOwnProperty("token")*/) {
                //转换日期格式
                window.localStorage.setItem('id',this.loginForm.id)
                this.$router.replace('/menu?id='+localStorage.getItem('id'))
                this.$message.success('登录成功');
              }
              else{
                //this.$message.error(resp.body.status);
                this.$message.error('登录失败，请检查身份证号是否正确');
              }
            })
            .catch(error => {
              console.log(error);
              this.$message.error('登录请求失败');
            })
        }
        else{
          this.$message.error('身份证不能为空');
        }


      }
    }
  }
</script>

<style scoped>
  body{
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }
  #login_img{
    height:100%;
    float: left;
    background-size: cover;
    border-radius: 0 25% 25% 0/ 50%;
  }
  .login_container{
    background-clip: padding-box;
    margin: 90px auto;
    width: 500px;
    padding: 35px 35px 15px 35px;
  }
  .login_title {
    margin: 0 auto 20px auto;
    text-align: center;
    color: #72707c;
  }
</style>
