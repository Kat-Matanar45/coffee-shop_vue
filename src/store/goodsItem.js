const goodsItem = {
    state: {
        goodsItem: []
    },
    mutations: {
      updateGoods(state, goods) {
          state.goodsItem = goods;
          console.log(state.goodsItem)
        }
      },
      actions: {
        updateGoods({ commit }, goods) {
          commit('updateGoods', goods);
        }
      }
}

export default goodsItem