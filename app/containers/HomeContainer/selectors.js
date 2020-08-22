import { createSelector } from 'reselect';
import get from 'lodash/get';
import { initialState } from './reducer';

/**
 * Direct selector to the homeContainer state domain
 */

const selectHomeContainerDomain = state => state.homeContainer || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by HomeContainer
 */

export const selectHomeContainer = () =>
  createSelector(
    selectHomeContainerDomain,
    substate => substate
  );

export const selectMoviesData = () =>
  createSelector(
    selectHomeContainerDomain,
    substate => get(substate, 'moviesData', null)
  );

export const selectMoviesError = () =>
  createSelector(
    selectHomeContainerDomain,
    substate => get(substate, 'moviesError', null)
  );

export const selectMovieName = () =>
  createSelector(
    selectHomeContainerDomain,
    substate => get(substate, 'movieName', null)
  );

export default selectHomeContainer;
