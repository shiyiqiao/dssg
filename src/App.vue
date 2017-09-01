<template>
  <div id="app">
    <ul>
        <li><router-link to="/catalogManage">编目管理</router-link></li>
        <li><router-link to="/resManage">资源管理</router-link></li>
        <li><router-link to="/networkManage">组网管理</router-link></li>
        <li><router-link to="/logAudit">日记审计</router-link></li>
        <li><router-link to="/sysMonitoring">系统监控</router-link></li>
        <li><router-link to="/sysManage">系统管理</router-link></li>
        <li><router-link to="/portalManage">门户管理</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){

  },

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
  ul{
    float: left;
  }
  ul>li{
      list-style:none;
  }
  a{
    color: #333;
    text-decoration: none;
  }
</style>
