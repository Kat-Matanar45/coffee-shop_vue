import { v4 as uuidv4 } from 'uuid';

const ourCoffee = {
    state: {
        products: [
            {
                id: uuidv4(),
                image: 'coffee-3.jpg',
                name: 'Solimo Coffee Beans 2kg',
                country: 'Brazil',
                price: 10.73
            },
            {
                id: uuidv4(),
                image: 'coffee-3.jpg',
                name: 'Presto Coffee Beans 1kg',
                country: 'Brazil',
                price: 15.99
            },
            {
                id: uuidv4(),
                image: 'coffee-3.jpg',
                name: 'AROMISTICO Coffee 1kg',
                country: 'Brazil',
                price: 6.99
            },
            {
                id: uuidv4(),
                image: 'coffee-3.jpg',
                name: 'Solimo Coffee Beans 2kg',
                country: 'Brazil',
                price: 10.73
            },
            {
                id: uuidv4(),
                image: 'coffee-3.jpg',
                name: 'Solimo Coffee Beans 2kg',
                country: 'Brazil',
                price: 10.73
            },
            {
                id: uuidv4(),
                image: 'coffee-3.jpg',
                name: 'Solimo Coffee Beans 2kg',
                country: 'Brazil',
                price: 10.73
            }
        ]
    },
    mutations: {
        setCoffeeData(state, data) {
            state.products = data
        }
    },
    actions: {
        setCoffeeData({commit}, data) {
           commit('setCoffeeData', data)
        }
    },
    getters: {
        getOurCoffee(state) {
            return state.products
        },
        getCoffeeById(state) {
            return (id) => {
                return state.products.find((coffee) => coffee.id === id)
            }
        }
    }
}

export default ourCoffee