<template>
  <div class="app-playing">
    <div class="listss">
			<ul class="list_items">
       <li  v-for="(tmp,index) in bars" :key="index" :class="{active:index==number}" @click="rab(index)">{{tmp}}</li>
      </ul>
      <div class="rabCon">
        <div v-for="(tmpCon,index) in barContents" :key="index" class="product_cv">
          <router-link :to="'/pay?pid='+tmpCon.pid" class="rab_re">
          <img :src="tmpCon.url_img"/>
          <div class="rab_cv">
            <h3>{{tmpCon.title}}</h3>
            <p class="rab_sub">{{tmpCon.ctime}}</p>
            <p>{{tmpCon.addr}}</p>
            <div class="rab_ween">
              <span class="rab_price">￥{{tmpCon.price}}起</span>
              <span class="rab_cart">立即购买</span>
            </div>
          </div>
          </router-link>
        </div>
      </div>
		</div>   
  </div>
</template>
<script>
export default {
  created() {
    this.rab(0)
  },
  data(){
    return{
      bars:["演唱会","话剧歌剧","音乐会","戏曲综艺"],
      barContents:['内容一','内容二','内容三','内容四'],
      number:0
    }
  },
    methods:{
      rab(index){
        this.number=index;
        // 发送ajax请求
        var url="http://127.0.0.1:3000/player?fid="+this.number;
        this.axios.get(url).then((result)=>{
          console.log(result);
          this.barContents=result.data.data
        })
      },
    }
  }
</script>
<style>
  .listss{
    margin:0 auto;
  }
  .listss .list_items{
    background-color:#eee;
    margin:54px 0px 0px 0px;
    list-style:none;
    display:flex;
    padding:0px 10px;
    justify-content:space-between;
  }
  .listss .list_items li{
    display:flex;
    padding:10px 0px;
    text-align:center;
    margin:0px 10px;
  }
   .listss .rabCon{
    margin:0px 10px 0px 10px;
    margin:0 auto;
		height: 600px;
  }
  .rabCon .product_cv{
   display:flex;
   padding:10px 10px;
   text-align:left;
   border-bottom-width:1px;
   border-bottom-style:solid;
   border-bottom-color:#eee;
  }
  .rabCon .product_cv .rab_re{
    display:flex;
    justify-content: space-between;
  }
 .rabCon .product_cv img{
   width:100px;
   height:140px;
 }
 .rab_cv{
   margin-left:10px;
   display: block;
   
 }
 .rab_cv .rab_ween{
   display:flex;
   justify-content:space-between;
   width:244px;
   margin-right:10px;
   color:#999;
   margin-top:20px;
   align-items:end;
   margin-bottom:-6px;
 }
 .rab_cv .rab_ween .rab_price{
   color:#db5a04;
   font-size:18px;
 }
 .rab_cv .rab_sub{
   margin-top:20px;
 }
 .rab_cv h3{
   width:240px;
   font-size:18px;
   overflow:hidden;
   white-space: nowrap;
	 text-overflow: ellipsis;
   color:rgb(78, 78, 78);
 }
 .rab_cv p{
   margin:6px 0px 6px 0px;
   font-size:16px;
 }
 .rab_ween .rab_cart{
   border:1px solid #db5a04;
   padding:2px 10px;
   color:#eb8a1b;
   font-size:16px;
 }
 .active {
		color: #db5a04;
	}
  element.style {
    display: block !important;
  }
</style>