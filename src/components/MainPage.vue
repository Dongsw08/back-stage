<template>
  <div class="mainpage">
    <div v-if="hasLogged" class="logged">
      欢迎使用
      <el-button  size="medium"  @click="logout" type="primary">登出</el-button>
    </div>

    <div v-else class="login">
      <span  class="head">登陆</span>
       <form>
        <label  class="lab">用户名：</label>
        <el-input v-model="userName" placeholder="admin" style="width:200px"></el-input>
        <br>
        <label class="lab">密码：</label>
        <el-input v-model="userPassword"  type="password" placeholder="admin" style="width:200px"></el-input>
        <div class="denglu">
          <el-button  size="medium"  class="leftmar"  @click="login" type="primary">登陆</el-button>
        </div>
       </form> 
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: 'MainPage',
  data () {
    return {
      userName:'',
      userPassword:'',
      hasLogged:false,
    }
  },
  methods:{
    login(){
      fetch('http://localhost:3000/login',{
        body:JSON.stringify({
          'username':this.userName,
          'password':this.userPassword
        }),
        cache:'no-cache',
        headers:{
          'content-type':'application/json'
        },
        method:'post',
        mode:'cors',
        referrer:'no-referrer',
        redirect:'follow',
      }).then(res=>res.json()).then(data=>{sessionStorage.setItem('currentUser',data);this.changeLogginStatu(true);this.log(this.logginStatu);}).catch(e=>console.log(e));
    },

    logout(){
      sessionStorage.removeItem('currentUser');
      this.changeLogginStatu(false);
      this.log(this.logginStatu);
    },

    /**/...mapMutations([
      'changeLogginStatu'
    ]),

    log(bo){
      this.hasLogged = bo;
    }
  },

  computed:{
    ...mapState([
      'logginStatu'
    ]),
  },
  
  mounted:function(){
    this.log(this.logginStatu);
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mainpage{
    position: absolute;
    width: 400px;
    text-align: center;
    line-height: 300%;
    left: 35%;
  }

  .lab{
    display: inline-block;
    width: 70px;
    text-align: left;
  }

  .login{
    display: inline-block;
  }

  .denglu{
    display: block;
    margin:0 auto;
  }

  .leftmar{
    margin-left: 50px;
  }
</style>
