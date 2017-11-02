<template>
  <div class="ui-container" id="app">
    <div class="left-box">
      <div class="ui-logo">
        <img src="./assets/images/logo1.png"/>
      </div>
      <div class="tree-box" v-scroll="onScroll">
          <el-menu class="el-menu-vertical-demo"  :default-active="isOpen" :unique-opened="true" :default-openeds="defaultOpeneds">
            <el-submenu  v-for="(parent,index) in pArray"   :index='parent.id' :key="parent.id"  @open="handleOpen" @close="handleClose">
              <template slot="title" >
                  <i :class="parent.icon" class="mr-5"></i>{{parent.label}}
              </template>
              <div  :class="{'menu-item-group-active':currentActive===index}">
                <el-menu-item-group>
                  <el-menu-item v-for="sub in parent.children" :index="sub.id" :key="sub.id" >
                    <router-link :to="sub.url">{{sub.label}}</router-link>
                  </el-menu-item>
                </el-menu-item-group>
              </div>
            </el-submenu>
          </el-menu>
      </div>
    </div>
    <div class="right-box">
      <div  class="ui-header" >
        <el-row>
          <el-col :offset="14" :span="10"><div class="grid-content bg-purple-light"></div>
            <el-row>
              <el-col :offset="1" :span="4" class="text-center"><a class="portal commonIcon" title="门户首页"><i class="fa fa-home"></i><span>门户</span></a></el-col>
              <el-col :span="4" class="text-center"><a class="message commonIcon" title="消息"><i class="fa fa-envelope-o"></i><span>消息</span></a></el-col>
              <el-col :span="4" class="text-center">
                <el-dropdown trigger="click" class="user-box" @command="authorization">
                  <a class="user commonIcon el-dropdown-link"  title="个人中心"><i class="fa fa-user"></i><span>个人中心</span></a>
                  <el-dropdown-menu class="user-menu">
                    <el-dropdown-item><i class="fa fa-user"></i>欢迎，<span class="loginMan">超级管理员</span></el-dropdown-item>
                    <el-dropdown-item command="">关于授权</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
      <div class="ui-location"></div>
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
        isOpen:"1-1",
        currentActive:'',
        defaultOpeneds:["1"],
        uniqueOpened:0
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
    mounted:function(){

    },
    methods :{
      onScroll:function(e, position){
        this.position = position;
      },
      handleOpen:function (key, keyPath) {
          this.currentActive = key-1
      },
      handleClose:function (key, keyPath) {
        this.currentActive = ''
      },
      authorization:function(){
          this.$msgbox({
            title:"关于授权",
            //message: "<input type='text'>",
            showCancelButton:true,
            cancelButtoonText:"取消",
            confirmButtonText:'保存',
            beforeClose:(action,instance,done)=>{
                if(action==='confirm'){
                    instance.confirmButtonLoading = true;
                    instance.confirmButtonText="执行中...";
                  instance.confirmButtonLoading = false;
                }else{
                    done()
                }
            }
          })
      }
    }
  }
</script>

<style>
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
    display: inline-block;
  }
  .text-center{
    text-align: center;
  }
  .pos-relative{
    position: relative;
  }
  .pos-absolute{
    position: absolute;
  }
  /*外层class*/
  #app {
    /*font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;*/
    width: 100%;
    height: 100%;
    clear: both;
    font-family: "微软雅黑";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 14px;
  }
  .ui-container{
    position: absolute;
    z-index:10
  }
  /*外层class*/

  /*左侧菜单*/
  .left-box{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 200px;
    height:100%;
    overflow-y: auto;
    overflow-x: hidden;
    background: url("./assets/images/menu_bg.jpg");
    background-size: cover;
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
    padding-left: 40px!important;
    border-bottom: 1px solid transparent;
  }
  .menu-item-group-active{
    border-top: 1px solid #02719c !important;
    border-bottom: 1px solid #02719c !important;
    background: #015076;
  }
  .el-submenu__title:hover {
    background-color: transparent;
    color: #04ccff !important;
  }
  .el-submenu .el-menu-item{
    height:42px;
    line-height: 42px;
    border-left:4px solid transparent;
    min-width:160px;
  }
  .el-menu-item:hover {
    background: #013c58 !important;
    border-left: 4px solid #04ccff;
    color: #04ccff;
  }
  .el-submenu .el-menu-item {
    text-align: center;
  }
  .el-submenu.is-active .el-submenu__title{
    border-bottom:0;
  }
  /*二级选项的激活样式*/
  .el-menu-item.is-active{
    background: #013c58;
    border-left: 4px solid #04ccff;
    color: #04ccff;
  }
  .el-submenu.is-opened> .el-menu{
    border-top: 1px solid #02719c;
    border-bottom: 1px solid #02719c;
    background: #015076 !important;
  }
  /*左侧菜单*/

  /*右侧菜单*/
  .right-box{
    position: absolute;
    left:200px;
    width:100%
  }
  /*-----------------------右侧菜单头部--------------------*/
  .ui-header{
    left:200px;
    right:0;
    height:45px;
    line-height: 45px;
    border-bottom: 1px solid #ddd;
    background: #fff;
    z-index: 11;
    min-width: 1000px;
    box-shadow: 0 0 10px #aaa;
  }
  .el-row{
    width: 100%;
    height:100%;
  }
  .el-col{
    height: 100%;
  }
  .commonIcon i{
    width: 30px;
    height: 30px;
    line-height:30px;
    margin-right: 5px;
    font-size: 19px;
    border-radius: 50%;
    color: #fff;
  }
  .portal i{
    background: #ff0000;
  }
  .message  i{
    background:#1ed300
  }
  .user i{
    background:#0090ff
  }
  .commonIcon:hover{
    color:#039ae6;
    cursor:pointer;
  }
  .user-menu{
    font-size:12px;
    border: 1px solid rgba(0,0,0,.15);
  }
  .user-menu .el-dropdown-menu__item{
    padding: 0px 90px 0 20px;
  }
  .user-menu .el-dropdown-menu__item:nth-child(1) i{
    font-size: 15px;
    margin-right: 5px;
  }
  .user-menu .el-dropdown-menu__item:nth-child(1) .loginMan{
    color:#0090ff;
  }
  .user-menu .el-dropdown-menu__item:nth-child(2){
    border-top: 1px solid rgba(0,0,0,.15);
    border-bottom: 1px solid rgba(0,0,0,.15);
  }
  /*-----------------------右侧菜单头部--------------------*/
  /*右侧菜单*/
</style>
