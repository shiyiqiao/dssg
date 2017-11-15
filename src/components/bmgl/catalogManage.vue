<template>
  <div class="subContent">
    <div class="box-left">
      <ul id="treeId" class="ztree"></ul>
    </div>
    <div class="box-right"></div>
  </div>
</template>

<script>
  import ztreeVue from "ztree-vue"

  export default{
    name:'catalogManage',
    props:{
        setting:{
          type:Object,
          defalut:function () {
            return {}
          }
        },
        extraSetting:{
          type:Object,
          url:"../../static/json/tree.json",
          defalut:function () {
            return {}
          }
        }
    },
    mounted:function(){
      var defalutSetting = {
      simpleData:{
        enable:true,
          idKey:"id",
          pIdKey:"pId"
      },
      callback:{

      }
    };
      var treeNodes = this._load()
    $.fn.zTree.init($("#treeId"), defalutSetting,treeNodes);
    },
    methods:{
        _load(){
          var treeNode=[];
            $.ajax({
              type:"get",
              url:"../../static/json/tree.json",
              async:false,
            }).done((res)=>{
              treeNode = res.data;
            })
            return treeNode
        }
    }
  }
</script>
<style>
  .subContent{
    position: relative;
    background: #ffffff;
    border: 1px solid #ddd;
    clear:both;
  }
  .subContent .box-left{
    position: absolute;
    width: 250px;
    height: 100%;
  }
  .subContent .right-box{
    width: 100%;
    padding-left: 250px;
    height: 100%;
  }
</style>
