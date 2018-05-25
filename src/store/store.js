import Vue from "vue";
import Vuex from "vuex";
import { movieModule } from "./movieStore.js";
import { fruitModule } from "./fruitStore.js";
import { clothesModule } from "./clothesStore.js";

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
      openedPage:[],
      xActiveIndex:'main',
      logginStatu:false
    },
    mutations:{
      openpage(state,payload){   //payload:{type:openpage,behavior:add/remove,item:{title:'电影',name:'1'}}
        const { behavior, item } = payload;
        const { openedPage } = state;
        if(behavior == 'add'){
          if(openedPage.indexOf(item) == -1){
            openedPage.push(item);
          }
        }else if(behavior == 'remove')
        {
          if(openedPage.indexOf(item) !== -1){
            state.openedPage = openedPage.filter(element => element !== item)
          }
        }
      },
     
     changeindex(state,payload){
       state.xActiveIndex = payload.item;
     },

     changeLogginStatu(state,bo){
       state.logginStatu = bo;
     }
    },

    getters:{
      addedAmount(state){
        return state.movie.newItems.length + state.fruit.newItems.length + state.clothes.newItems.length;
      }
    },

    modules:{
      movie: movieModule,
      fruit: fruitModule,
      clothes: clothesModule
    }
  })

  export default store;