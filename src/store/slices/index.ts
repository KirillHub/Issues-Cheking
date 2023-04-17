import { combineReducers, Reducer } from 'redux';
import { RootState } from '../../types/redux';
import testRedux from './issues';

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  userLink: testRedux
});

export default rootReducer;
