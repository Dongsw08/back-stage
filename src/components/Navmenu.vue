<template>
    <div class="nav">
      <el-menu
      :default-active = activeIndex
      class="el-menu-vertical-demo"
      text-color="#000000"
      active-text-color="#ffd04b"
      @select="handleSelect"
     >
     <el-menu-item index="main">
      <span>主页</span>
     </el-menu-item>
      <el-submenu index="edit">
        <template slot="title">管理界面</template>
        <el-menu-item index="movie">
          <span>电影</span>
        </el-menu-item>
        <el-menu-item index="fruit">
          <span>水果</span>
        </el-menu-item>
        <el-menu-item index="clothes">
          <span>服饰</span>
        </el-menu-item>
        <el-menu-item index="confirm">
          <el-badge id="badge" :value="this.addedAmount" :max="999" class="item">本次新增</el-badge>
        </el-menu-item>  
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { menulist } from "../public/menuitem.js";

export default {
  name:'navbar',
  methods: {
    handleSelect(key, keyPath) {
      this.$router.push(keyPath[1]?{name:`${keyPath[1]}`}:{path:'/'});
      //this.$router.push({name:'edit', params:{item:'movie'}})
      //this.$router.push(keyPath[1]?{path:`edit/${keyPath[1]}`}:{path:'/'});
      //console.log(keyPath);
    },
  },
  computed:{
    ...mapState({
      activeIndex:'xActiveIndex'
    }),
    ...mapGetters([
      'addedAmount'
    ])
  }
}
</script>

<style scoped>
.nav{
    height: 100%;
}
</style>
