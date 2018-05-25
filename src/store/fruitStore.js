import { objToArr } from "../public/tool";

export const fruitModule = {
    namespaced:true,
    state:{
        existItems:[],
        newItems:[],
        requestStatu:null
    },
    mutations:{
        addExistItem(state,payload){
            const { item } = payload;
            state.existItems = [];
            state.existItems = item;
        },
        addNewItem(state,payload){
            const { newItems } = state;
            const { item } = payload;
            if(newItems.every(el=>el.id!=item.id && el.title!=item.title)){
                state.newItems.push(item);
            }else{
                alert('已添加');
            }
        },
        removeNewItems(state,payload){
            state.newItems = [];
        },
        changeStatu(state,payload){
            state.requestStatu = payload.statu;
        }
    },
    actions:{
        requestFruit({ commit },payload){
            commit({
                type:'changeStatu',
                statu:'onRequest'
            });
            fetch('http://localhost:3000/api/get/fruit')
            .then(res => res.json())
            .then(data => {
                commit({
                    type:'addExistItem',
                    item:data
                });
                commit({
                    type:'changeStatu',
                    statu:'success'
                })
            }).catch(e => {
                commit({
                    type:'changeStatu',
                    statu:e
                })
            })
        },

        addNewFruit({ commit, state }){
            commit({
                type:'changeStatu',
                statu:'onAdding'
            });
            let toBeAdding = objToArr(state.newItems);
            fetch('http://localhost:3000/api/add/fruit',{
                body:JSON.stringify(toBeAdding),
                cache:'no-cache',
                headers:{
                    'content-type':'application/json'
                },
                method:'post',
                mode:'cors',
                referrer:'no-referrer',
                redirect:'follow',
            }).then(res=>{
                commit({
                    type:'changeStatu',
                    statu:'success'
                });
                commit('removeNewItems');
                console.log('成功');
            }).catch(e=>console.log(e));
        }
    }
}