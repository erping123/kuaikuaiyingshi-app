<template>
  <div class="app-register">
    <mt-header class="bar" fixed title=""></mt-header>
    <div class="mui-content">
			<!--<form id='login-form' class="mui-input-group">-->
				<div class="mui-input-row">
					<label>账&nbsp;&nbsp;&nbsp;&nbsp;号</label>
					<input type="text" v-model="uname" @blur="a" @focus="aa" class="mui-input-clear mui-input" placeholder="请输入账号"/>
					<span class="tishi">{{tishi.tishi1}}</span>
				</div>
        <div class="mui-input-row">
					<label>手 机号</label>
					<input type="text" v-model="phone" @blur="b" @focus="bb" class="mui-input-clear mui-input" placeholder="请输入手机号"/>
					<span class="tishi">{{tishi.tishi2}}</span>
				</div>
				<div class="mui-input-row">
					<label>密&nbsp;&nbsp;&nbsp;&nbsp;码</label>
					<input type="password" v-model="upwd" @blur="c" @focus="cc" class="mui-input-clear mui-input" placeholder="请输入密码"/>
					<span class="tishi">{{tishi.tishi3}}</span>
				</div>
        <div class="mui-content-padded">
          <button @click="handleReg" id='login' type="button" class="mui-btn mui-btn-block mui-btn-primary register">注册</button>
          <div class="link-area"><a id='reg'>注册</a> <span class="spliter">|</span> <a id='forgetPassword'>登录</a>
          </div>
        </div>
			<!--</form>-->
			<div class="mui-content-padded oauth-area">

			</div>
		</div>
  </div>
