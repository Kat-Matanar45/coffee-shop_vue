const goodsItem = {
    state: {
        goodsItem: []
    },
    mutations: {
        setGoods(state, goods) {
          state.goodsItem = goods;
        }
      },
      actions: {
        updateGoods({ commit }, goods) {
          commit('setGoods', goods); 
        }
      }
}

export default goodsItem