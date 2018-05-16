import Clothes from "../components/Clothes.vue";
import Fruit from "../components/Fruit.vue";
import Movie from "../components/Movie.vue";
import Confirm from "../components/Confirm.vue";

export const menuitem = [
      {
        title:'电影',
        path:'/movie',
        name:'movie',
        key:'0'
      },
      {
        title:'水果',
        path:'/fruit',
        name:'fruit',
        key:'1'
      },
      {
        title:'服饰',
        path:'/clothes',
        name:'clothes',
        key:'2'
      },
      {
        title:'本次新增',
        path:'/confirm',
        name:'confirm',
        key:'3'
      }
]

export const menulist = ['main','movie','fruit','clothes','confirm']