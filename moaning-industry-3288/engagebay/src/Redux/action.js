import axios from "axios";

const get_data_request = () => {
  return {
    type: "DATA_REQUEST",
  };
};

const get_data_success = (payload) => {
  return {
    type: "DATA_SUCCESS",
    payload,
  };
};

const get_data_error = () => {
  return {
    type: "DATA_ERROR",
  };
};

const post_data_request = () => {
  return {
    type: "POST_DATA_REQUEST",
  };
};

export const GetData = (dispatch) => {
  dispatch(get_data_request);
  axios
    .get("http://localhost:8080/users")
    .then((r) => dispatch(get_data_success(r.data)))
    .catch((e) => dispatch(get_data_error));
};

export const PostData = (data) => (dispatch) => {
  dispatch(post_data_request);
  axios
    .post("http://localhost:8080/users", data)
    .then((r) => GetData)
    .catch((e) => dispatch(get_data_error));
  dispatch(GetData);
};
