import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from "redux"
import {Provider} from "react-redux"
import {combineWithDevTools} from "react-devtools-extension"

const store = createStore(
    rootReducer,
    combineWithDevTools()
)
// import * as serviceWorker from './serviceWorker';
// const hello = ()=>({welcome: "hello"})

// const store = createStore(hello)
// console.log(store.getState())

ReactDOM.render(
<Provider store = {store}>
<App />, 
</Provider>
,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
