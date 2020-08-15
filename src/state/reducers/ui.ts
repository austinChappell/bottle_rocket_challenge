// Local Typings
type UIActionType =
  'RESET_STATE' |
  'UI_SET_NAV_HEIGHT' |
  'UI_SET_LEFT_NAV_ITEM' |
  'UI_SET_RIGHT_NAV_ITEM';

interface UIPayload {
  navHeight?: number;
  navItem?: React.ReactElement | null;
}

export interface UIState {
  leftNavItem: React.ReactElement | null;
  navHeight: number;
  rightNavItem: React.ReactElement | null;
}

export interface UIAction {
  payload?: UIPayload;
  type: UIActionType;
}

type UIReducer = (state: UIState, action: UIAction) => UIState;

// Local Variables
const initialState: UIState = {
  leftNavItem: null,
  navHeight: 0,
  rightNavItem: null,
};

const uiReducer: UIReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESET_STATE':
      return { ...initialState };
    case 'UI_SET_NAV_HEIGHT':
      return {
        ...state,
        navHeight: action.payload?.navHeight ?? 0,
      };
    case 'UI_SET_LEFT_NAV_ITEM':
      return {
        ...state,
        leftNavItem: action.payload?.navItem ?? null,
      };
    case 'UI_SET_RIGHT_NAV_ITEM':
      return {
        ...state,
        rightNavItem: action.payload?.navItem ?? null,
      };
    default:
      return { ...state };
  }
};

export default uiReducer;
