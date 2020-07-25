import {
  CREATE_ACTIVITY,
  CREATE_ACTIVITY_SUCCESS,
  CREATE_ACTIVITY_ERROR,
  GET_ALL_ACTIVITIES,
  GET_ALL_ACTIVITIES_SUCCESS,
  GET_ALL_ACTIVITIES_ERROR,
  EDIT_ACTIVITY,
  EDIT_ACTIVITY_SUCCESS,
  EDIT_ACTIVITY_ERROR,
  DELETE_ACTIVITY,
  DELETE_ACTIVITY_SUCCESS,
  DELETE_ACTIVITY_ERROR,
} from "../actions/types";

const initialState = {
  loading: false,
  message: "",
  error: "",
  activities: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ACTIVITY:
      return {
        ...state,
        loading: true,
        error: "",
        message: "",
      };
    case CREATE_ACTIVITY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        message: action.payload.message,
      };
    case CREATE_ACTIVITY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        message: "",
      };
    case GET_ALL_ACTIVITIES:
      return {
        ...state,
        loading: true,
        error: "",
        message: "",
      };
    case GET_ALL_ACTIVITIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        activities: action.payload.data,
      };
    case GET_ALL_ACTIVITIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case EDIT_ACTIVITY:
      return {
        ...state,
        loading: true,
        error: "",
        message: "",
      };
    case EDIT_ACTIVITY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        message: action.payload.message,
      };
    case EDIT_ACTIVITY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        message: "",
      };
    case DELETE_ACTIVITY:
      return {
        ...state,
        loading: true,
        error: "",
        message: "",
      };
    case DELETE_ACTIVITY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        message: action.payload.message,
      };
    case DELETE_ACTIVITY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        message: "",
      };

    default:
      return state;
  }
};
