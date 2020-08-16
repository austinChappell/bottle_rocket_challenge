// External Dependencies
import React, { useEffect } from 'react';
import styled from '@emotion/styled';

// Internal Dependencies
import { MapProps } from 'components/shared/Map';
import Select from 'components/shared/Select';
import { useDidMount } from 'hooks/useDidMount';
import { useSelectField } from 'hooks/useSelectField';
import { useSelectGeoLocation } from 'state/selectors/general';
import { useSelectCategoryFilterOptions } from 'state/selectors/restaurants';
import { useAppDispatch } from 'state/store';

// Local Dependencies
import GeoLocationButton from './GeoLocationButton';

// Local Typings
interface Props {
  onCenterMapOnUser: (center: MapProps['center']) => void;
}

// Local Variables
const SectionNavContainer = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: 24,
});

// Component Definition
const FilterBar: React.FC<Props> = ({
  onCenterMapOnUser,
}) => {
  const dispatch = useAppDispatch();

  const didMount = useDidMount();

  const geoLocation = useSelectGeoLocation();
  const options = useSelectCategoryFilterOptions();

  const categoryField = useSelectField();

  console.log('category : ', categoryField.value);

  const handleClick = () => {
    if (geoLocation) {
      onCenterMapOnUser({
        lat: geoLocation.coords.latitude,
        lng: geoLocation.coords.longitude,
      });
    }
  };

  useEffect(() => {
    if (didMount) {
      dispatch({
        payload: {
          filter: {
            category: categoryField.value,
          },
        },
        type: 'RESTAURANTS_SET_FILTERS',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryField.value]);

  return (
    <SectionNavContainer>
      <div>
        <Select
          label="Category"
          options={options}
          {...categoryField}
        />
      </div>
      {geoLocation && (
        <GeoLocationButton onClick={handleClick} />
      )}
    </SectionNavContainer>
  );
};

export default FilterBar;
