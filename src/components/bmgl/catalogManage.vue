<template>
  <div class="subContent">
    <div class="box-left">
      <ul class="ztree" id="tree"></ul>
    </div>
    <div class="box-right"></div>
  </div>
</template>

<script>

  export default{
    name:'catalogManage'
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
