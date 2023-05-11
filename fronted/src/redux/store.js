import { applyMiddleware, combineReducers, legacy_createStore,compose } from "redux";
import thunk from "redux-thunk";
import { appReducer } from "./app/appReducer";
import { authReducer } from "./auth/authReducer";
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const rootReducer=combineReducers({
    app:appReducer,
    auth:authReducer
})




export const store=legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))