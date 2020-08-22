import { put, call, takeLatest } from 'redux-saga/effects';
import { getMoviesList } from '@app/services/moviesApi';
import { homeContainerTypes, homeContainerCreators } from './reducer';

const { REQUEST_GET_MOVIES } = homeContainerTypes;
const { successGetMovies, failureGetMovies } = homeContainerCreators;
export function* getMovies(action) {
  const response = yield call(getMoviesList, action.movieName);
  const { data, ok } = response;
  if (ok) {
    yield put(successGetMovies(data));
  } else {
    yield put(failureGetMovies(data));
  }
}
// Individual exports for testing
export default function* homeContainerSaga() {
  yield takeLatest(REQUEST_GET_MOVIES, getMovies);
}
