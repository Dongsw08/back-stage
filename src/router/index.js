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

/*router.beforeEach((to,from,next) => {
  console.log(to);
  
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
})
*/
export default router;