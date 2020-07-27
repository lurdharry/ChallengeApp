import {
  GET_ALL_ACTIVITIES,
  GET_ALL_ACTIVITIES_SUCCESS,
  GET_ALL_ACTIVITIES_ERROR,
  CREATE_ACTIVITY,
  CREATE_ACTIVITY_SUCCESS,
  CREATE_ACTIVITY_ERROR,
  EDIT_ACTIVITY,
  EDIT_ACTIVITY_SUCCESS,
  EDIT_ACTIVITY_ERROR,
  DELETE_ACTIVITY,
  DELETE_ACTIVITY_SUCCESS,
  DELETE_ACTIVITY_ERROR,
} from "./types";
import apiService from "../../utils/apiService";
import { Actions } from "react-native-router-flux";
import { store } from "../index";
export const getAllActivities = () => dispatch => {
  dispatch({ type: GET_ALL_ACTIVITIES });
  apiService("/activities", "GET")
    .then(response => {
      dispatch({
        type: GET_ALL_ACTIVITIES_SUCCESS,
        payload: response,
      });
    })
    .catch(error => {
      dispatch({
        type: GET_ALL_ACTIVITIES_ERROR,
        payload: error,
      });
    });
};
export const createActivity = data => dispatch => {
  dispatch({ type: CREATE_ACTIVITY });
  apiService("/activities", "POST", data)
    .then(response => {
      dispatch({
        type: CREATE_ACTIVITY_SUCCESS,
        payload: response,
      });
      Actions.result({
        status: "success",
        message: "Activity Created Successfully",
      });
    })
    .catch(error => {
      dispatch({
        type: CREATE_ACTIVITY_ERROR,
        payload: error,
      });
      Actions.result({
        status: "failed",
        message: "Unabale to Create your Activity,Please try again.",
        retry: () => {
          Actions.pop();
          store.dispatch(createActivity(data));
        },
      });
    });
};
export const editActivity = (data, id) => dispatch => {
  dispatch({ type: EDIT_ACTIVITY });
  apiService(`/activities/${id}`, "PUT", data)
    .then(response => {
      dispatch({
        type: EDIT_ACTIVITY_SUCCESS,
        payload: response,
      });
      Actions.result({
        status: "success",
        message: "Activity Edited Successfully",
      });
    })
    .catch(error => {
      dispatch({
        type: EDIT_ACTIVITY_ERROR,
        payload: error,
      });
      Actions.result({
        status: "failed",
        message: "Unabale to Edit this Activity,Please try again.",
        retry: () => {
          Actions.pop();
          store.dispatch(editActivity(data, id));
        },
      });
    });
};
export const deleteActivity = id => dispatch => {
  dispatch({ type: DELETE_ACTIVITY });
  apiService(`/activities/${id}`, "DELETE")
    .then(response => {
      dispatch({
        type: DELETE_ACTIVITY_SUCCESS,
        payload: response,
      });
      Actions.result({
        status: "success",
        message: "Activity Deleted Successfully",
      });
    })
    .catch(error => {
      dispatch({
        type: DELETE_ACTIVITY_ERROR,
        payload: error,
      });
      Actions.result({
        status: "failed",
        message: "Unabale to delete this Activity,Please try again.",
        retry: () => {
          Actions.pop();
          store.dispatch(deleteActivity(id));
        },
      });
    });
};
