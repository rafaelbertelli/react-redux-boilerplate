export const bootstrap = props => dispatch => {
  dispatch({
    type: 'mobi/BOOTSTRAP',
  });
};

export const loading = param => (dispatch, getState) => {
  console.log('It is alive!!!', param, getState());

  dispatch({
    type: 'mobi/LOADING',
    param,
  });
};
