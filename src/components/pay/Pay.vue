<template>
  <div class="app-pay">
    <h4>选择场次和票价</h4>
    <div class="pay_t">
      <p class="pay_title">场次</p>
      <div class="pay_sale">
        <p class="pay_show">展期通票</p>
        <p class="pay_ctime">{{list.ctime}}</p>
      </div>
    </div>
    <div class="pay_m">
      <p class="pay_title">票价</p>
      <div class="pay_price">
        <p class="pay_showone">￥{{list.price}}</p>
      </div>
    </div>
    <div class="pay_select">
      <div class="pay_left">
        <span class="pay_tit">选择份数</span>
        <span class="pay_small">本单最多可购6份</span> 
      </div>
      <div class="pay_right">
        <button @click="goodSub" class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input class="mui-input-numbox" type="number" value="1" v-model="val"/>
        <button @click="goodAdd" class="mui-btn mui-btn-numbox-plus" type="button">+</button>
      </div>
    </div>
    <div class="pay_footer">
      <div class="mui-card-footer">
           合计:0
      </div>
      <mt-button type="danger" class="button" @click="handleCart">立即购买</mt-button>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    console.log(this.$route.query.pid);
    this.getMore()
  },
  data(){
    return{
      pid:this.$route.query.pid,
      val:1,
      list:{}
    }
  },
  methods:{
    goodSub(){
      if(this.val>1){
      this.val--
      }
      this.getSubTotal()
    },
    goodAdd(){
      if(this.val<=5){
      this.val++
      }
      this.getSubTotal()
    },
    handleCart(){
      this.$router.push("/Login")
    },
    getMore(){
      // 发送ajax请求
      var url="http://127.0.0.1:3000/sale?pid="+this.pid;
      this.axios.get(url).then((result)=>{
        console.log(result);
        this.list=result.data.data[0];
      })
    }
  }
}
</script>
<style>
  .app-pay h4{
    background-color:#eee;
    margin-top:54px;
    text-align:center;
    padding:16px 0px;
    color:#555;
  }
  .app-pay .pay_t{
    background-color:#fff;
    padding-bottom:20px;
    padding-top:10px;
  }
  .pay_title{
    color:#666;
  }
  .app-pay .pay_m{
    background-color:#fff;
    margin-top:2px;
    padding-bottom:20px;
    padding-top:10px;
  }
  .app-pay p{
    padding:6px 10px;
    font-size:18px;
    margin:0px;
  }
  .pay_sale,.pay_price{
    margin:0px 10px;
    background-color:#fde3a7;
    border:1px solid #f5ab35;
    border-radius:6px;
    padding:8px 6px;
    opacity:0.6;
  }
  .app-pay .pay_sale p{
    margin:0px;
    padding:2px;
  }
  .app-pay .pay_sale .pay_show{
    font-size:16px;
    color:#d35400;
  }
  .app-pay .pay_sale .pay_ctime{
    font-size:16px;
    color:#d35400;
  }
  .pay_price{
    margin-top:0px;
    width:16%;
  }
  .pay_price .pay_showone{
    margin:0px;
    padding:2px;
    font-size:16px;
    color:#d35400;
  }
  .pay_select{
    background-color:#fff;
    margin-top:2px;
  }
  .pay_select{
    padding:10px 10px;
    display:flex;
    justify-content:space-between;
    align-items:center;
  }
  .pay_select span{
    font-size:16px;
    margin-right:6px;
    color:#666;
  }
  .pay_right{
    display:inline-block;
  }
  .pay_right .mui-input-numbox{
    width:62px;
    height:33px;
    margin:0px;
  }
  .pay_left .pay_tit{
    font-size:18px !important;
    color:#666;
  }
  .pay_left .pay_small{
    font-size:14px;
    color:#ccc;
  }
  .button{
    width:120px;
    margin-top:172px;
    margin-right:10px;
  }
  .pay_footer{
    display:flex;
    justify-content:space-between;
    align-items:end;
  }
  .pay_footer .mui-card-footer{
    position: relative;
    margin-top:172px;
    width:246px;
    margin-left:10px;
  }
 
</style>