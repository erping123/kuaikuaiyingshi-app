<template>
  <div class="app-login">
    <mt-header class="bar" fixed title=""></mt-header> 
		
		<div class="mui-content">
			<!--<form id='login-form' class="mui-input-group">-->
				<div class="card-header">
          <router-link to="/Register">用户注册</router-link>
        </div>
				<div class="mui-input-row">
					<label>账号</label>
					<input type="text" v-model="uname" @blur="e" @focus="ee" class="mui-input-clear mui-input" placeholder="请输入账号"/>
					<span class="tishi">{{tishi.tishi1}}</span>
				</div>
				<div class="mui-input-row">
					<label>密码</label>
					<input type="password" v-model="upwd" @blur="f" @focus="ff" class="mui-input-clear mui-input" placeholder="请输入密码"/>
					<span class="tishi">{{tishi.tishi2}}</span>
				</div>
        <div class="mui-content-padded">
          <button id='login' type="button" class="mui-btn mui-btn-block mui-btn-primary login" @click="handleLogin">登录</button>
          <div class="link-area"><a id='reg'>注册账号</a> <span class="spliter">|</span> <a id='forgetPassword'>忘记密码</a>
          </div>
        </div>
			
			<!--</form>-->
			<div class="mui-content-padded oauth-area">

			</div>
		</div>
  </div>
</template>
<script>
import {Toast} from "mint-ui"
export default {
  data(){
    return{
			isLogin:false,
			btn:false,
			uname:'',
			upwd:'',
			tishi:{
					 tishi1:"",
					 tishi2:""	
			}
    }
	},
	methods:{
	// 失去焦点的时候
	e(){
			this.tishi.tishi1="";
			this.isLogin=true;
			var a=/^\w+[0-9]{3}$/;
			if(!this.uname){
				this.isLogin=true;
				this.tishi.tishi1="用户名不能为空";
			}else if(!a.test(this.uname)){
				this.isLogin=true;
				this.tishi.tishi1="由数字、字母、下划线和3位数字组成";
			}
	},
	f(){
		this.tishi.tishi2="";
		this.isLogin=true;
		var b=/^[0-9]{6}$/;
		if(!this.upwd){
			this.isLogin=true;
			this.tishi.tishi2="密码不能为空";
		}else if(!b.test(this.upwd)){
			this.isLogin=true;
			this.tishi.tishi2="由6位数字组成";
		}
	},
	// 聚焦的时候
	ee(){
		this.tishi.tishi1="请输入您的用户名";
		this.isLogin=true;
		var a=/^\w+[0-9]{3}$/;
		if(a.test(this.uname)){
		this.isLogin=true;
		this.tishi.tishi1="";
		}
	 },
	ff(){
		this.tishi.tishi2="请输入您的密码";
		this.isLogin=true;
		var b=/^[0-9]{6}$/;
		if(b.test(this.upwd)){
		this.isLogin=true;
		this.tishi.tishi2="";
		}
	},
	handleLogin(){
		//提示框
    this.tishi.tishi1='';
    this.tishi.tishi2='';
		this.isLogin=false;
		// 用户名
		var a=/^\w+[0-9]{3}$/;
		if(!this.uname){
			this.isLogin=true;
			this.tishi.tishi1="用户名不能为空";
		}else if(!a.test(this.uname)){
			this.isLogin=true;
			this.tishi.tishi1="由数字、字母、下划线和3位数字组成";
		}
		if(a.test(this.uname)){
		this.isLogin=true;
		this.tishi.tishi1="";
		}
		// 密码
		var b=/^[0-9]{6}$/;
		if(!this.upwd){
			this.isLogin=true;
			this.tishi.tishi2="密码不能为空";
		}else if(!b.test(this.upwd)){
			this.isLogin=true;
			this.tishi.tishi2="由6位数字组成";
		}
		if(b.test(this.upwd)){
		this.isLogin=true;
		this.tishi.tishi2="";
		}
		// 获取输入框的用户名和密码
		var uname=this.uname;
		var upwd=this.upwd;
		console.log(uname);
		console.log(upwd);
		// 发送ajax请求
		var url="http://127.0.0.1:3000/Login?uname="+uname+"&upwd="+upwd;
		this.axios.get(url).then((result)=>{
			console.log(result);
			 if(result.data.code == 1){
          this.$router.push("/Pay");
       }else{
        Toast("用户名或密码有误")
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
        margin:0 auto;
        border-bottom-width:none;
        background-color:#fff;
        opacity:0.8;
        color:rgb(161, 161, 161);
				width:70%;
      }
      .mui-input-row input{
        color:rgb(170, 168, 168);
				width:50%;
				text-align:center;
      }
     .mui-input-row label{
        color:rgb(184, 182, 182);
				width:50%;
				text-align:right;
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