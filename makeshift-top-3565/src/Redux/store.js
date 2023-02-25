import {legacy_createStore,applyMiddleware,combineReducers,compose} from "redux"

import {reducer as collection} from "./Product/reducer"



import thunk from "redux-thunk"

const rootReducer =combineReducers({collection})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

export {store};
