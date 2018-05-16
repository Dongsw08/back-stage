<template>
  <div>
    <el-collapse v-model="activeNames" :accordion="false" >
      <el-collapse-item  title="添加商品" name="1">
        <!-- content -->
        <ItemInput  prefix="cl" :addNewItem="this.addNewItem"/>    
      </el-collapse-item>
      <el-collapse-item title="已有商品" name="2">
        <!-- content -->
        <ItemList :tableData="this.existItems" :requestData="this.requestClothes" />
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import ItemInput from "./ItemInput.vue";
import ItemList from "./ItemList.vue";
import { mapMutations, mapState, mapActions } from "vuex";

export default {
  name:'clothes',
  data(){
    return {
      activeNames:['1','2']
    }
  },
  components:{
    ItemInput,
    ItemList
  },
  methods:{
    ...mapMutations('clothes',[      
      'addExistItem',
      'addNewItem'
    ]),
    ...mapActions('clothes',[
      'requestClothes'
    ])
  },
  computed:{
    ...mapState('clothes',{
      existItems:'existItems'
    })
  }
}
</script>
