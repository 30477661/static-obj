import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index/index'
import Search from '../views/search/index'
import My from '../views/my/index'
import SelfData from '../views/my/self-data'
import MyBorrowing from '../views/my/my-borrowing'
import OverdueBook from '../views/my/overdue-book'
import BorrowBooklist from '../views/my/borrow-book-list'
import MyServe from '../views/my/my-serve'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/search',
            name: 'Search',
            component: Search
        },
        {
            path: '/my',
            name: 'my',
            component: My
        },
        {
            path: '/self-data',
            name: 'SelfData',
            component: SelfData
        },
        {
            path: '/my-borrowing',
            name: 'MyBorrowing',
            component: MyBorrowing
        },
        {
            path: '/overdue-book',
            name: 'OverdueBook',
            component: OverdueBook
        },
        {
            path: '/borrow-book-list',
            name: 'BorrowBooklist',
            component: BorrowBooklist
        },
        {
            path: '/my-serve',
            name: 'MyServe',
            component: MyServe
        }
    ]
})