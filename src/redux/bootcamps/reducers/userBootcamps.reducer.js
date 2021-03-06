import BootcampsActionTypes from 'redux/bootcamps/bootcamps.type';

const initialState = {
  bootcampData: null,
  loading: false,
  error: false,
};

const userBootcampsReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case BootcampsActionTypes.FETCH_USER_BOOTCAMPS_START:
      return {
        ...state,
        bootcampData: null,
        loading: true,
        error: false,
      };
    case BootcampsActionTypes.FETCH_USER_BOOTCAMPS_SUCCESS:
      return {
        ...state,
        bootcampData: payload.data,
        loading: false,
        error: false,
      };
    case BootcampsActionTypes.FETCH_USER_BOOTCAMPS_FAILURE:
      return {
        ...state,
        bootcampData: null,
        loading: false,
        error: payload,
      };
    case BootcampsActionTypes.CREATE_BOOTCAMP_SUCCESS:
      return {
        ...state,
        bootcampData: payload.data,
        loading: false,
        error: false,
      };
    case BootcampsActionTypes.DELETE_USER_BOOTCAMP_SUCCESS:
      return {
        ...state,
        bootcampData: null,
      };
    default:
      return state;
  }
};

export default userBootcampsReducer;
