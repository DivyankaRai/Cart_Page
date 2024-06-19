import { SET_SEARCH } from '../actionTypes/searchActionTypes';

export const setSearch = (search) => ({
  type: SET_SEARCH,
  payload: search,
});
