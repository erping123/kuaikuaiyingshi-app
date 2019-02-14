<template>
  <div class="app-welcome">
  <!--欢迎界面图片-->
    <img src="img.img_url"/>
  </div>
</template>
<script>
export default {
  beforeRouteEnter(to,from,next){
    if(window.localStorage.getItem('comming')){
        next('/Home');
    }else{
        next();
        window.localStorage.setItem(true);
    }
  },
  data(){
    return{
      img:{img_url:"http://127.0.0.1:3000/index/img/welcome.jpg"},
      {img_url:"http://127.0.0.1:3000/index/img/welcome.jpg"}
      {img_url:"http://127.0.0.1:3000/index/img/welcome.jpg"}
      {img_url:"http://127.0.0.1:3000/index/img/welcome.jpg"}
    }
  }
}
</script>
<style>
  
</style>