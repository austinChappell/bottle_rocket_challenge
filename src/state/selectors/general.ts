// External Dependencies
import { useSelector } from 'react-redux';

// Internal Dependencies
import { AppState } from 'state/reducers';

export const useSelectGeoLocation = () =>
  useSelector((state: AppState) => state.general.geoLocation);
