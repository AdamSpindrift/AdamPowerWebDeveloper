import {createStore} from "redux";
import rootReducers from "./01_reducers/index";

const store = createStore(rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;