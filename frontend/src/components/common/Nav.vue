<template>
  <el-menu :default-active="path1" router mode="horizontal" background-color="white" text-color="#222" style="height:100%">
    <el-button type="text"
               style="color: #757575; float:left;padding:18px;margin-left:35px;font-size:1.3em;font-family:'Helvetica Neue',sans-serif;"
               @click="toHome"
               icon="el-icon-s-promotion">
      知识图谱
    </el-button>
    <el-submenu index="/login" style="float: right">
      <template slot="title"><i class="el-icon-user"></i>账号</template>
      <el-menu-item @click="quit"><i class="el-icon-switch-button"></i>退出登录</el-menu-item>
    </el-submenu>
    <el-submenu index="/menu" style="float: right">
      <template slot="title"><i class="el-icon-house"></i>首页</template>
      <el-menu-item @click="toHome"><i class="el-icon-position"></i>功能选择页</el-menu-item>
    </el-submenu>
  </el-menu>
</template>


<script>
  export default {
    name: "AdminNav",
    data(){
      return{       
        title:'账户信息',      
        path1:''
      }
    },

    methods: {
      
      quit() {
        this.$confirm('您将退出登录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          window.localStorage.setItem("token",null);
          window.localStorage.removeItem('identity');
          this.$router.replace({path: '/login'});
          this.$message.success("已退出当前账号")
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          });
        });
      },
      toHome(){
        //this.$router.replace({ path: "/menu" });
        this.$router.replace('/menu?id='+localStorage.getItem('id'))
      },

      
    }
  }
</script>

<style  scoped>
  .el-divider{
    height: 25px;
    position:relative ;
    float: left;
  }
</style>
