import Vue from 'vue'
import Vuex from 'vuex'

import links from './links'
import goodspage from './goodspage'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    links,
    goodspage
  }
})

export default store