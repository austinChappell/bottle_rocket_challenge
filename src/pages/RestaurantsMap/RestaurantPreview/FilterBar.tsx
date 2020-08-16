// External Dependencies
import React, { useEffect } from 'react';
import styled from '@emotion/styled';

// Internal Dependencies
import Input from 'components/shared/Input';
import { MapProps } from 'components/shared/Map';
import Select from 'components/shared/Select';
import { mediaQueries } from 'constants/breakpoints';
import colors from 'constants/colors';
import { useDidMount } from 'hooks/useDidMount';
import { useSelectField } from 'hooks/useSelectField';
import { useTextField } from 'hooks/useTextField';
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
  borderBottom: `1px solid ${colors.primaryDark}`,
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: 48,
  paddingBottom: 24,
});
const FilterContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,

  [`${mediaQueries.isMobileMax}`]: {
    '& > *': {
      width: '100%',
    },

    '& > *:not(:first-child)': {
      marginTop: 8,
    },
  },

  [`${mediaQueries.isTabletMin}`]: {
    '& > *:not(:first-child)': {
      marginLeft: 8,
    },

    flexDirection: 'row',
  },
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
  const searchField = useTextField();

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
            search: searchField.value,
          },
        },
        type: 'RESTAURANTS_SET_FILTERS',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryField.value, searchField.value]);

  return (
    <SectionNavContainer>
      <FilterContainer>
        <Select
          label="Category"
          options={options}
          {...categoryField}
        />

        <Input
          label="Search"
          {...searchField}
        />
      </FilterContainer>
      {geoLocation && (
        <GeoLocationButton onClick={handleClick} />
      )}
    </SectionNavContainer>
  );
};

export default FilterBar;
