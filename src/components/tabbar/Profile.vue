<template>
  <div class="app-profile">
    <!--<div class="login-top">
      <div bindtap="primary">一键登录</div>
    </div>-->
    <!-- 头部部分 -->
    <div class="profile-top">
      <img src="../../assets/img/avatar.jpg"/>
      <div>
        <router-link to="/Login" class="profile-title">一键登录</router-link>
      </div>
    </div>
    <!-- 中间部分 -->
    <div class="cell">
      <div class="cell-item arrow">优惠券</div>
      <div class="cell-item arrow">猫娱卡</div>
      <div class="cell-item arrow">折扣卡</div>
      <div class="cell-item arrow">我的积分</div>
      <div class="cell-item arrow">账号设置</div>
      <div class="cell-item arrow">意见反馈</div>
      <div class="cell-item arrow">联系客服</div>
      <div class="divider"></div>
      <div class="cell-item arrow">设置</div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  }
}
</script>
<style>
  .login-top{
  width:100%;
  height:40px;
  background-color: #fff;
  font-size:16px;
  display:flex;   
  justify-content: center;    
  align-items: center;   
  margin-top:58px; 
}
/*头部信息*/
.profile-top{
  width:100%;
  height:180px; 
  margin-top:54px;
  padding-top:100px;
  text-align:center;
  background-color:#aaa;
}
.profile-top img{
  width:120px;
  height:120px;
  border-radius:50%;
  margin-top:-80px;
}
.profile-top .profile-title{
  color:#222;
}
.login-middle{
  width:100%;
  background-color: #fff;
  display:flex;   
  justify-content: space-between;    
  align-items: center;    
  flex-wrap:wrap;

}
.login-middle .login_core{
  font-size:12px;
  margin:30px 30px;
}
.login-middle mint-button{
  margin:30px 30px;
  width:160px;
  height:60px;
  border-radius:100px;
  font-size:12px;
  background-color: #f64747;
}
.cell{
  background-color: #fff;
  margin-top:20px;
}
.cell:nth-child(11){
  margin:2px 0;
}
.cell-item{  
  padding:20px 30px;
  border-bottom: 1px solid #ddd;
  font-size:16px;
}
.arrow{
  display:flex;
  justify-content: space-between;
  align-items: center
}
.arrow::after{
  content:"";
  width:15px;
  height:15px;
  border-top:3px solid #ccc;
  border-right:3px solid #ccc;
  transform: rotate(45deg);
}
</style>