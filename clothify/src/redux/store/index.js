import { createStore, combineReducers } from 'redux';
import cartReducer from '../reducers/cartReducer';
import searchReducer from '../reducers/searchReducers';

const rootReducer = combineReducers({
  cart: cartReducer,
  search: searchReducer,
});

const store = createStore(rootReducer);

export default store;
