import {createStore, combineReducers , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { todoReducers } from './reduces/todoReducer';
import { tabReducer } from './reduces/tabReducer';
const reducer=combineReducers({
    todos: todoReducers,
    currentTab:tabReducer
});
const middleware=[thunk]
const store=createStore(
 reducer,
 composeWithDevTools(applyMiddleware(...middleware))
)

export default store;