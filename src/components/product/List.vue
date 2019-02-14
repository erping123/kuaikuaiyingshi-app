<template>
  <div class="app-list">
    <mt-header class="bar" fixed title="快快影院"></mt-header>
    <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
					<router-link :to="'/Cart?id='+item.id" class="product_list">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<p class="title">
                <span>{{item.title}}</span>
                <span class="title_decond">{{item.score}}</span>
              </p>
							<div class='mui-ellipsis'>
                <p class="subtitle">
                  <span>{{item.show_day}},{{item.ticket}}</span>
                  <span class="title_ser">{{item.subtitle}}</span>
                </p>
                <p class="cart_mail">
                  <span>{{item.shoper}}</span>
                </p>
              </div>
						</div>
					</router-link>
				</li>
    </ul>
    <mt-button type="primary" class="bares" size="large"  @click="getMore">加载更多</mt-button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      list:[],
      pno:0,
      pageSize:6,
      pageCount:1,
    }
  },
  methods:{
     getMore(){
       this.pno++;
       //创建变量保存是否有当前页条件
       //true 有数据 false 无数据 
       var hasMore = this.pno <= this.pageCount;
       //如果没有页数，停止函数执行 
       if(!hasMore){return;}
      //1:发送请求 获取分页数据
       var url = "http://127.0.0.1:3000/productlist?pno="+this.pno+"&pageSize="+this.pageSize;
       this.axios.get(url).then(result=>{
        console.log(result)
        //this.list = result.data.data;
        var rows = this.list.concat(result.data.data);
        this.list = rows; 
        //保留总页数
        this.pageCount = result.data.pageCount;
       });
       //2:并且显示组件模板中
     }
   },
   created(){
     this.getMore();
   }
}
</script>
<style>
body > div > div > header > h1{
		width:100%;
		text-align: center;
	
		color:rgb(245, 211, 159);
	}
.mui-table-view{
  position:relative;
  top:54px;
  margin:0 auto;
  border:0px;
}
.mui-table-view .mui-table-view-cell{
  height:100px;
  padding:0px 0px 0px -2px;;
  text-align:center; 
  border-bottom-width:1px;
  border-bottom-style:solid;
  border-bottom-color:#ccc; 
}
.product_list{
  display:flex;
  justify-content:space-between;
  padding:0px;
}
.mui-media-body .title{
  display:flex;
  justify-content:space-between;
  align-items:center;
}
.mui-ellipsis{
  display:flex;
  justify-content:space-between;
}
.mui-ellipsis p{
  display:inline-block;
  display:flex;
  justify-content:space-between;
}
.mui-ellipsis .subtitle{
  width:100%;
  display:flex;
  flex-wrap:wrap;
}
.mui-ellipsis .subtitle span{
  display:block;
}
.mui-ellipsis .cart_mail{
  float:right;
  align-items:center;
}
.mui-table-view .mui-table-view-cell img{
    width:160px;
    height:80px;
    max-width: 60px;
}
.title:first-child{
    font-size:16px;
    color:rgb(46, 45, 45);
}
.title_decond{
    color:#eb8a1b;
    font-size:16px;
}

.title_ser{
    width:160px;
    overflow:hidden;
    white-space: wrap;
    text-overflow: ellipsis;
}   
.cart_mail span{
    border:1px solid rgb(255, 115, 0);
    padding:1px 6px;
    border-radius:4px;
    color:rgb(255, 115, 0);
    margin-top:10px;
  }
.subtitle{
  margin-top:16px;
}
.bares{
  color:#fff;
  margin-top:50px;
  background-color: #eb8a1b;
}
</style>



