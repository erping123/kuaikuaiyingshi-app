<template>
 <div class="app-container">
    <!--1:学子商城顶部导航栏-->
    <mt-header class="bar" fixed title="快快影院"></mt-header>
    <!--2:router-view-->
    <router-view></router-view>
    <!--3:tabbar-->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item mui-active" to="/Home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<a class="mui-tab-item" href="#">
				<span class="mui-icon mui-icon-extra mui-icon-extra-classroom"></span>
				<span class="mui-tab-label">电影</span>
			</a>
			<router-link class="mui-tab-item"  to="/Playing">
				<span class="mui-icon mui-icon-extra mui-icon-extra-classroom">
				  <!--<span class="mui-badge">
					</span>-->
				</span>
				<span class="mui-tab-label">
				演出 </span>
			</router-link>
			<router-link class="mui-tab-item" to="/Profile">
				<span class="mui-icon mui-icon-chat"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>
          
    
 </div>
</template>
<style>
.app-container .bar{
  background:#eb8a1b;
}
.app-container{
	height:600px;
  padding-top:40px;
  padding-bottom:50px;
  overflow-x:hidden;
}
.mint-header.is-fixed{
	font-size:18px;
	height:54px;
	color:#fff;
}
</style>
