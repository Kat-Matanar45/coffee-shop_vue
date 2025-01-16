import { v4 as uuidv4 } from 'uuid';

const goodspage = {
  state: {
    products: [{
        id: uuidv4(),
        image: 'good-1.jpg',
        name: 'Solimo Coffee Beans 2kg',
        country: 'Brazil',
        price: 10.73
      },
      {
        id: uuidv4(),
        image: 'good-1.jpg',
        name: 'Presto Coffee Beans 1kg',
        country: 'Brazil',
        price: 15.99
      },
      {
        id: uuidv4(),
        image: 'good-1.jpg',
        name: 'AROMISTICO Coffee 1kg',
        country: 'Brazil',
        price: 6.99
      },
      {
        id: uuidv4(),
        image: 'good-1.jpg',
        name: 'Solimo Coffee Beans 2kg',
        country: 'Brazil',
        price: 10.73
      },
      {
        id: uuidv4(),
        image: 'good-1.jpg',
        name: 'Solimo Coffee Beans 2kg',
        country: 'Brazil',
        price: 10.73
      },
      {
        id: uuidv4(),
        image: 'good-1.jpg',
        name: 'Solimo Coffee Beans 2kg',
        country: 'Brazil',
        price: 10.73
      }
    ]
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
