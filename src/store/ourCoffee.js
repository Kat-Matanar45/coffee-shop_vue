import {
  v4 as uuidv4
} from 'uuid';

const ourCoffee = {
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
    ],
    searchValue: '',
    sortValue: ''
  },
  mutations: {
    setCoffeeData(state, data) {
      state.products = data
    },
    setSearchValue(state, value) {
      state.searchValue = value
    },
    setSortValue(state, value) {
        state.sortValue = value
      },
  },
  actions: {
    setCoffeeData({commit}, data) {
      commit('setCoffeeData', data)
    },
    setSearchValue({commit}, value) {
      commit('setSearchValue', value)
    },
    setSortValue({commit}, value) {
        commit('setSortValue', value)
      }
  },
  getters: {
    getOurCoffee(state) {
      return state.products
    //   .filter(item => item.name.toLowerCase().includes(state.searchValue.toLowerCase()))
    //   .filter(item => item.country.toLowerCase().includes(state.sortValue.toLowerCase()))
    },
    getCoffeeById(state) {
      return (id) => {
        return state.products.find((coffee) => coffee.id === id)
      }
    },
    getSearchValue(state) {
      return state.searchValue
    },
  }
}

export default ourCoffee
