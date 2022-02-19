import { createStore, applyMiddlewaree } from "redux";
import logger from "redux-logger";//middle eare
import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddlewaree(...middlewares));


export default store;