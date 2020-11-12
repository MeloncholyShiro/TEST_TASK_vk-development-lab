import { loadingBarReducer } from 'react-redux-loading-bar';
import { Action, combineReducers } from 'redux';
import { ThunkAction } from 'redux-thunk';

export const rootReducer = combineReducers({
    loadingBar: loadingBarReducer,
});

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export type RootState = ReturnType<typeof rootReducer>;
