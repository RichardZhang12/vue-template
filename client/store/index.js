import Vuex from "vuex"
import Vue from 'vue'
import getters from './getters'
import user from './modules/moduleA'


Vue.use(Vuex);


const store = new Vuex.Store({
  //store.state.user[...]模块状态在页面调用方式，应该是
  modules: {
    user
  },
  state: {
    count: 1,
    //store.state.app[...]state中app状态的使用
    app: {
      slider: 'slider',
      bar: 'bar',
      foo: 'foo'
    }
  },
  getters,
  // mutations中通过store.commit("事件名")触发回调函数
  // mutations中必须是同步函数
  /*
  state 状态参数，
  payload 载荷，传入的额外参数
  */
  mutations: {

  },
  // actions类似与mutations，不同在于：
  //1.actions中提交的是mutations，而不是直接变更状态。
  //2.actions可以包含任意异步操作
  // 2.actions可以包含任意异步操作
  //Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象
  actions: {

    
  }

})

export {
  store
}