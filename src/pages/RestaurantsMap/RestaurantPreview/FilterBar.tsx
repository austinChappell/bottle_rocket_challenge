// External Dependencies
import React from 'react';
import styled from '@emotion/styled';
import { useSelectField } from 'hooks/useSelectField';

// Internal Dependencies
import { MapProps } from 'components/shared/Map';
import Select from 'components/shared/Select';
import { useSelectGeoLocation } from 'state/selectors/general';
import { useSelectCategoryFilterOptions } from 'state/selectors/restaurants';

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
