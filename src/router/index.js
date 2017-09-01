import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import catalogManage from '@/components/catalogManage'
import resManage from '@/components/resManage'
import networkManage from '@/components/networkManage'
import logAudit from '@/components/logAudit'
import sysMonitoring from '@/components/sysMonitoring'
import sysManage from '@/components/sysManage'
import portalManage from '@/components/portalManage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'*',
      name:'catalogManage',
      component: catalogManage
    },
    {
      path:'/resManage',
      name:'resManage',
      component: resManage
    },
    {
      path:'/networkManage',
      name:'networkManage',
      component: networkManage
    },
    {
      path:'/logAudit',
      name:'logAudit',
      component: logAudit
    },
    {
      path:'/sysMonitoring',
      name:'sysMonitoring',
      component: sysMonitoring
    },
    {
      path:'/sysManage',
      name:'sysManage',
      component: sysManage
    },
    {
      path:'/portalManage',
      name:'portalManage',
      component: portalManage
    }
  ]
})
