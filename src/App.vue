<template>
  <div id="app">
    <ul class="left-box" v-for="parent in pArray">
      <li>
        <div>{{parent.label}}</div>
        <ul v-for="sub in parent.children">
          <li><router-link to="{{sub.url}}"></router-link>{{sub.label}}</li>
        </ul>
      </li>
    </ul>
    <router-view></router-view>
    <div class="right-box">


    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'app',
  data () {
    return {
      pArray: [],
      defaultProps:{
          label:'label',
          children:'children'
      }
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
      console.log(pArray)
    });
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
    /*float: left;*/
  }
</style>
