import * as types from "./constants";

const initialState = {
  all: []
};

function teeTimesReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_ALL_TEE_TIMES_PENDING:
    case types.ADD_TEE_TIMES_PENDING:
    case types.REMOVE_TEE_TIMES_PENDING:
      return state;

    case types.FETCH_ALL_TEE_TIMES_FAILED:
    case types.ADD_TEE_TIMES_FAILED:
    case types.REMOVE_TEE_TIMES_FAILED:
      return {
        ...state,
        err: action.payload
      };

    case types.FETCH_ALL_TEE_TIMES_SUCCESS:
      return {
        ...state,
        all: action.payload
      };

    case types.ADD_TEE_TIMES_SUCCESS:
      return {
        ...state,
        all: [action.payload, ...state.all]
      };

    case types.REMOVE_TEE_TIMES_SUCCESS:
      return {
        ...state,
        all: state.all.filter(teeTime => teeTime.id === action.payload.id)
      };

    default:
      return state;
  }
}
export default teeTimesReducer;
