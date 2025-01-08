import Vue from 'vue'
import Vuex from 'vuex'

import links from './links'
import goodspage from './goodspage'
import bestseller from './bestseller'
import ourCoffee from './ourCoffee'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    links,
    goodspage,
    bestseller,
    ourCoffee
  }
})

export default store