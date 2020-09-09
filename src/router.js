import {
    createRouter,
    createWebHistory
} from 'vue-router'


import FakeView from './components/FakeView.vue'
import Information from './views/Information.vue'
import DTPlatform from './views/DTPlatform.vue'
import MicroClass from './views/MicroClass.vue'
import DigitalCampus from './views/DigitalCampus.vue'
import RJLX from './views/RJLX.vue'
import Develop from './views/Develop.vue'
import Others from './views/Others.vue'
import Motion from './views/Motion.vue'
import Illustrations from './views/Illustrations.vue'
import Practice from './views/Practice.vue'
import Photography from './views/Photography.vue'
import Home from './views/Home.vue'

const routes = [{
    path: '/information',
    component: Information
},
{
    path: '/works',
    component: FakeView,
    children: [{
        path: 'DTPlatform',
        component: DTPlatform
    },
    {
        path: 'MicroClass',
        component: MicroClass
    },
    {
        path: 'DigitalCampus',
        component: DigitalCampus
    },
    {
        path: 'RJLX',
        component: RJLX
    },
    {
        path: 'Develop',
        component: Develop
    },
    {
        path: 'Others',
        component: Others
    },
    {
        path: 'Motion',
        component: Motion
    },
    {
        path: 'Illustrations',
        component: Illustrations
    },
    {
        path: 'Practice',
        component: Practice
    },
    {
        path: 'Photography',
        component: Photography
    }]
}]

export default createRouter({
    history: createWebHistory(),
    routes: [
        ...routes,
        {
            path: '/',
            component: Home
        },
    ]
})
