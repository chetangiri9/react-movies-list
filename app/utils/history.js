import { createBrowserHistory } from 'history';
const baseUrl = process.env.NODE_ENV === 'production' ? '/react-movies-list' : '/';
const history = createBrowserHistory({ basename: baseUrl });
export default history;
