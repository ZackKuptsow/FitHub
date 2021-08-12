import { createStoreHook, applymiddleware, compose } from 'redux';
import rootReducer from './reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default configureStore = initialState => {
	const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

	return createStore(
		rootReducer,
		initialState,
		composeEnhancers(applymiddleware(thunk, reduxImmutableStateInvariant()))
	);
};
