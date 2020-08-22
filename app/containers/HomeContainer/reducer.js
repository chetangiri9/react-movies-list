/*
 *
 * HomeContainer reducer
 *
 */
import produce from 'immer';
import { createActions } from 'reduxsauce';
import get from 'lodash/get';

export const { Types: homeContainerTypes, Creators: homeContainerCreators } = createActions({
  requestGetMovies: ['movieName'],
  successGetMovies: ['data'],
  failureGetMovies: ['error'],
  clearMovies: ['imdbId']
});
export const initialState = { movieName: null, moviesData: [], moviesError: null };

/* eslint-disable default-case, no-param-reassign */
export const homeContainerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case homeContainerTypes.REQUEST_GET_MOVIES:
        draft.movieName = action.movieName;
        draft.moviesData = [];
        break;
      case homeContainerTypes.CLEAR_MOVIES:
        draft.moviesData = state.moviesData.filter(item => {
          return action.imdbId !== item.imdbId;
        });
        break;
      case homeContainerTypes.SUCCESS_GET_MOVIES:
        draft.moviesData = action.data.data;
        break;
      case homeContainerTypes.FAILURE_GET_MOVIES:
        draft.moviesError = get(action.error, 'message', 'something_went_wrong');
        break;
    }
  });

export default homeContainerReducer;
