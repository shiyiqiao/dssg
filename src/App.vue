<template>
  <div class="ui-container" id="app">
    <div class="left-box">
      <div class="ui-logo">
        <img src="./assets/images/logo1.png"/>
      </div>
      <ul>
        <li v-for="(parent,index) in pArray" :key="parent.id">
          <el-menu class="el-menu-vertical-demo"  :default-active="isOpen" @open="handleOpen" @close="handleClose">
            <el-submenu :index='parent.id'>
              <template slot="title" >
                <div :class="{'title-active':currentActive===index}">
                  <i :class="parent.icon" class="mr-5"></i>{{parent.label}}
               </div>
              </template>
              <el-menu-item-group>
                <el-menu-item v-for="sub in parent.children" :index="sub.id" :key="sub.id" >
                    <router-link :to="sub.url">{{sub.label}}</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </li>
      </ul>
    </div>
    <div class="right-box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        pArray: [],
        isOpen:"1",
        currentActive:''
      }
    },
    created:function () {
      this.$http.get("../../static/json/menu.json").then((response)=>{
        var menu = response.body.menu;
        var pArray = [];
        //将pid为为root的划分到一个数组中
        for(var i=0;i<menu.length;i++){
          if(menu[i].pid=="root"){
            pArray.push(menu[i])
          }
        }
        //将menu中的pid与pArray数组id中相同的放到一起
        pArray.forEach(function (v1,k1) {
          var children =[];
          menu.forEach(function (v2,k2) {
            if(v1.id==v2.pid){
              children.push(v2);
              v1.children = children
            }
          })
        })
        this.pArray = pArray;
      });
    },
    methods :{
      handleOpen:function (key, keyPath) {
          this.currentActive = key-1
      },
      handleClose:function (key, keyPath) {
        this.currentActive = ''
      }
    }
  }
</script>

<style>
  #app {
    /*font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;*/
    font-family: "微软雅黑";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 14px;
  }
  .mr-5{
    margin-right: 5px;
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
    position: absolute;
    left: 0;
    bottom: 0;
    width: 200px;
    height:100%;
    overflow-y: auto;
    overflow-x: hidden;
    background: url("./assets/images/menu_bg.jpg");
  }
  /*logo*/
  .ui-logo{
    width: 100%;
    height: 45px;
    text-align: center;
    border-bottom: 1px solid #02719c;
  }
  .ui-logo img{
    margin-top: 5px;
    margin-left: 5px;
  }
  /*修改navMenu插件的样式*/
  .el-menu,
  .el-menu-item-group{
    background-color: transparent !important;
    color: #ffffff;
  }
  .el-menu-item-group__title{
    padding-top: 0;
  }
  .el-menu-item, .el-submenu__title,
  .el-menu-item>a{
    color: #ffffff !important;
  }
  .el-submenu__title {
    position: relative;
    height: 40px;
    line-height: 40px;
    padding: 0 !important;
    border-bottom: 1px solid transparent;
  }
  .el-submenu__title>div{
    text-align: center;
  }
  .title-active{
    border-bottom: 1px solid #02719c !important;
  }
  .el-submenu__title:hover {
    background-color: transparent;
    color: #04ccff !important;
  }
  .el-menu-item{
    height:42px;
    line-height: 42px;
    border-left:4px solid transparent;
  }
  .el-menu-item:hover {
    background: #013c58 !important;
    border-left: 4px solid #04ccff;
    color: #04ccff;
  }
  .el-submenu .el-menu-item {
    text-align: center;
  }
  .right-box{
    position: absolute;
    left:200px;
  }
</style>
