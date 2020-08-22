import React, { useEffect, memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { injectIntl } from 'react-intl';
import { useInjectSaga } from 'utils/injectSaga';
import { selectHomeContainer, selectMoviesData, selectMoviesError, selectMovieName } from './selectors';
import { homeContainerCreators } from './reducer';
import saga from './saga';
import SearchBar from '@app/components/SearchBar';
import MoviesList from '@app/components/MoviesList';

export function HomeContainer({ dispatchMovies, dispatchClearMovie, intl, moviesData = [], moviesError, movieName }) {
  useInjectSaga({ key: 'homeContainer', saga });
  const [term, setTerm] = useState();

  useEffect(() => {
    dispatchMovies(term);
  }, [term]);

  const onSearchSubmit = term => {
    setTerm(term);
  };

  const onDeleteClicked = imdbId => {
    dispatchClearMovie(imdbId);
  };

  return (
    <div style={{ padding: '50px' }}>
      <SearchBar onSubmit={onSearchSubmit} />
      <MoviesList movies={moviesData} handleDelete={onDeleteClicked} />
    </div>
  );
}

HomeContainer.propTypes = {
  dispatchMovies: PropTypes.func,
  dispatchClearMovie: PropTypes.func,
  intl: PropTypes.object,
  moviesData: PropTypes.object,
  moviesError: PropTypes.object,
  movieName: PropTypes.string
};

const mapStateToProps = createStructuredSelector({
  homeContainer: selectHomeContainer(),
  moviesData: selectMoviesData(),
  moviesError: selectMoviesError(),
  movieName: selectMovieName()
});

function mapDispatchToProps(dispatch) {
  const { requestGetMovies, clearMovies } = homeContainerCreators;
  return {
    dispatchMovies: term => dispatch(requestGetMovies(term)),
    dispatchClearMovie: imdbId => dispatch(clearMovies(imdbId))
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  injectIntl,
  withConnect,
  memo
)(HomeContainer);

export const HomeContainerTest = compose(injectIntl)(HomeContainer);
