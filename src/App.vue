<template>
  <div class="ui-container" id="app">
    <div class="left-box">
      <div class="ui-logo">
        <img src="./assets/images/logo1.png"/>
      </div>
      <ul>
        <li v-for="(parent,index) in pArray" :key="parent.id">
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item :title="parent.label" :name="parent.id">
              <div class="navItem" v-for="sub in parent.children" @click="changeItem" :key="sub.id">
                <router-link :to="sub.url">{{sub.label}}</router-link>
              </div>
            </el-collapse-item>
          </el-collapse>
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
        defaultProps:{
          label:'label',
          children:'children'
        },
        activeName:'1'
      }
    },
    created:function () {
      this.$http.get("../../static/json/menu.json").then((response)=>{
        var menu = response.body.menu;
        var pArray = []
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
      changeItem:function () {
        this.isActive = !this.isActive
      }
    }
  }
</script>

<style>
  #app {
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 14px;
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
    overflow: auto;
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
  /*修改手风琴插件的样式*/
  .el-collapse{
    border: 0;
  }
  .el-collapse-item__header,
  .el-collapse-item__wrap,
  .el-collapse-item__content{
    font-family: "微软雅黑";
    color: #fff;
    background: rgba(0,0,0,0);
    border-bottom:0;
    font-size: 14px;
  }
  .el-collapse-item__content{
    padding:0;
  }
  .el-collapse-item__content a{
    color:#fff
  }
  .el-collapse-item__content .navItem{
    padding: 12px 45px;
    font-size:13px
  }
  .is-active .el-collapse-item__header{
    border-bottom: 1px solid #02719c;
  }
  .is-active .el-collapse-item__content{
    background:#015076;
  }
  .navItem{
    border-left: 4px solid transparent;
  }
  .item-active {
    background: #013c58;
    border-left: 4px solid #04ccff;
  }
  .is-active .navItem:first-child{
    background: #013c58;
    border-left: 4px solid #04ccff;
  }
  .right-box{
    position: absolute;
    left:200px;
  }
</style>
