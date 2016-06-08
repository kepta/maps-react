import { SET_HELLO } from './sample.actions';

const initialState = {
  data: 'initially',
};

export default function sample(state = initialState, action) {
  switch (action.type) {
    case SET_HELLO:
      return Object.assign({}, state, {
        data: action.data,
      });
    default:
      return state;
  }
}
