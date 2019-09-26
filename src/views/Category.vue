<template>
  <div id="category">
     <!-- 按钮 -->
    <div class="btns">
      <el-button size="small" type="primary" @click="handleToAdd">添加</el-button>
      <el-button size="small" type="danger" @click="handleToBatchDel">批量删除</el-button>
    </div>
    <!-- / 按钮 -->
    
  </div>
</template>
<script>
export default {
  data(){
    return {
      name:"栏目管理"
    }
  },
  methods:{
    // 点击添加
    handleToAdd(){
      this.title = "添加顾客信息";
      this.customer = {};
      this.openModal();
    },
    // 点击批量删除
  }
}
</script>
<style scoped>

</style>