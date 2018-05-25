<template>
  <div>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>新增电影</span>
          <el-button @click="addNewMovie" style="float: right; padding: 3px 0" type="text">确认添加/修改</el-button>
        </div>
        <!-- card body -->
        <el-table :data="newMovies">
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
          ></el-table-column>
        </el-table>
      </el-card>

      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>新增服饰</span>
          <el-button @click="addNewClothes" style="float: right; padding: 3px 0" type="text">确认添加/修改</el-button>
        </div>
        <!-- card body -->
        <el-table :data="newClothes">
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
          ></el-table-column>
        </el-table>
      </el-card>

      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>新增水果</span>
          <el-button @click="addNewFruit" style="float: right; padding: 3px 0" type="text">确认添加/修改</el-button>
        </div>
        <!-- card body -->
        <el-table :data="newFruit">
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
          ></el-table-column>
        </el-table>
      </el-card>     

  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name:'confirm',
  computed:{
    ...mapState({
      newMovies: state => state.movie.newItems,
      newClothes: state => state.clothes.newItems,
      newFruit: state => state.fruit.newItems
    })
  },

  methods:{
    ...mapActions('clothes',[
      'addNewClothes'
    ]),
    ...mapActions('movie',[
      'addNewMovie'
    ]),
    ...mapActions('fruit',[
      'addNewFruit'
    ])
  }
  
}
</script>
