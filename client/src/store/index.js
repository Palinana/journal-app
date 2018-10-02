import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import entry from './entry';
import user from './user';

const reducer = combineReducers({
    entry,
    user
});
const middleware = composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    createLogger({collapsed: true})
));
const store = createStore(reducer, middleware);

export default store;
export * from './entry';
export * from './user';