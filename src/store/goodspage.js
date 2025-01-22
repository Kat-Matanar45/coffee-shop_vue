import { v4 as uuidv4 } from 'uuid';

const goodspage = {
  state: {
    products: [{
        id: uuidv4(),
        image: '',
        name: 'Solimo Coffee Beans 2kg',
        country: 'Brazil',
        price: 10.73
      },
      {
        id: uuidv4(),
        image: '',
        name: 'Presto Coffee Beans 1kg',
        country: 'Brazil',
        price: 15.99
      },
      {
        id: uuidv4(),
        image: '',
        name: 'AROMISTICO Coffee 1kg',
        country: 'Brazil',
        price: 6.99
      },
      {
        id: uuidv4(),
        image: '',
        name: 'Solimo Coffee Beans 2kg',
        country: 'Brazil',
        price: 10.73
      },
      {
        id: uuidv4(),
        image: '',
        name: 'Solimo Coffee Beans 2kg',
        country: 'Brazil',
        price: 10.73
      },
      {
        id: uuidv4(),
        image: '',
        name: 'Solimo Coffee Beans 2kg',
        country: 'Brazil',
        price: 10.73
      }
    ]
  },
  mutations: {
    setGoods(state, data) {
      state.products = data
    }
  },
  actions: {
    setGoods ({commit}, data) {
      commit('setGoods', data)
    }
  },
  getters: {
    getGoodProducts(state) {
      return state.products
    },
    getGoodsById(state) {
      return (id) => {
          return state.products.find((coffee) => coffee.id === id)
      }
  }
  }
}

export default goodspage