</template>
<script>
// 单独引入mint-ui   Toast
import {Toast} from "mint-ui"
export default {
  data(){
    return{
			isRegister:false,
			btn:false,
      uname:"",
      phone:"",
      upwd:"",
			tishi:{
					 tishi1:"",
					 tishi2:"",
					 tishi3:""	
			},
			userArr:[]
    }
  },
   methods:{
		  //  var url="http://127.0.0.1:3000/isregister?uname="+uname;
			// 	  this.axios.get(url).then((result)=>{
			// 		console.log(result)
			// 	})
		 // 
        // 获取用户名和密码
		//  失去焦点的时候
		 a(){
				this.tishi.tishi1='';
				this.isRegister=true;
				var a=/^\w+[0-9]{3}$/;   //由大小写字母、以及数字组成
				if(!this.uname){
				this.tishi.tishi1='用户名不能为空';
				}else if(!a.test(this.uname)){
				this.isRegister=true;
				this.tishi.tishi1='由小写字母组成';
        }
      },
			b(){
        this.tishi.tishi2='';
        this.isRegister=true;
        var b=/^[0-9]{11}$/;   
        if(!this.phone){
        this.isRegister=true;
        this.tishi.tishi2='手机号不能为空';
        }else if(!b.test(this.phone)){
        this.isRegister=true;
      	this.tishi.tishi2='由11位数字组成';
        }
      },
			c(){
        this.tishi.tishi3='';
        this.isRegister=true;
        var c=/^[0-9]{6}$/;   
        if(!this.upwd){
        this.isRegister=true;
        this.tishi.tishi3='密码不能为空';
        }else if(!c.test(this.upwd)){
        this.isRegister=true;
        this.tishi.tishi3='由6位数字组成';
        }
      },
			// 聚焦的时候
			aa(){
				this.tishi.tishi1='由小写字母组成';
				this.isRegister=true;
				var a=/^\w+[0-9]{3}$/;
				if(a.test(this.uname)){
				this.isRegister=true;
				this.tishi.tishi1="";
				}
			},
			bb(){
				this.tishi.tishi2="由11位数字组成";  
				this.isRegister=true;
				var b=/^[0-9]{11}$/;
				if(b.test(this.phone)){
				this.isRegister=true;
				this.tishi.tishi2="";
				}
			},
			cc(){
				this.tishi.tishi3="由六位数字组成";
				this.isRegister=true;
				var c=/^[0-9]{6}$/;
				if(c.test(this.upwd)){
				this.isRegister=true;
				this.tishi.tishi2="";
				}
			},
      handleReg(){
				//提示框
        this.tishi.tishi1='';
        this.tishi.tishi2='';
        this.tishi.tishi3='';
        this.isRegister=false;
        //用户名
        var a=/^\w+[0-9]{3}$/;
        if(!this.uname){
        this.tishi.tishi1='用户名不能为空';
        this.isRegister=true;
        }else if(!a.test(this.uname)){
          this.isRegister=true;
          this.tishi.tishi1='由小写字母组成';
        }
				if(a.test(this.uname)){
				this.isRegister=true;
				this.tishi.tishi1="";
				}
				// 手机号
				var b=/^[0-9]{11}$/;   
        if(!this.phone){
        this.isRegister=true;
        this.tishi.tishi2='手机号不能为空';
        }else if(!b.test(this.phone)){
        this.isRegister=true;
      	this.tishi.tishi2='由11位数字组成';
        }
				if(b.test(this.phone)){
				this.isRegister=true;
				this.tishi.tishi2="";
				}
        // 密码
			  var c=/^[0-9]{6}$/;   
        if(!this.upwd){
        this.isRegister=true;
        this.tishi.tishi3='密码不能为空';
        }else if(!c.test(this.upwd)){
        this.isRegister=true;
        this.tishi.tishi3='由6位数字组成';
        }
				if(c.test(this.upwd)){
				this.isRegister=true;
				this.tishi.tishi2="";
				}
				
        var uname=this.uname;
        var phone=this.phone;
        var upwd=this.upwd;
				console.log(uname)
				console.log(phone)
				console.log(upwd)
        // 发送ajax请求
				// 判断用户名是否存在，已存在不能注册
		    // if(window.localStorage.userArr){
        //   var array=JSON.parse(window.localStorage.userArr);
        // }else{
        //   array=[]
        // }
        // //便利数组
      	// for(var i=0;i<array.length;i++){
        //   console.log(array);
        //   if(this.uname==array[i].uname){
        //     Toast("该账号已存在");  
        //   return; 
        //   }     
        // }
			
        var url="http://127.0.0.1:3000/Register";
				var param=`uname=${uname}&phone=${phone}&upwd=${upwd}`;
				// array.push(param);
				// window.localStorage.userArr=JSON.stringify(array);
				// localStorage.setItem('userArr',window.localStorage.userArr);
        this.axios.post(url,param).then((result)=>{
          console.log(result)
					if(result.data.code==200){
						Toast("注册成功")
						this.$router.push("/Login")
					}else{
					  Toast("注册失败") 
					}
        })


      }
    }
}
</script>
<style>
   .mint-header.is-fixed{
	      font-size:18px;
	      height:54px;
	      color:#fff;
      }
      .mint-header-title{
        text-align:center;
        margin-left:0;
      }
      .mui-content{
        margin-top:140px;
        border-top-width:none;
				background-color:#fff !important;
      }
			/* 注册 */
	    .card-header{
				float:right;
				margin-bottom:60px;
				margin-top:-74px;
				margin-right:10px;
			}
			.card-header a{
				color:#888;
				font-size:19px;
			}
      .mui-input-row{
        width:100%;
        margin:0 auto;
        border-bottom-width:none;
        background-color:#fff;
        opacity:0.8;
        color:#666;
      }
      .mui-input-row input{
        color:#666;
				border:1px !important;
      }
     .mui-input-row label{
        color:#666;
      }
			/**提示信息**/
			.mui-input-row span{
				width:98%;
				font-size:16px;
				padding:0px;
				color:red;
				/**border:1px solid red;**/
				text-align: center;
				margin-left:188px;
			}
			input[type='text']{
				padding:0px !important;
			}
			/**登录按钮**/
			.mui-content-padded {
				margin-top: 25px;
			}
			.mui-btn {
				padding: 10px;
			}
			.link-area {
				display: block;
				margin-top: 25px;
				text-align: center;
			}
			.spliter {
				color: #bbb;
				padding: 0px 8px;
			}
			.oauth-area {
				position: absolute;
				bottom: 20px;
				left: 0px;
				text-align: center;
				width: 100%;
				padding: 0px;
				margin: 0px;
			}
			.oauth-area .oauth-btn {
				display: inline-block;
				width: 50px;
				height: 50px;
				background-size: 30px 30px;
				background-position: center center;
				background-repeat: no-repeat;
				margin: 0px 20px;
				/*-webkit-filter: grayscale(100%); */
				border: solid 1px #ddd;
				border-radius: 25px;
			}
			.oauth-area .oauth-btn:active {
				border: solid 1px #aaa;
			}
			.oauth-area .oauth-btn.disabled {
				background-color: #ddd;
			}
</style>

