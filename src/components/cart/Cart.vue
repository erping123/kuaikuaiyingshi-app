<template>
  <div class="app-cart">
    <div class="cart">
      <img :src="list.img_url"/>
      <div class="cart_detail">
        <h2>{{list.title}}</h2>
        <p>{{list.mark}}</p>
        <p class="cart_score">{{list.score}}</p>
        <p>{{list.fname}}</p>
        <p>{{list.area}}</p>
        <p>{{list.on_show}}{{list.show_day}}</p>
      </div>
      <div class="cart_footer">
        <div>想看</div>
        <div>不想看</div>
      </div>
    </div>
    <!--影视列表-->
    <!--<div class="product_list">-->
      <ul class="pruduct_one">
        <li  v-for="(tmp,index) in bars" :key="index" :class="{active:index==number}" @click="bar(index)">{{tmp}}</li>
      </ul>
      <div class="barCon" @click="jump">
        <div v-for="(tmpCon,index) in barContents" :key="index" v-show="index==number" class="product_model">
          <div class="product_title">
            <span>{{tmpCon.title}}</span>
            <span class="product_stitle">{{tmpCon.disten}}</span>
          </div>
					<h4 class="product_sub">{{tmpCon.subtitle}}</h4>
					<h5 class="product_price">￥{{tmpCon.price}}起</h5>
          <h5>{{tmpCon.shoper}}</h5>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  created() {
   
    this.bar(0);
    this.getMore();
  },
  data(){
    return{
      id:this.$route.query.id,
      list:{},
      bars:["今天2月16日","明天2月17日","后天2月18日"],
      barContents:["内容一","内容二","内容三"],
      number: 0
    }
  },
  methods:{
      getMore(){
        // 发送ajax请求
        var id=this.$route.query.id;
        var url="http://127.0.0.1:3000/productDetail?id="+id;
        this.axios.get(url).then((result)=>{
          console.log(result);
          this.list=result.data.data[0];
        }) 
      },
      bar(index){
        this.number=index;
        // 发送ajax请求
        var url="http://127.0.0.1:3000/productSale?fid="+this.number;
        this.axios.get(url).then((result)=>{
          console.log(result)
          this.barContents=result.data.data;
        })
      },
      jump(){
        this.$router.push("/Login")
      }
  }
}
</script>
<style>
  .cart{
    width:100%;
    height:240px;
    display:flex;
    margin:64px 0px 10px 0px;
    margin:53px auto;
    background-image:url("../../assets/img/bg.jpg");
    align-items:center;
    justify-content:space-between;
    position:relative;
    margin-bottom:0px;
  }
  .cart img{
    width:120px;
    height:160px;
    margin:20px 48px 48px 40px;
  }
  .cart h2{
    font-size:18px;
  }
  .cart_detail{
    width:100%;
    margin:20px 10px 0px 0px;
    height:180px;
  }
  .cart_detail h2{
    color:#eb8a1b;
    margin:0px;
  }
  .cart_detail p{
    margin-top:18px;
    height:0px;
  }
  .cart_footer{
    width:90%;
    color:#fff;
    display:block;
    position:absolute;
    bottom:0px;
    margin-bottom:10px;
    display:flex;
    justify-content:space-between;
    left:20px;
    text-align:center;
  }
  .cart_footer div{
    width:164px;
   border:1px solid #fff;
   color:#fff;
   padding:5px 40px 5px 40px;
   font-size:16px;
   border-radius:6px;
   border-color:#f9690e;
   opacity:0.5;
   background-color:rgb(228, 177, 130);
  }
  .cart_score{
    color:#f9690e;
    font-size:14px;
  }
  /*影视列表*/
	.pruduct_one{
    height:40px;
		list-style: none;
		margin:0 auto;
    display:flex;
    justify-content:center;
    padding:0px 10px 0px 10px !important;
  }
  .pruduct_one>li{
    height:40px;
		padding: 10px 10px 10px 10px;
		font-size: 16px;
    display:flex;
    margin:0 auto;
  }
  .pruduct_one .barCon{
    margin-top:60px;
    width:100%;
		height: 600px;
  }
  .barCon .product_model{
   background-color:#eee;
   display:block !important;
   margin:10px;
   padding:8px 6px;
  }
 .barCon .product_model .product_sub{
  width:280px;
  overflow:hidden;
  white-space: nowrap;
	text-overflow: ellipsis;
  color:#777;
  font-size:16px;
 }
 .product_model .product_title{
  display:flex;
  justify-content:space-between;
 }
 .product_model .product_title span{
   color:#000;
   font-size:18px;
 }
 .product_title .product_stitle{  
   color:#333 !important;
   font-size:16px !important;
 }
 .product_model h5{
   font-size:14px;
}
.product_model .product_price{
  color:#eb8a1b;
  font-size:18px;
}
 .app-cart{
   height:600px;
 }
</style>