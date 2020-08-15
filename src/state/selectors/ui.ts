// External Dependencies
import { useSelector } from 'react-redux';

// Internal Dependencies
import { AppState } from 'state/reducers';

export const useSelectNavHeight = () =>
  useSelector((state: AppState) => state.ui.navHeight);

export const useSelectLeftNavItem = () =>
  useSelector((state: AppState) => state.ui.leftNavItem);

export const useSelectRightNavItem = () =>
  useSelector((state: AppState) => state.ui.rightNavItem);
