// External Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

import mapImage from 'assets/images/icon_map@2x.png';
import NavLink from 'components/layout/Nav/NavLink';
import Page from 'components/layout/Page';
import Icon from 'components/shared/Icon';
import Space from 'components/shared/Space';
import BodyText from 'components/shared/Text/BodyText';
import SectionTitleText from 'components/shared/Text/SectionTitleText';
import styled from 'utils/styled';

// Local Variables
const Wrapper = styled.div({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  paddingTop: '20vh',
});

// Component Definition
const FourOhFour: React.FC = () => (
  <Page
    leftNavItem={null}
    rightNavItem={(
      <NavLink
        alt="go to map"
        src={mapImage}
        to="/map"
      />
    )}
    title="Page Not Found"
  >
    <Wrapper>
      <SectionTitleText color="primaryDark">
        Oops! Sorry, no food here!
      </SectionTitleText>

      <Space
        clone
        mb={16}
        mt={32}
      >
        <Icon
          name="foodOff"
          size="xl"
        />
      </Space>

      <Link to="/">
        <BodyText
          as="span"
          color="primaryDark"
        >
          Go Home
        </BodyText>
      </Link>
    </Wrapper>
  </Page>
);

export default FourOhFour;
