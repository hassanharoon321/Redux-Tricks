const redux = require("redux")

const createStore = redux.createStore()

//intentions
const BUY_CAKE = "BUY_CAKE"  
const BUY_ICECREAM = "BUY_ICECREAM"

//actions
function buyCake() {
    return {
        type: BUY_CAKE,
        info: "First redux action"
    }
}

function buyIcecream(){
    return{
        type:BUY_ICECREAM,
    }
}

//(preivousState,action) => newState 

const initialState = {
    numOfCakes: 10,
    numberOfIcreams: 20
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes = state.numOfCakes - 1
        }
        case BUY_ICECREAM: return {
            ...state,
            numberOfIcreams = state.numberOfIcreams - 1
        }
        default: return state
    }
}


const store = createStore(reducer)
console.log("Initial State", store.getState())
const unSubscribe = store.subscribe(() => {
    console.log("updated state", store.getState())
})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
unSubscribe()
