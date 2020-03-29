import BootcampsActionTypes from '../bootcamps.type';

const initialState = {
  bootcampData: null,
  loading: false,
  error: false,
};

const bootcampDetailsReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case BootcampsActionTypes.FETCH_BOOTCAMP_DETAILS_START:
      return {
        ...state,
        bootcampData: null,
        loading: true,
        error: false,
      };
    case BootcampsActionTypes.FETCH_BOOTCAMP_DETAILS_SUCCESS:
      return {
        ...state,
        bootcampData: payload.data,
        loading: false,
        error: false,
      };
    case BootcampsActionTypes.FETCH_BOOTCAMP_DETAILS_FAILURE:
      return {
        ...state,
        bootcampData: null,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default bootcampDetailsReducer;
