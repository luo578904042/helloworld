import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick';

//Vue.config.productionTip = false
import 'common/stylus/index.styl'

fastclick.attach(document.body);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// import app from 'app';
// new Vue({
//   el: '#app',// 挂载点
//   data:{// 数据
//       type :1
//   },
//   template:"<div></div>",// 模板
//   components:{//引入组件
//     app
//   }
// })

// el 生成的实例对象  挂载id
// template 对应模板
// data 组件数据
