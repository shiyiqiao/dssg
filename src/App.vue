<template>
  <div id="app">
    <ul class="left-box">
        <li><router-link to="/catalogManage">编目管理</router-link></li>
        <li><router-link to="/resManage">资源管理</router-link></li>
        <li><router-link to="/networkManage">组网管理</router-link></li>
        <li><router-link to="/logAudit">日记审计</router-link></li>
        <li><router-link to="/sysMonitoring">系统监控</router-link></li>
        <li><router-link to="/sysManage">系统管理</router-link></li>
        <li><router-link to="/portalManage">门户管理</router-link></li>
    </ul>
    <div>
      <div v-for="item in pArray">
        {{item.label}}
    </div>
    </div>

    <div class="right-box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'app',
  data(){
      return{
        pArray:[]
      }
  },
  mounted:function () {
    this.$http.get("../../static/json/menu.json",function (result) {
      console.log(result)
      var menu = result.menu;
      //将pid为为root的划分到一个数组中
      for(var i=0;i<menu.length;i++){
          if(menu[i].pid=="root"){
            this.pArray.push(menu[i])
          }
      }
      //将menu中的pid与pArray数组id中相同的放到一起
      this.pArray.forEach(function (v1,k1) {
        var children =[]
        menu.forEach(function (v2,k2) {
          if(v1.id==v2.pid){
            v1.children.push(v2)
          }
        })
      })
      console.log(this.pArray)
    })
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *{
    margin:0;
    padding:0;
  }
  ul>li{
      list-style:none;
  }
  a{
    color: #333;
    text-decoration: none;
  }
  .left-box{
    float: left;
  }
</style>
