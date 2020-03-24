<template>
  <div id="app">
    <transition 
    enter-active-class="slideInRight animated"
    leave-active-class="slideOutRight animated"

    >
      <router-view class="page"/>
    </transition>
    
     <!--<router-link 存放页面-->
    <div id="nav">
      <router-link to="/">首页</router-link>
      <router-link to="/cat">分类</router-link>
      <router-link to="/cart">购物车</router-link>
      <router-link to="/User">我的</router-link>
      <!--<router-link 切换页面导航-->
    </div>
    
  </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
  color:#777;
}
.animated{
  box-shadow: 15px 0 10px rgba(200, 2000, 200, .4);
  animation-direction: .6s !important;
}
/* .slideOutRight{
  filter: brightness(80%);
} */
.page{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: .98rem;
  background-color: #fff;
}
#nav{
  background-color: #fff;
  display: flex;
  box-shadow: 0 -2px 4px rgba(200, 200, 200, .4);
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  height: .98rem;
  bottom: 0;
}
#nav a{
  flex: 1;
  line-height: .98rem;
  text-align: center;
}
.router-link-exact-active{
  color:#f30;
}
/*.router-link-active*/
</style>
