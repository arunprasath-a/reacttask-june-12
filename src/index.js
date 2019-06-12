import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "./store/reducer/reducer";
import RouterComponent from "./router/router";
import 'bootstrap/dist/css/bootstrap.min.css';
import {combineReducers} from "redux";
import agGridReducer from "../src/store/reducer/reducer-agGridData";

const allReducers = combineReducers({
    mainReducer : reducer,
    agGridReducer : agGridReducer
});

const store =createStore(allReducers);

ReactDOM.render(<Provider store={store}><RouterComponent /></Provider>, document.getElementById('root'));


serviceWorker.unregister();
