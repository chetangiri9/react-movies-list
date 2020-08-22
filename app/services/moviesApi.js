import { generateApiClient } from '@utils/apiUtils';
const moviesApi = generateApiClient('sellgo');

export const getMoviesList = term => moviesApi.get(`/api/movies/search?Title=${term}`);
