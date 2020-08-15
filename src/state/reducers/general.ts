// Local Typings
type GeneralActionType =
  'RESET_STATE' |
  'GENERAL_SET_GEO_LOCATION';

interface GeneralPayload {
  geoLocation: Position;
}

export interface GeneralState {
  geoLocation: Position | null;
}

export interface GeneralAction {
  payload?: GeneralPayload;
  type: GeneralActionType;
}

type GeneralReducer = (state: GeneralState, action: GeneralAction) => GeneralState;

// Local Variables
const initialState: GeneralState = {
  geoLocation: null,
};

const generalReducer: GeneralReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESET_STATE':
      return { ...initialState };
    case 'GENERAL_SET_GEO_LOCATION':
      return {
        ...state,
        geoLocation: action.payload?.geoLocation ?? null,
      };
    default:
      return { ...state };
  }
};

export default generalReducer;
