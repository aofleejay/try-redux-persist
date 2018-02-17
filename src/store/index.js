import { createStore } from 'redux'
import rootReducer from '../reducers'
import { loadState, saveState } from '../lib/localStorage'

const persistStore = loadState()
const store = createStore(rootReducer, persistStore)

store.subscribe(() => {
  saveState(store.getState())
})

export default store
