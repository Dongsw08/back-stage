<template>
  <div>
      <el-button  id="databutton" type="primary" @click="getdata">获取数据</el-button>
      
      <el-table :data="tableData">
          <el-table-column 
            prop="id"
            label="ID"
          >
          </el-table-column>
          <el-table-column 
            prop="title"
            label="商品名称"
          >
          </el-table-column>
          <el-table-column 
            prop="price"
            label="价格"
          >
          </el-table-column>
      </el-table>
      
  </div>
</template>

<script>
export default {
  name:'ItemList',
  data(){
      return{
          
      }
  },  
  props:{
      requestData:Function,
      tableData:Array
  },
  methods:{
      getdata(){
          this.requestData()
      }
  }
}
</script>

<style scoped>
    #databutton{
        float: right;
    }
</style>

