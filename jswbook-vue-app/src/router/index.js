import Vue from 'vue'
import Router from 'vue-router'
/////////////// index ////////////////////
import Index from '../views/index/index'
import Login from '../views/login/login'
import NewBook from '../views/index/new-book'
import GoodBook from '../views/index/good-book'
import BookDetail from '../views/index/book-detail'
import BorrowRanking from '../views/index/borrow-ranking'
import NewsList from '../views/index/news-list'
import NewsDetail from '../views/index/news-detail'
import LibSystem from '../views/index/lib-system'
/////////////// search ////////////////////
import Search from '../views/search/index'
import HighlevelSearch from '../views/search/highlevel-search'
import SearchResult from '../views/search/search-result'
/////////////// news ////////////////////
import News from '../views/news/index'
import MessageDetail from '../views/news/message-detail'
/////////////// notes ////////////////////
import Notes from '../views/notes/index'
/////////////// my ///////////////////////
import My from '../views/my/index'
import SelfData from '../views/my/self-data'
import ChangePassword from '../views/my/change-password'
import ReaderLoss from '../views/my/reader-loss'
import MyBorrowing from '../views/my/my-borrowing'
import OverdueBook from '../views/my/overdue-book'
import BorrowBooklist from '../views/my/borrow-book-list'
import MyServe from '../views/my/my-serve'
import MyPreBorrow from '../views/my/my-pre-borrow'
import Evaluation from '../views/my/evaluation'
import MyEvaluation from '../views/my/my-evaluation'
import MyMissBuy from '../views/my/my-miss-buy'
import MyMissBuylist from '../views/my/my-miss-buylist'
import Help from '../views/my/help'
import HelpDescription from '../views/my/help-description'
import MyCollect from '../views/my/my-collect'

Vue.use(Router)

export default new Router({
    routes: [
        ///////////////////////////////////////////////
        /////////////// index  s-- ////////////////////
        {
            path: '/',
            name: '/',
            component: Index
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/new-book',
            name: 'NewBook',
            component: NewBook
        },
        {
            path: '/good-book',
            name: 'GoodBook',
            component: GoodBook
        },
        {
            path: '/book-detail',
            name: 'BookDetail',
            component: BookDetail
        },
        {
            path: '/borrow-ranking',
            name: 'BorrowRanking',
            component: BorrowRanking
        },
        {
            path: '/news-list',
            name: 'NewsList',
            component: NewsList
        },
        {
            path: '/news-detail',
            name: 'NewsDetail',
            component: NewsDetail
        },
        {
            path: '/lib-system',
            name: 'LibSystem',
            component: LibSystem
        },
        ///////////////////////////////////////////////
        /////////////// search  s-- ///////////////////
        {
            path: '/search',
            name: 'Search',
            component: Search
        },
        {
            path: '/highlevel-search',
            name: 'HighlevelSearch',
            component: HighlevelSearch
        },
        {
            path: '/search-result',
            name: 'SearchResult',
            component: SearchResult
        },
        ///////////////////////////////////////////////
        /////////////// news  s-- ///////////////////
        {
            path: '/news',
            name: 'News',
            component: News
        },
        ///////////////////////////////////////////////
        /////////////// notes  s-- ///////////////////
        {
            path: '/notes',
            name: 'Notes',
            component: Notes
        },
        {
            path: '/message-detail',
            name: 'MessageDetail',
            component: MessageDetail
        },
        ///////////////////////////////////////////////
        /////////////// my  s-- ///////////////////////
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
            path: '/change-password',
            name: 'ChangePassword',
            component: ChangePassword
        },
        {
            path: '/reader-loss',
            name: 'ReaderLoss',
            component: ReaderLoss
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
        },
        {
            path: '/my-pre-borrow',
            name: 'MyPreBorrow',
            component: MyPreBorrow
        },
        {
            path: '/evaluation',
            name: 'Evaluation',
            component: Evaluation
        },
        {
            path: '/my-evaluation',
            name: 'MyEvaluation',
            component: MyEvaluation
        },
        {
            path: '/help',
            name: 'Help',
            component: Help
        },
        {
            path: '/help-description',
            name: 'HelpDescription',
            component: HelpDescription
        },
        {
            path: '/my-miss-buylist',
            name: 'MyMissBuylist',
            component: MyMissBuylist
        },
        {
            path: '/my-miss-buy',
            name: 'MyMissBuy',
            component: MyMissBuy
        },
        {
            path: '/my-collect',
            name: 'MyCollect',
            component: MyCollect
        },
        /////////////// my  e-- ///////////////////////
        ///////////////////////////////////////////////
    ]
})