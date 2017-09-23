import Vue from 'vue'
import Router from 'vue-router'
import catalogManage from '@/components/bmgl/catalogManage'
import dataDictionaryManage from '@/components/bmgl/dataDictionaryManage'
import dataManage from '@/components/bmgl/dataManage'

import recommendManage from '@/components/mhgl/recommendManage'

import interchangeDiary from '@/components/rjsj/interchangeDiary'
import operateDiary from '@/components/rjsj/operateDiary'
import serveDiary from '@/components/rjsj/serveDiary'

import apiListMonitor from '@/components/xtgl/apiListMonitor'
import interchangeDutyMonitor from '@/components/xtgl/interchangeDutyMonitor'
import keywordsFilter from '@/components/xtgl/keywordsFilter'
import messageManage from '@/components/xtgl/messageManage'
import roleManage from '@/components/xtgl/roleManage'
import userManage from '@/components/xtgl/userManage'

import actualTimeMonitor from '@/components/xtjk/actualTimeMonitor'
import publishResourceAnalyse from '@/components/xtjk/publishResourceAnalyse'
import subscribeResourceAnalyse from '@/components/xtjk/subscribeResourceAnalyse'

import equipmentManage from '@/components/zwgl/equipmentManage'
import resourceRegionManage from '@/components/zwgl/resourceRegionManage'
import unitManage from '@/components/zwgl/unitManage'

import apiApplication from '@/components/zygl/apiApplication'
import dataResourceManage from '@/components/zygl/dataResourceManage'
import publishResource from '@/components/zygl/publishResource'
import subscribeExamine from '@/components/zygl/subscribeExamine'
import subscribeResource from '@/components/zygl/subscribeResource'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'*',
      name:'catalogManage',
      component: catalogManage
    },
    {
      path:'/bmgl/dataDictionaryManage',
      name:'dataDictionaryManage',
      component: dataDictionaryManage
    },
    {
      path:'/bmgl/dataManage',
      name:'dataManage',
      component: dataManage
    },
    {
      path:'/mhgl/recommendManage',
      name:'recommendManage',
      component: recommendManage
    },
    {
      path:'/rjsj/interchangeDiary',
      name:'interchangeDiary',
      component: interchangeDiary
    },
    {
      path:'/rjsj/operateDiary',
      name:'operateDiary',
      component: operateDiary
    },
    {
      path:'/rjsj/serveDiary',
      name:'serveDiary',
      component: serveDiary
    },
    {
      path:'/xtgl/apiListMonitor',
      name:'apiListMonitor',
      component: apiListMonitor
    },
    {
      path:'/xtgl/interchangeDutyMonitor',
      name:'interchangeDutyMonitor',
      component: interchangeDutyMonitor
    },
    {
      path:'/xtgl/keywordsFilter',
      name:'keywordsFilter',
      component: keywordsFilter
    },
    {
      path:'/xtgl/messageManage',
      name:'messageManage',
      component: messageManage
    },
    {
      path:'/xtgl/roleManage',
      name:'roleManage',
      component: roleManage
    },
    {
      path:'/xtgl/userManage',
      name:'userManage',
      component: userManage
    },
    {
      path:'/xtjk/actualTimeMonitor',
      name:'actualTimeMonitor',
      component: actualTimeMonitor
    },
    {
      path:'/xtjk/publishResourceAnalyse',
      name:'publishResourceAnalyse',
      component: publishResourceAnalyse
    },
    {
      path:'/xtjk/subscribeResourceAnalyse',
      name:'subscribeResourceAnalyse',
      component: subscribeResourceAnalyse
    },
    {
      path:'/zwgl/equipmentManage',
      name:'equipmentManage',
      component: equipmentManage
    },
    {
      path:'/zwgl/resourceRegionManage',
      name:'resourceRegionManage',
      component: resourceRegionManage
    },
    {
      path:'/zwgl/unitManage',
      name:'unitManage',
      component: unitManage
    },
    {
      path:'/zygl/apiApplication',
      name:'apiApplication',
      component: apiApplication
    },
    {
      path:'/zygl/dataResourceManage',
      name:'dataResourceManage',
      component: dataResourceManage
    },
    {
      path:'/zygl/publishResource',
      name:'publishResource',
      component: publishResource
    },
    {
      path:'/zygl/subscribeExamine',
      name:'subscribeExamine',
      component: subscribeExamine
    },
    {
      path:'/zygl/subscribeResource',
      name:'subscribeResource',
      component: subscribeResource
    }
  ]
})
