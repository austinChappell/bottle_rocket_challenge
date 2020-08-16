// External Dependencies
import React from 'react';

// Internal Dependencies
import { MapProps } from 'components/shared/Map';
import PinIcon from 'components/shared/Map/PinIcon';
import Space from 'components/shared/Space';
import BodyText from 'components/shared/Text/BodyText';
import SectionTitleText from 'components/shared/Text/SectionTitleText';
import SubTitleText from 'components/shared/Text/SubTitleText';
import { Restaurant } from 'types/api';
import { useAppTheme } from 'utils/styled';

// Local Dependencies
import FilterBar from './FilterBar';
import PreviewDetails from './PreviewDetails';
import PreviewImage from './PreviewImage';
import { Section, TitleContainer, Wrapper } from './styles';

// Local Typings
interface Props {
  onCenterMapOnUser: (center: MapProps['center']) => void;
  selectedRestaurant: Restaurant | null;
}

// Component Definition
const RestaurantPreview: React.FC<Props> = ({
  onCenterMapOnUser,
  selectedRestaurant,
}) => {
  const theme = useAppTheme();

  return (
    <Section>
      <FilterBar onCenterMapOnUser={onCenterMapOnUser} />

      {selectedRestaurant ? (
        <>
          <TitleContainer>
            <SectionTitleText color={theme.styles.previewTitle}>
              {selectedRestaurant.name}
            </SectionTitleText>

            <Space mt={6}>
              <SubTitleText color="black">
                {selectedRestaurant.category}
              </SubTitleText>
            </Space>
          </TitleContainer>

          <Wrapper>
            <PreviewImage selectedRestaurant={selectedRestaurant} />

            <PreviewDetails selectedRestaurant={selectedRestaurant} />
          </Wrapper>
        </>
      ) : (
        <BodyText
          align="center"
          size="sm"
        >
          Hungry? Click <PinIcon /> to find some tasty grub.
        </BodyText>
      )}
    </Section>
  );
};

export default RestaurantPreview;
