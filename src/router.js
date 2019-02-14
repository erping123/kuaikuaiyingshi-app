import Vue from 'vue'
import Router from 'vue-router'
// import HelloContainer from "./components/HelloWorld.vue"
import Test from "./components/Test.vue"
//1:引入自定义组件
// import List from "./components/listContainer.vue"
import Home from "./components/tabbar/Home.vue"
import List from "./components/product/List.vue"
import Cart from "./components/cart/Cart.vue"
import Login from "./components/user/Login.vue"
import Register from "./components/user/Register.vue"
import Profile from "./components/tabbar/Profile.vue"
import Playing from "./components/tabbar/Playing.vue"
import Pay from "./components/pay/Pay.vue"
Vue.use(Router)
export default new Router({
  //2:为组件配置访问路径
  routes: [
    {path:"/Pay",component:Pay},
    {path:"/Playing",component:Playing},
    {path:"/Profile",component:Profile},
    {path:"/Register",component:Register},
    {path:"/Login",component:Login},
    {path:"/Cart",component:Cart},
    {path:"/List",component:List},
    {path:"/Home",component:Home},
    {path:'/',redirect:"/Home"},
    {path:"/Test",component:Test}
  ]
})
