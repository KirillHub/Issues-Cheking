import { combineReducers, Reducer } from 'redux';
import { RootState } from '../../types/redux';
import testRedux from './link.test';

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  userLink: testRedux
});

export default rootReducer;
