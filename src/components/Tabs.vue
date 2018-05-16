<template>
  <div>
      <el-tabs :value="activeIndex" @input="currentindex" @tab-remove="remove" type="card" closable>
        <el-tab-pane v-for="item in activeMenu" :key="item.name" :label="item.title" :name="item.name" />
      </el-tabs>
      <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { menuitem } from "../public/menuitem.js";

export default {
  name: "Tabs",
  methods:{
    currentindex(e){
      /**/this.$store.commit({
        type:'changeindex',
        item:e
      })
      this.$router.push(e);
      //console.log(e);
    },
    remove(name){
      let indexInActiveMenu = this.activeMenu.findIndex((element)=>element.name == name);

      if(this.activeMenu.length == 1){
        this.$store.commit({
          type:'changeindex',
          item:'main'
        });
        this.$router.push({name:'main'});
      }else{
        this.$store.commit({
          type:'changeindex',
          item: indexInActiveMenu == 0? this.activeMenu[indexInActiveMenu + 1].name : this.activeMenu[indexInActiveMenu - 1].name
        })
      }
      /**/this.$store.commit({
        type:'openpage',
        behavior:'remove',
        item:name
      })
     // console.log(name);
    }
  },
  computed: {
    ...mapState({
      activeIndex: "xActiveIndex",
      activeMenu({ openedPage }) {
         // console.log(openedPage);
        let _activeMenu = [];
        for (var i in openedPage) {
          _activeMenu.push(menuitem.find(item => item.name == openedPage[i]));
        }
        //console.log(_activeMenu);
        return _activeMenu;
      }
    })
  }
};
</script>
