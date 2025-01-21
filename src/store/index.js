import Vue from 'vue'
import Vuex from 'vuex'

import links from './links'
import goodspage from './goodspage'
import bestseller from './bestseller'
import ourCoffee from './ourCoffee'
import goodsItem from './goodsItem'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    links,
    goodspage,
    bestseller,
    ourCoffee,
    goodsItem
  }
})

export default store