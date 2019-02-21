import * as ActionTypes from '../types';
import axios from 'axios';
import * as apiUrl from '../api';

export const search = (term) => {
	return (dispatch) => {
		return axios.get(apiUrl.search(term))
			.then(response => {
					return dispatch(searchSuccess(response.data))
			})
			.catch(error => {
					dispatch(searchError(error))
			});
	};
};

export const searchSuccess = (data) => ({
	type: ActionTypes.SEARCH_SUCCESS,
	payload: data
});

export const searchError = (error) => ({
	type: ActionTypes.SEARCH_ERROR,
	payload: error
});