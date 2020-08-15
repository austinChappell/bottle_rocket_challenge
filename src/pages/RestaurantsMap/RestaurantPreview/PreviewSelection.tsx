// External Dependencies
import React from 'react';
import styled from '@emotion/styled';

import Space from 'components/shared/Space';
import SectionTitleText from 'components/shared/Text/SectionTitleText';
import SubTitleText from 'components/shared/Text/SubTitleText';
import { Restaurant } from 'types/api';

// Local Typings
interface Props {
  selectedRestaurant: Restaurant;
}

// Local Variables
const StyledImg = styled.img({
  maxWidth: 500,
  width: '100%',
});

// Component Definition
const PreviewSelection: React.FC<Props> = ({
  selectedRestaurant,
}) => (
  <div>
    <SectionTitleText>
      {selectedRestaurant.name}
    </SectionTitleText>

    <Space my={6}>
      <SubTitleText>
        {selectedRestaurant.category}
      </SubTitleText>
    </Space>

    <StyledImg
      alt={selectedRestaurant.name}
      src={selectedRestaurant.backgroundImageURL}
    />
  </div>
);

export default PreviewSelection;
