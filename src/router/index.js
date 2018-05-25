import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../components/MainPage.vue'
import Movie from "../components/Movie.vue";
import Fruit from "../components/Fruit.vue";
import Confirm from "../components/Confirm.vue";
import Clothes from "../components/Clothes.vue";
import Tabs from "../components/Tabs.vue";
import store from "../store/store.js";

Vue.use(Router)

const Nothing = {
  template: `<div>Nothing here</div>`
}

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage
    },
    {
      path:'/edit',
      component:Tabs,
      children:[
       {
          path:'movie',
          name:'movie',
          component:Movie,
          meta:{requiresAuth:true},
          beforeEnter:(to,from,next) => {
              store.commit({
                type:'openpage',
                behavior:'add',
                item:to.name
              });
              store.commit({
                type:'changeindex',
                item:to.name
              });
            next();
            }
        },
        {
          path:'fruit',
          name:'fruit',
          component:Fruit,
          meta:{requiresAuth:true},
          beforeEnter:(to,from,next) => {
              store.commit({
                type:'openpage',
                behavior:'add',
                item:to.name
              });
              store.commit({
                type:'changeindex',
                item:to.name
              });      
            next();
            }
        },
        {
          path:'clothes',
          name:'clothes',
          component:Clothes,
          meta:{requiresAuth:true},
          beforeEnter:(to,from,next) => {
              store.commit({
                type:'openpage',
                behavior:'add',
                item:to.name
              });
              store.commit({
                type:'changeindex',
                item:to.name
              });  
            next();
            }
        },
        {
          path:'confirm',
          name:'confirm',
          component:Confirm,
          meta:{requiresAuth:true},
          beforeEnter:(to,from,next) => {
              store.commit({
                type:'openpage',
                behavior:'add',
                item:to.name
              });
              store.commit({
                type:'changeindex',
                item:to.name
              });
            next();
            }
        }
      ]
    },
    {
      path:'*',
      name:'nothing',
      component:Nothing
    }    
  ]
})

/**/router.beforeEach((to,from,next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(sessionStorage.currentUser){
      store.commit('changeLogginStatu',true);
      next();
    }else{
      store.commit('changeLogginStatu',false);
      alert('请登陆');
      next({path:'/'});
    }
  }else{
    if(sessionStorage.currentUser){
      store.commit('changeLogginStatu',true);
      next();
    }else{
      next();
    }
  }
})

export default router;