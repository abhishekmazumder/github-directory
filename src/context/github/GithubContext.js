import { createContext, useReducer, Children } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export const GithubProvider = ({ children }) => {
	const initialState = {
		users: [],
		loading: false,
	};

	const [state, dispatch] = useReducer(githubReducer, initialState);

	//Set loading
	const setLoading = () => {
		dispatch({
			type: 'SET_LOADING',
		});
	};

	// Search users
	const searchUsers = async text => {
		setLoading();
		const response = await fetch(`${GITHUB_URL}/search/users?q=${text}`);
		const { items } = await response.json();
		dispatch({ type: 'GET_USERS', payload: items });
	};

	// Clear Users Result
	const clearUsers = () => {
		dispatch({ type: 'CLEAR_USERS' });
	};

	return (
		<GithubContext.Provider
			value={{ users: state.users, loading: state.loading, searchUsers, clearUsers }}
		>
			{children}
		</GithubContext.Provider>
	);
};

export default GithubContext;
