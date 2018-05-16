<template>
 <div>
   <el-form :model="form" :inline="true" :rules="rules" ref="form" class="demo-form-inline" label-width="80px">
     <el-form-item label="ID" prop="id">
       <el-input v-model.number="form.id" style="width:178px">
         <template slot="prefix">{{ prefix }}</template>
       </el-input>
     </el-form-item>
     <el-form-item label="商品名称" prop="title">
       <el-input v-model="form.title"></el-input>
     </el-form-item>
     <el-form-item label="价格" prop="price">
       <el-input v-model.number="form.price"></el-input>
     </el-form-item>
     <el-form-item>
       <el-button type="primary" @click="onSubmit('form')">添加</el-button>
     </el-form-item>
   </el-form>
   
 </div>
</template>

<script>
export default {
  name:'itemInput',
  props:{
    prefix:String,
    addNewItem:Function
  },
  data(){
    return{
       form:{
         id:'',
         title:'',
         price:null
       },
       rules:{
         id:[
           {required:true,message:'ID不能为空',trigger:'blur'},
           {type:'number',length:17,message:'长度为1到17个数字！',trigger:'blur'},
           //{type:'number',message:'ID应为数字',trigger:'blur'}
         ],
         title:[
           {required:true,message:'名称不能为空',trigger:'blur'},
           {type:'string',length:20,message:'长度不能超过20个字符！',trigger:'blur'}
         ],
         price:[
           {required:true,message:'价格不能为空',trigger:'blur'},
           {type:'number',length:10,message:'长度为1到10个数字！',trigger:'blur'},
         ]
       }
    }  
  },
  methods:{
    onSubmit(fromName){
      this.$refs[fromName].validate((valid,field)=>{
        if(valid){
          const _newItem = {
            id:this.prefix + this.form.id,
            title:this.form.title,
            price:this.form.price
          };
          this.addNewItem({
            type:'addNewItem',
            item:_newItem
          });
        }else{
          alert(field + '校验失败');
        }
      });
    }
  }
}
</script>

