<template>
  <div class="app-home">
    <!--头部消息-->
    <mt-header class="bar" fixed title="快快影院"></mt-header> 
		<div fixed class="mui-indexed-list-search mui-input-rows mui-search">
			<input @click="handleSearch" v-model="keyword" name="keyword" fixed type="search" class="mui-input-clear mui-indexed-list-search-input" placeholder="金三角大营救"/>
		</div>
    <!--内容消息-->
		<!--轮播图-->
		<mt-swipe :auto="1500" >
      <mt-swipe-item v-for="item in list" :key="item.id">
        <img :src="item.img_url"/>
      </mt-swipe-item>
    </mt-swipe>
		<!--影视列表--> 
		<div class="list">
			<ul class="list_item">
				<li v-for="(item,index) in tabs" :class="{active:index == num}" @click="tab(index)" :key="index">{{item}}</li>
				<h2 @click="jump">更多 &gt;</h2>
				<h4></h4>
			</ul>
			<div class="tabCon">
				<div class="content" v-for='(itemCon,index) in tabContents' :key="index">
						<img :src="itemCon.img_url"/>
						<h2>{{itemCon.title}}</h2>
						<h4>{{itemCon.subtitle}}</h4>
						<h5>{{itemCon.on_show}}</h5>
				</div>
			</div>
		</div>
		<!--尾部消息-->
    <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#">
				<span class="mui-icon mui-icon-extra mui-icon-extra-classroom"></span>
				<span class="mui-tab-label">搜索</span>
			</a>
			<a class="mui-tab-item"  href="#">
				<span class="mui-icon mui-icon-extra mui-icon-extra-alipay">
				  <span class="mui-badge">
					</span>
				</span>
				<span class="mui-tab-label">购票</span>
			</a>
			<a class="mui-tab-item" href="#">
				<span class="mui-icon mui-icon-chat"></span>
				<span class="mui-tab-label">我的</span>
			</a>
		</nav>
  </div>
</template>
<script>
  export default {
		created(){
			this.getImages();
			this.tab(0)
		},
    data(){
      return { 
				tabs: ["热映电影", "即将上映"],
        tabContents: ["内容一", "内容二"],
        num: 0,
				list:[],
				keyword:""
      }
    },
		methods:{
			getImages(){
				var url="http://127.0.0.1:3000/imagelist";
				this.axios.get(url).then(result=>{
					console.log(result)
	        this.list=result.data.data
				})
			},
			tab(index) {
						this.num = index;
						var url="http://127.0.0.1:3000/moreimage?fid="+this.num;
						this.axios.get(url).then(result=>{
							console.log(result)
							this.tabContents=result.data.data
						})
      },
			jump(){
				this.$router.push("/list")
			},
			handleSearch(){
				// 获取输入框的关键词
				var keyword=this.keyword;
				// 发送ajax请求
				var url="http://127.0.0.1:3000/search?keyword="+keyword;
				this.axios.get(url).then((result)=>{
					console.log(result)
				
				})
			}
		}
  }
</script>
<style>
	body > div > div > header > h1{
		width:100%;
		text-align: left;
		margin-left:-116px;
		color:rgb(245, 211, 159);
	}
	.app-container{
		height:667px;
		width:100%;
		position: relative;  
		background:#fff;
		padding-top:0px;
	}
	.mint-header-title{
		text-align: left !important;
		margin-left:-116px !important;
	}
  .app-home{
		width:100%;
		height:240px;
		justify-content: center;
	}
	.mint-swipe{
		width:100%;
	}
	.mint-swipe img{
		margin-left: -240px;
		margin-top:50px;
	}
	/* 搜索框 */
	.mui-indexed-list-search,.mui-input-rows,.mui-search{
		width: 40%;
		height:34px;
		float:right;
		margin:10px 10px 0px 0px;
		z-index: 20;
		background-color:#f3dbbf;
		border-radius: 25px;
		opacity: 0.3;
	}
	.mui-input-clear,.mui-indexed-list-search-input{
		margin-bottom:0px;
		background-color:rgb(245, 230, 198);
	}
	body > div > div > div.mui-indexed-list-search.mui-input-rows.mui-search{
		border-radius: 25px;
		height:34px;
		position:fixed;
		right:0px;
		top:0px;
	}
	input[type="search"]{
		margin-bottom:0px;
		background-color:rgb(245, 224, 180);
	}
/*影视列表*/
	.list{
		width:96%;
		height:540px;
		margin:10px 10px 10px 10px;
		margin:0 auto;
	}
	.tabCon{
		width:100%;
		height: 400px;
		display:flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.tabCon .content{
		width:32%;
		height:200px;
		background:rgb(243, 243, 243);
		margin-bottom: 10px;
	}
	.tabCon .content img{
		width:100%;
		height:140px;
	}
	.tabCon .content h2{
		font-size:14px;
	}
	.tabCon .content h4{
		font-size:12px;
		overflow:hidden;
  	white-space: nowrap;
		text-overflow: ellipsis;
	}
  .active {
		color: #db5a04;
	}
	.list_item{
		height:40px;
		list-style: none;
		padding-left:0px;
		margin: 0px;
	}
	.list_item h2{
		font-size: 16px;
		float:right;
		line-height: 41px;
		text-align: center;
		margin:0px;
		color:rgb(81, 82, 82);
	}
  .list_item li{
		height:40px;
    float: left;
		padding: 10px 20px 10px 0px;
		font-size: 16px;
	}
</style>
