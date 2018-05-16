<template>
  <div id="app">
    <el-container>
      <el-header>后台管理系统</el-header>
      <el-container>
        <el-aside class="menu" width='200px' >
          <Nav />
        </el-aside>
        <el-main>
            <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Nav from "./components/Navmenu";

export default {
  name: "App",
  components: {
    Nav
  }
};
</script>

<style>
.el-menu,
html,
body {
  height: 100%;
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}

.el-container {
  height: 100%;
}

.el-header {
  text-align: center;
  background-color: #409eff;
  min-height: 80px;
  line-height: 80px;
  color: aliceblue;
  font-size: 20px;
}

.el-aside {
  text-align: center;
  line-height: 200px;
}

.tac {
  width: 20%;
}
</style>
