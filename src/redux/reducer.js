import {ADD_SESSION, DELETE_SESSION, UPDATE_SESSION} from './action';

const initialState = {
  sessions: [],
};

export default function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SESSION:
      return {...state, sessions: [...state.sessions, action.payload]};

    case DELETE_SESSION:
      const deletedObjectIndex = state.sessions.findIndex(
        obj => obj.id === action.payload.id,
      );
      const deletedNewArray = state.sessions.filter(
        item => item.id !== action.payload.id,
      );
      deletedNewArray.forEach(element => {
        if (element.id > deletedObjectIndex + 1) {
          element.id -= 1;
        }
      });

      return {
        ...state,
        sessions: deletedNewArray,
      };

    case UPDATE_SESSION:
      const changedIndex = state.sessions.findIndex(
        item => item.id === action.payload.id,
      );
      const newArray = [...state.sessions];
      newArray[changedIndex] = action.payload;
      return {
        ...state,
        sessions: newArray,
      };

    default:
      return state;
  }
}
