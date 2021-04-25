<template>
  <div>
    <nav-menu></nav-menu>
    <router-view/>
    <div>
      <h3>Project 中期</h3>
    </div>
  </div>
  
</template>

<script>
  import NavMenu from "../components/common/Nav";
  export default {
    name: "Menu",
    components: {
      NavMenu,
    },
    data(){
      return{
        id:localStorage.getItem('id'),
        
      }
    },

    mounted(){
      console.log("页面初始化");
     
    },

    methods:{

      


    }
  }
</script>

<style scoped>
  #demo-table-expand {
    font-size: 0;
  }
  #demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>

