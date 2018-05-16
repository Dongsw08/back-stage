<template>
  <div>
    <el-collapse v-model="activeNames" :accordion="false" >
      <el-collapse-item  title="添加商品" name="1">
        <!-- content -->
        <ItemInput  prefix="fr" :addNewItem="this.addNewItem"/>    
      </el-collapse-item>
      <el-collapse-item title="已有商品" name="2">
        <!-- content -->
        <ItemList :tableData="this.existItems" :requestData="this.requestFruit" />
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import ItemInput from "./ItemInput.vue";
import ItemList from "./ItemList.vue";
import { mapMutations, mapState, mapActions } from "vuex";

export default {
  name:'fruit',
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
    ...mapMutations('fruit',[      
      'addExistItem',
      'addNewItem'
    ]),
    ...mapActions('fruit',[
      'requestFruit'
    ])
  },
  computed:{
    ...mapState('fruit',{
      existItems:'existItems'
    })
  }
}
</script>