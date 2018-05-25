<template>
  <div>
    <el-collapse v-model="activeNames" :accordion="false" >
      <el-collapse-item  title="添加商品" name="1">
        <!-- content -->
        <ItemInput  prefix="mov" :addNewItem="addNewItem"/>    
      </el-collapse-item>
      <el-collapse-item title="已有商品" name="2">
        <!-- content -->
        <ItemList :tableData="existItems" :requestData="requestMovies" />
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import ItemInput from "./ItemInput.vue";
import ItemList from "./ItemList.vue";
import { mapMutations, mapState, mapActions } from "vuex";

export default {
  name:'movie',
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
    ...mapMutations('movie',[      
      'addExistItem',
      'addNewItem'
    ]),
    ...mapActions('movie',[
      'requestMovies'
    ])
  },
  computed:{
    ...mapState('movie',{
      existItems:'existItems'
    })
  }
}
</script>

