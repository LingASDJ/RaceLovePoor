// 配置路由相关的信息
import VueRouter from 'vue-router'
import Vue from 'vue'

//{Main Pages}
import Header from '../components/Header/index'
import Footer from '../components/Footer/index'
import MidPass from '../components/MidPass/index'

//{Pages}
import CardCat from '../pages/CardCat/index'
import Login from '../pages/Login/login'
import Buy from '../pages/Buy/Buy'
import Details from '../pages/Details/Index'
import AboutX from '../pages/Get/About'
import Story from '../pages/Get/Story'

// 1.通过Vue.use(插件)，安装插件
Vue.use(VueRouter)

// 2.创建VueRouter对象
const routes = [{
        path: '/home',
        component: Header
    },
    {
        path: '/about',
        component: Footer
    },
    {
        path: '/index',
        component: MidPass
    },
    {
        path: '/cardcat',
        component: CardCat
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/Buy',
        component: Buy,
    },
    {
        path: '/Details',
        component: Details,
    },
    {
        path: '/AboutX',
        component: AboutX,
    },
    {
        path: '/Story',
        component: Story
    },
]

const router = new VueRouter({
    // 配置路由和组件之间的应用关系
    routes
})

// 3.将router对象传入到Vue实例，即导出，然后在main.js中导入
export default router