export const SET_SESSIONS = 'SET_SESSIONS';
export const SET_SESSION_ID = 'SET_SESSION_ID';

export const setSessions = sessions => {
  return {
    type: SET_SESSIONS,
    payload: sessions,
  };
};

export const setSessionID = sessionID => {
  return {
    type: SET_SESSION_ID,
    payload: sessionID,
  };
};
