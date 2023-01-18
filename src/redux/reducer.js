import {SET_SESSIONS, SET_SESSION_ID} from './action';

const initialState = {
  sessions: [],
  sessionID: 1,
};

export default function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SESSIONS:
      return {...state, sessions: [...state.sessions, action.payload]};

    case SET_SESSION_ID:
      return {...state, sessionID: action.payload};

    default:
      return state;
  }
}
