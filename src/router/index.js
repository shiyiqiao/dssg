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
      name:'编目管理/目录管理',
      component: catalogManage
    },
    {
      path:'/bmgl/dataDictionaryManage',
      name:'编目管理/数据字典管理',
      component: dataDictionaryManage
    },
    {
      path:'/bmgl/dataManage',
      name:'编目管理/数据元管理',
      component: dataManage
    },
    {
      path:'/mhgl/recommendManage',
      name:'门户管理/推荐管理',
      component: recommendManage
    },
    {
      path:'/rjsj/interchangeDiary',
      name:'日记审计/交换日志',
      component: interchangeDiary
    },
    {
      path:'/rjsj/operateDiary',
      name:'日记审计/操作日志',
      component: operateDiary
    },
    {
      path:'/rjsj/serveDiary',
      name:'日记审计/服务日志',
      component: serveDiary
    },
    {
      path:'/xtgl/apiListMonitor',
      name:'系统管理/API接口监控',
      component: apiListMonitor
    },
    {
      path:'/xtgl/interchangeDutyMonitor',
      name:'系统管理/交换任务监控',
      component: interchangeDutyMonitor
    },
    {
      path:'/xtgl/keywordsFilter',
      name:'系统管理/敏感词过滤',
      component: keywordsFilter
    },
    {
      path:'/xtgl/messageManage',
      name:'系统管理/消息管理',
      component: messageManage,
      params:{parentName:"系统管理"}
    },
    {
      path:'/xtgl/roleManage',
      name:'系统管理/角色管理',
      component: roleManage
    },
    {
      path:'/xtgl/userManage',
      name:'系统管理/用户管理',
      component: userManage
    },
    {
      path:'/xtjk/actualTimeMonitor',
      name:'系统监控/实时监控',
      component: actualTimeMonitor
    },
    {
      path:'/xtjk/publishResourceAnalyse',
      name:'系统监控/发布资源分析',
      component: publishResourceAnalyse
    },
    {
      path:'/xtjk/subscribeResourceAnalyse',
      name:'系统监控/订阅资源分析',
      component: subscribeResourceAnalyse
    },
    {
      path:'/zwgl/equipmentManage',
      name:'组网管理/设备管理',
      component: equipmentManage
    },
    {
      path:'/zwgl/resourceRegionManage',
      name:'组网管理/资源域管理',
      component: resourceRegionManage
    },
    {
      path:'/zwgl/unitManage',
      name:'组网管理/单位管理',
      component: unitManage
    },
    {
      path:'/zygl/apiApplication',
      name:'资源管理/我的API应用',
      component: apiApplication
    },
    {
      path:'/zygl/dataResourceManage',
      name:'资源管理/数据源管理',
      component: dataResourceManage
    },
    {
      path:'/zygl/publishResource',
      name:'资源管理/发布资源',
      component: publishResource
    },
    {
      path:'/zygl/subscribeExamine',
      name:'资源管理/订阅审批',
      component: subscribeExamine
    },
    {
      path:'/zygl/subscribeResource',
      name:'资源管理/订阅资源',
      component: subscribeResource
    }
  ]
})
