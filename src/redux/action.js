export const ADD_SESSION = 'SET_SESSION';
export const DELETE_SESSION = 'DELETE_SESSION';
export const UPDATE_SESSION = 'UPDATE_SESSION';

export const AddSession = sessions => {
  return {
    type: ADD_SESSION,
    payload: sessions,
  };
};

export const DeleteSession = sessions => {
  return {
    type: DELETE_SESSION,
    payload: sessions,
  };
};

export const UpdateSession = sessions => {
  return {
    type: UPDATE_SESSION,
    payload: sessions,
  };
};
