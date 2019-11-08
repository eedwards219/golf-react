import * as types from "./constants";
import axios from "axios";
import { BASE_URL } from "./constants";

export const fetchAllTeeTimes = () => async dispatch => {
  dispatch({
    type: types.FETCH_ALL_TEE_TIMES_PENDING
  });
  try {
    let response = await axios.get(BASE_URL);
    dispatch({
      type: types.FETCH_ALL_TEE_TIMES_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ALL_TEE_TIMES_FAILED,
      payload: err
    });
  }
};

export const fetchOneTeeTime = id => async dispatch => {
  dispatch({
    type: types.FETCH_ONE_TEE_TIMES_PENDING
  });
  try {
    let response = await axios.get(BASE_URL + `/${id}`);
    dispatch({
      type: types.FETCH_ONE_TEE_TIMES_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ONE_TEE_TIMES_FAILED,
      payload: err
    });
  }
};

export const addTeeTime = newTeeTime => async dispatch => {
  dispatch({
    type: types.ADD_TEE_TIMES_PENDING
  });
  try {
    let response = await axios.post(BASE_URL, newTeeTime);
    dispatch({
      type: types.ADD_TEE_TIMES_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.ADD_TEE_TIMES_FAILED,
      payload: err
    });
  }
};

export const removeTeeTime = id => async dispatch => {
  dispatch({
    type: types.REMOVE_TEE_TIMES_PENDING
  });
  try {
    let response = await axios.delete(BASE_URL + `/${id}`);
    dispatch({
      type: types.REMOVE_TEE_TIMES_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.REMOVE_TEE_TIMES_FAILED,
      payload: err
    });
  }
};
