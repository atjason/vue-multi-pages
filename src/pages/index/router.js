import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const EmptyComponent = { template: `<div></div>` }
const TestComponent = { template: `<p>I'm the component for a test route.</p>` }
const NotFound = { template: `<p>404 Not Found</p>` }

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '', component: EmptyComponent },
    { path: '/test', component: TestComponent },
    { path: '*', component: NotFound },
  ]
})
