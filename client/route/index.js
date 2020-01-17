import VueRouter from "vue-router";
import Vue from 'vue';
Vue.use(VueRouter);


const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  {
    path: '/home',
    component: () => import('../src/components/home.vue')
  },
  {
    path: '/foo',
    component: Foo
  },
  {
    path: '/bar',
    component: Bar
  }
];
export default new VueRouter({
  mode: 'history',//使用路由的history模式，就不会产生默认的hash模式很丑的url
  routes
});